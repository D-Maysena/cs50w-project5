from .models import User, Evento, Organizacion, Comunidad, SeguimientoComunidad,Publicaciones, Animal, Adopcion, Donaciones, Plan, Suscripcion, Comentario, Email
from rest_framework import serializers
from rest_framework.exceptions import AuthenticationFailed
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.contrib.auth import authenticate
from django.utils.encoding import smart_str, force_str, smart_bytes
from django.utils.http import urlsafe_base64_decode, urlsafe_base64_encode
from django.contrib.sites.shortcuts import get_current_site
from rest_framework.exceptions import ValidationError
from .utils import send_normal_email, Google, register_social_user

from django.urls import reverse
from django.conf import settings

from rest_framework_simplejwt.tokens import RefreshToken, TokenError



class ComunidadSerializer(serializers.ModelSerializer):
    seguidores = serializers.SerializerMethodField()
    publicaciones = serializers.SerializerMethodField()
    sigue_usuario = serializers.SerializerMethodField()

    class Meta:
        model = Comunidad
        fields = ['id', 'nombre', 'descripcion', 'fecha_creacion', 'imagen', 'creador', 'seguidores', "publicaciones", "sigue_usuario"]

    def get_seguidores(self, obj):
        return SeguimientoComunidad.objects.filter(comunidad=obj).count()

    def get_publicaciones(self, obj):
        publicaciones = Publicaciones.objects.filter(comunidad=obj)
        return PublicationsSerializer(publicaciones, many=True).data

    def get_sigue_usuario(self, obj):
        user_id = self.context.get('user_id')
        if user_id is None:
            return False
        return SeguimientoComunidad.objects.filter(follower_user=user_id, comunidad=obj).exists()

    def create(self, validated_data):
        creador = self.context['request'].user
        return Comunidad.objects.create(creador=creador, **validated_data)


class SeguimientoComunidadSerializer(serializers.ModelSerializer):
    user_id = serializers.UUIDField(write_only=True)
    comunidad_id = serializers.UUIDField(write_only=True)

    class Meta:
        model = SeguimientoComunidad
        fields = ['id', 'user_id', 'comunidad', 'comunidad_id', 'date']
        read_only_fields = ['comunidad', 'date']

    def validate(self, data):
        user_id = data.get('user_id')
        comunidad_id = data.get('comunidad_id')

        # Verificar si la comunidad con el ID proporcionado existe
        try:
            comunidad = Comunidad.objects.get(id=comunidad_id)
        except Comunidad.DoesNotExist:
            raise serializers.ValidationError("Community with provided ID does not exist.")
        
        # Asignar la comunidad encontrada al campo comunidad
        data['comunidad'] = comunidad

        return data

    def create(self, validated_data):
        # Extraer y eliminar user_id y comunidad_id de validated_data
        user_id = validated_data.pop('user_id')
        comunidad_id = validated_data.pop('comunidad_id')

        # Obtener la instancia del usuario
        follower_user = User.objects.get(id=user_id)

        # Verificar si ya existe un seguimiento para este usuario y comunidad
        seguimiento = SeguimientoComunidad.objects.filter(follower_user=follower_user, comunidad_id=comunidad_id).first()

        if seguimiento:
            # Si ya sigue a la comunidad, eliminar el seguimiento
            seguimiento.delete()
            return {'message': 'You have unfollowed this community.'}
        else:
            # Si no sigue a la comunidad, crear el seguimiento
            seguimiento = SeguimientoComunidad.objects.create(follower_user=follower_user, comunidad_id=comunidad_id, **validated_data)
            return {'message': 'You have followed this community.'}
# class SeguidoresComunidadSerializer(serializers.ModelSerializer):
#     follower_user = serializers.ReadOnlyField(source='follower_user.email')

#     class Meta:
#         model = SeguimientoComunidad
#         fields = ['follower_user', 'date']

# class SeguidosUsuarioSerializer(serializers.ModelSerializer):
#     following_communities = SeguidoresComunidadSerializer(many=True, read_only=True)

#     class Meta:
#         model = User
#         fields = ['first_name', 'following_communities']
        

