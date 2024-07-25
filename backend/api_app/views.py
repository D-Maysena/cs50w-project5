from django.shortcuts import render
from rest_framework.generics import GenericAPIView, ListCreateAPIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import EventoSerializer, SeguimientoComunidadSerializer, UserRegisterSerializer, LoginSerializer, PasswordResetRequestSerializer, SetNewPasswordSerializer, LogoutUserSerializer, GoogleSignInSerializer, PublicationsSerializer, ComunidadSerializer, CommentSerializer, OrganizationSerializer, AnimalSerializer, AdopcionSerializer, EmailSerializer
from rest_framework.permissions import IsAuthenticated
from django.utils.http import urlsafe_base64_decode
from django.utils.encoding import smart_str, DjangoUnicodeDecodeError
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from rest_framework_simplejwt.tokens import AccessToken
from rest_framework.views import APIView
from rest_framework import generics, permissions
from rest_framework.generics import RetrieveAPIView
from django.core.mail import send_mail  # Asegúrate de importar send_mail   
from .utils import send_generated_otp_to_email, verify_otp

from .models import OneTimePassword, User, Publicaciones, Comunidad, Comentario, SeguimientoComunidad, Organizacion, Animal, Adopcion, Evento, Email

# Create your views here.
class RegisterUserView(GenericAPIView):
    serializer_class = UserRegisterSerializer

    def post(self, request):
        user = request.data
        serializer=self.serializer_class(data=user)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            user_data=serializer.data
            send_generated_otp_to_email(user_data['email'])
            return Response({
                'data':user_data,
                'message':'thanks for signing up a passcode has be sent to verify your email'
            }, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class VerifyUserEmail(GenericAPIView):
    def post(self, request):
        try:
            passcode = request.data.get('otp')
            otp_obj=OneTimePassword.objects.get(otp=passcode)

            secret = otp_obj.secret
            user = otp_obj.user

            if not verify_otp(passcode, secret):
                return Response({'message':'Invalid passcode'}, status=status.HTTP_400_BAD_REQUEST)

            if not user.is_verified:
                user.is_verified=True
                user.save()

                return Response({
                    'message':'Account email verified successfully.'
                }, status=status.HTTP_200_OK)
            
            return Response({'message':'Account already verified.'}, status=status.HTTP_204_NO_CONTENT)
        
        except OneTimePassword.DoesNotExist as identifier:
            return Response({'message':'Passcode not provided.'}, status=status.HTTP_400_BAD_REQUEST)
        
class LoginUserView(GenericAPIView):
    serializer_class=LoginSerializer
    def post(self, request):
        serializer= self.serializer_class(data=request.data, context={'request': request})
        serializer.is_valid(raise_exception=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class TestingAuthenticatedReq(GenericAPIView):
    permission_classes=[IsAuthenticated]

    def get(self, request):

        data={
            'detail':'access accepted'
        }
        return Response(data, status=status.HTTP_200_OK)
    
class PasswordResetRequestView(GenericAPIView):
    serializer_class=PasswordResetRequestSerializer

    def post(self, request):
        serializer=self.serializer_class(data=request.data, context={'request':request})
        serializer.is_valid(raise_exception=True)
        return Response({'message':'we have sent you a link to reset your password'}, status=status.HTTP_200_OK)
    
class PasswordResetConfirm(GenericAPIView):

    def get(self, request, uidb64, token):
        try:
            user_id=smart_str(urlsafe_base64_decode(uidb64))
            user=User.objects.get(id=user_id)

            if not PasswordResetTokenGenerator().check_token(user, token):
                return Response({'message': 'Token is invalid or has expired.'}, status=status.HTTP_401_UNAUTHORIZED)
            return Response({'success':True, 'message':'Credentials is valid.', 'uidb64':uidb64, 'token':token}, status=status.HTTP_200_OK)

        except DjangoUnicodeDecodeError as identifier:
            return Response({'message': 'Token is invalid or has expired.'}, status=status.HTTP_401_UNAUTHORIZED)
        
class SetNewPasswordView(GenericAPIView):
    serializer_class=SetNewPasswordSerializer

    def patch(self, request):
        serializer=self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        return Response({'success':True, 'message':"password reset is succesful"}, status=status.HTTP_200_OK)
    
class LogoutApiView(GenericAPIView):
    serializer_class=LogoutUserSerializer
    permission_classes = [IsAuthenticated]

    def post(self, request):
        serializer=self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
class GoogleOauthSignInview(GenericAPIView):
    serializer_class=GoogleSignInSerializer

    def post(self, request):
        serializer=self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        data=((serializer.validated_data)['access_token'])
        return Response(data, status=status.HTTP_200_OK) 

class VerifyTokenView(APIView):

    def post(self, request, *args, **kwargs):
        token = request.data.get('access_token')
        try:
            AccessToken(token)
            return Response({"detail": "Token is valid"}, status=status.HTTP_200_OK)
        except:
            return Response({"detail": "Token is invalid or expired"}, status=status.HTTP_401_UNAUTHORIZED)
        

        
class PublicationsView(APIView):
    
    serializer_class = PublicationsSerializer
    
    def get_queryset(self):
        return Publicaciones.objects.all()
    
    def get(self, request, *args, **kwargs):
        # Obtener todas las publicaciones
        publicaciones = self.get_queryset()
        serializer = self.serializer_class(publicaciones, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            # Determinar si el autor es un usuario o una organización
            autor_usuario = serializer.validated_data.get('autor_usuario')
            autor_organizacion = serializer.validated_data.get('autor_organizacion')

            if autor_usuario:
                # Crear publicación como usuario
                publicacion = serializer.save(autor_usuario=autor_usuario)
            elif autor_organizacion:
                # Crear publicación como organización
                organizacion = Organizacion.objects.get(id=autor_organizacion.id)
                publicacion = serializer.save(autor_organizacion=autor_organizacion)

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
class CommunityView(ListCreateAPIView):
    queryset = Comunidad.objects.all()
    serializer_class = ComunidadSerializer

    def get(self, request, *args, **kwargs):
        # Obtener todas las publicaciones
        comunidades = self.get_queryset()
        serializer = self.serializer_class(comunidades, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    

    def perform_create(self, serializer):
        serializer.save(creador=self.request.user)

class CommunityDetailView(RetrieveAPIView):
    queryset = Comunidad.objects.all()
    serializer_class = ComunidadSerializer

    def get(self, request, *args, **kwargs):
        comunidad = self.get_object()
        user_id = request.headers.get('X-User-ID')

        serializer = self.serializer_class(comunidad, context={'request': request, 'user_id': user_id})
        return Response(serializer.data, status=status.HTTP_200_OK)

class OrganizationView(ListCreateAPIView):
    queryset = Organizacion.objects.all()
    serializer_class = OrganizationSerializer
    permission_classes = [IsAuthenticated]

    def get(self, request, *args, **kwargs):
        # Obtener todas las publicaciones
        organizations = self.get_queryset()
        serializer = self.serializer_class(organizations, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    

    def perform_create(self, serializer):
        serializer.save()

class AnimalView(ListCreateAPIView):
    queryset = Animal.objects.all()
    serializer_class = AnimalSerializer
    permission_classes = [IsAuthenticated]

    def get(self, request, *args, **kwargs):
        # Obtener todas las publicaciones
        animals = self.get_queryset()
        serializer = self.serializer_class(animals, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    

    def perform_create(self, serializer):
        serializer.save()

class AdoptionView(ListCreateAPIView):
    queryset = Adopcion.objects.all()
    serializer_class = AdopcionSerializer
    permission_classes = [IsAuthenticated]

    def get(self, request, *args, **kwargs):
        # Obtener todas las publicaciones
        adoptions = self.get_queryset()
        serializer = self.serializer_class(adoptions, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    

    def perform_create(self, serializer):
        serializer.save()
 
class CommentsView(ListCreateAPIView):
    queryset = Comentario.objects.all()
    serializer_class = CommentSerializer
    permission_classes = [IsAuthenticated]
    
    def get(self, request, *args, **kwargs):
        # Obtener todas las publicaciones
        comments = self.get_queryset()
        serializer = self.serializer_class(comments, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def perform_create(self, serializer):
        serializer.save(autor=self.request.user)
        
class EventsView(generics.ListCreateAPIView):
    queryset = Evento.objects.all()
    serializer_class = EventoSerializer

    def perform_create(self, serializer):
        # Obtener la organización del usuario autenticado
        organizaciones_del_usuario = self.request.user.organizaciones.all()
        
        # Si el usuario tiene al menos una organización asociada, usar la primera encontrada
        if organizaciones_del_usuario.exists():
            organizacion = organizaciones_del_usuario.first()
            serializer.save(organizador=organizacion)
        else:
            # Si no hay organizaciones asociadas al usuario, manejar el caso según tu lógica de negocio
            # Aquí puedes levantar una excepción, enviar un mensaje de error, etc.
            raise ValueError('El usuario autenticado no tiene una organización asociada.')

class CreateOrDeleteSeguimientoComunidadView(generics.CreateAPIView):
    queryset = SeguimientoComunidad.objects.all()
    serializer_class = SeguimientoComunidadSerializer

    def create(self, request, *args, **kwargs):
        # Obtener el ID del usuario desde el encabezado
        user_id = request.headers.get('X-User-ID')

        # Verificar que el ID del usuario esté presente en el encabezado
        if not user_id:
            return Response({'error': 'User ID not provided'}, status=status.HTTP_400_BAD_REQUEST)

        # Agregar el user_id al request data
        data = request.data.copy()
        data['user_id'] = user_id

        # Crear o eliminar el seguimiento utilizando el serializer
        serializer = self.get_serializer(data=data)
        serializer.is_valid(raise_exception=True)
        seguimiento = serializer.save()

        if isinstance(seguimiento, dict) and 'message' in seguimiento:
            return Response(seguimiento, status=status.HTTP_200_OK)
        else:
            headers = self.get_success_headers(serializer.data)
            return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
        
class EmailView(APIView):
    def get(self, request, *args, **kwargs):
        emails = Email.objects.all()
        serializer = EmailSerializer(emails, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, *args, **kwargs):
        serializer = EmailSerializer(data=request.data)
        if serializer.is_valid():
            email = serializer.save()
            send_mail(
                subject=email.subject,
                message=email.message,
                from_email=email.sender,
                recipient_list=[email.recipient],
                fail_silently=False,
            )
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)