class PublicationsSerializer(serializers.ModelSerializer):
    autor_organizacion = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = Publicaciones
        fields = ['descripcion', 'imagen', 'autor_usuario', 'autor_organizacion']

    def validate(self, data):
        # Validar que solo un tipo de autor esté presente
        autor_usuario = data.get('autor_usuario', None)
        autor_organizacion = data.get('autor_organizacion', None)

        if autor_usuario and autor_organizacion:
            raise serializers.ValidationError("Solo se puede especificar un tipo de autor")

        if not autor_usuario and not autor_organizacion:
            raise serializers.ValidationError("Se debe especificar un tipo de autor")

        return data

    def create(self, validated_data):
        autor_usuario = validated_data.pop('autor_usuario', None)
        autor_organizacion = validated_data.pop('autor_organizacion', None)

        if autor_usuario:
            return Publicaciones.objects.create(autor=autor_usuario, **validated_data)
        elif autor_organizacion:
            return Publicaciones.objects.create(autor=autor_organizacion, **validated_data)
        
class CommentSerializer(serializers.ModelSerializer):
    publicacion_id = serializers.UUIDField(write_only=True)
    autor = serializers.HiddenField(default=serializers.CurrentUserDefault())
    
    class Meta:
        model = Comentario
        fields = ['texto', 'imagen', 'publicacion_id', 'autor']
    
    
    def create(self, validated_data):
        print(validated_data)
        autor = validated_data.pop('autor')
        publicacion_id = validated_data.pop('publicacion_id')
        publicacion = Publicaciones.objects.get(id=publicacion_id)
        
        return Comentario.objects.create(autor=autor,publicacion=publicacion, **validated_data)

class OrganizationSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Organizacion
        fields = ['nombre', 'tipo', 'servicios', 'horario_atencion', 'direccion', 'telefono', 'dueno']     

    def create(self, validated_data):
        dueno = self.context['request'].user
        return Organizacion.objects.create( **validated_data)

class AnimalSerializer(serializers.ModelSerializer):

    class Meta:
        model = Animal
        fields = ['nombre', 'edad','especie', 'raza', 'genero', 'descripcion', 'propietario_usuario', 'propietario_organizacion']

    def get_propietario(self, obj):
        if obj.propietario_usuario:
            return {
                'tipo': 'Usuario',
                'nombre': obj.propietario_usuario.first_name,
            }
        elif obj.propietario_organizacion:
            return {
                'tipo': 'Organización',
                'nombre': obj.propietario_organizacion.nombre,
            }
        else:
            return "Desconocido"
    
    def create(self, validated_data):
        return Animal.objects.create( **validated_data)

class AdopcionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Adopcion
        fields = ['animal', 'adoptante_usuario', 'adoptante_organizacion', 'activo', 'descripcion']

    def get_adoptante(self, obj):
        if obj.adoptante_usuario:
            return {
                'tipo': 'Usuario',
                'nombre': obj.adoptante_usuario.first_name,
            }
        elif obj.adoptante_organizacion:
            return {
                'tipo': 'Organización',
                'nombre': obj.adoptante_organizacion.nombre,
            }
        else:
            return "Adopción por definir"
    def create(self, validated_data):
        return Adopcion.objects.create( **validated_data)
    
class EventoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Evento
        fields = ['id', 'nombre', 'descripcion', 'organizador', 'fecha', 'ubicacion', 'tipo', 'activo']
    
    def create(self, validated_data):
        return Evento.objects.create( **validated_data)
class UserRegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(max_length=68, min_length=6, write_only=True)
    password2= serializers.CharField(max_length=68, min_length=6, write_only=True)

    class Meta:
        model=User
        fields = ['email', 'first_name', 'second_name', 'first_surname', 'second_surname', 'password', 'password2', 'address', 'phone_number']

    def validate(self, attrs):
        password=attrs.get('password', '')
        password2 =attrs.get('password2', '')
        if password !=password2:
            raise serializers.ValidationError("Passwords do not match.")
         
        return attrs

    def create(self, validated_data):
        user= User.objects.create_user(
            email=validated_data['email'],
            first_name=validated_data.get('first_name'),
            second_name=validated_data.get('second_name'),
            first_surname=validated_data.get('first_surname'),
            second_surname=validated_data.get('second_surname'),
            password=validated_data.get('password'),
            address=validated_data.get('address'),
            phone_number=validated_data.get('phone_number'),
            )
        return user
    
class LoginSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(max_length=155, min_length=6)
    password=serializers.CharField(max_length=68, write_only=True)
    full_name=serializers.CharField(max_length=255, read_only=True)
    access_token=serializers.CharField(max_length=255, read_only=True)
    refresh_token=serializers.CharField(max_length=255, read_only=True)

    class Meta:
        model = User
        fields = ['id', 'email', 'password', 'full_name', 'access_token', 'refresh_token']

    def validate(self, attrs):
        email = attrs.get('email')
        password = attrs.get('password')
        request=self.context.get('request')
        user = authenticate(request, email=email, password=password)
        if not user:
            raise AuthenticationFailed("Invalid credential try again.")
        if not user.is_verified:
            raise AuthenticationFailed("Email is not verified.")
        
        tokens=user.tokens()

        return {
            'id': user.id,
            'email':user.email,
            'full_name':user.get_full_name,
            "access_token":str(tokens.get('access')),
            "refresh_token":str(tokens.get('refresh'))
        }

class PasswordResetRequestSerializer(serializers.Serializer):
    email = serializers.EmailField(max_length=255)

    class Meta:
        fields = ['email']
 
    def validate(self, attrs):
        
        email = attrs.get('email')
        if User.objects.filter(email=email).exists():
            user= User.objects.get(email=email)
            uidb64=urlsafe_base64_encode(smart_bytes(user.id))
            token = PasswordResetTokenGenerator().make_token(user)
            request=self.context.get('request')
            current_site=get_current_site(request).domain
            relative_link =reverse('reset-password-confirm', kwargs={'uidb64':uidb64, 'token':token})
            print("token")
            print(relative_link)
            abslink=f"http://localhost:5173{relative_link}"
            print(abslink)
            email_body=f"Hi {user.first_name} use the link below to reset your password {abslink}"
            data={
                'email_body':email_body, 
                'email_subject':"Reset your Password", 
                'to_email':user.email
                }
            send_normal_email(data)

        return super().validate(attrs)
    
class SetNewPasswordSerializer(serializers.Serializer):
    password=serializers.CharField(max_length=100, min_length=6, write_only=True)
    confirm_password=serializers.CharField(max_length=100, min_length=6, write_only=True)
    uidb64=serializers.CharField(min_length=1, write_only=True)
    token=serializers.CharField(min_length=3, write_only=True)

    class Meta:
        fields = ['password', 'confirm_password', 'uidb64', 'token']

    def validate(self, attrs):
        try:
            token=attrs.get('token')
            uidb64=attrs.get('uidb64')
            password=attrs.get('password')
            confirm_password=attrs.get('confirm_password')

            user_id=force_str(urlsafe_base64_decode(uidb64))
            user=User.objects.get(id=user_id)
            if not PasswordResetTokenGenerator().check_token(user, token):
                raise AuthenticationFailed("reset link is invalid or has expired", 401)
            if password != confirm_password:
                raise AuthenticationFailed("passwords do not match")
            user.set_password(password)
            user.save()
            return user
        except Exception as e:
            return AuthenticationFailed("link is invalid or has expired")

class LogoutUserSerializer(serializers.Serializer):
    refresh_token=serializers.CharField()

    default_error_message = {
        'bad_token': ('Token is expired or invalid')
    }

    def validate(self, attrs):
        self.token = attrs.get('refresh_token')

        return attrs

    def save(self, **kwargs):
        try:
            token=RefreshToken(self.token)
            token.blacklist()
        except TokenError:
            return self.fail('bad_token')

class GoogleSignInSerializer(serializers.Serializer):
    access_token=serializers.CharField(min_length=6)


    def validate_access_token(self, access_token):
        user_data=Google.validate(access_token)
        try:
            user_data['sub']
            
        except:
            raise serializers.ValidationError("this token has expired or invalid please try again")
        
        if user_data['aud'] != settings.GOOGLE_CLIENT_ID:
                raise AuthenticationFailed('Could not verify user.')

        user_id=user_data['sub']
        email=user_data['email']
        first_name=user_data['given_name']
        last_name=user_data['family_name']
        provider='google'

        return register_social_user(provider, email, first_name, last_name)

class EmailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Email
        fields = ['id', 'subject', 'message', 'recipient', 'sender', 'sent_at']