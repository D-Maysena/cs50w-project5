from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.utils.translation import gettext_lazy as _
from rest_framework_simplejwt.tokens import RefreshToken, TokenError


from api_app.managers import UserManager

import uuid

AUTH_PROVIDERS ={'email':'email', 'google':'google'}

HORARIO_ATENCION_CHOICES = [
    ('LUN-VIE 7AM-4PM', 'Lunes a Viernes, 7:00 AM - 4:00 PM'),
    ('LUN-VIE 8AM-5PM', 'Lunes a Viernes, 8:00 AM - 5:00 PM'),
    ('LUN-VIE 9AM-6PM', 'Lunes a Viernes, 9:00 AM - 6:00 PM'),
    ('LUN-SAB 7AM-3PM', 'Lunes a Sábado, 7:00 AM - 3:00 PM'),
    ('LUN-SAB 8AM-4PM', 'Lunes a Sábado, 8:00 AM - 4:00 PM'),
    ('LUN-SAB 9AM-5PM', 'Lunes a Sábado, 9:00 AM - 5:00 PM'),
    ('LUN-DOM 8AM-2PM', 'Lunes a Domingo, 8:00 AM - 2:00 PM'),
    ('LUN-DOM 9AM-3PM', 'Lunes a Domingo, 9:00 AM - 3:00 PM'),
]

# Create your models here.
class User(AbstractBaseUser, PermissionsMixin):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    first_name = models.CharField(max_length=100, verbose_name=_("First Name"))
    second_name = models.CharField(max_length=100, verbose_name=_("Second Name"), null=True, blank=True)
    first_surname = models.CharField(max_length=100, verbose_name=_("First Surname"))
    second_surname = models.CharField(max_length=100, verbose_name=_("Second Surname"), null=True, blank=True)
    email = models.EmailField(max_length=255, verbose_name=_("Email Address"), unique=True)
    
    address = models.CharField(max_length=255, verbose_name=_("Address"), null=True, blank=True)
    phone_number = models.CharField(max_length=15, verbose_name=_("Phone Number"), null=True, blank=True)

    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    is_verified=models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    date_joined = models.DateTimeField(auto_now_add=True)
    last_login = models.DateTimeField(auto_now=True)
    auth_provider=models.CharField(max_length=50, blank=False, null=False, default=AUTH_PROVIDERS.get('email'))


    USERNAME_FIELD = "email"
    REQUIRED_FIELDS=["first_name", "second_name", "first_surname", "second_surname", "address", "phone_number"]

    objects = UserManager()

    def tokens(self):    
        refresh = RefreshToken.for_user(self)
        return {
            "refresh":str(refresh),
            "access":str(refresh.access_token)
        }


    def __str__(self):
        return self.email

    @property
    def get_full_name(self):
        return f"{self.first_name} {self.first_surname}"

    class Email(models.Model):
        subject = models.CharField(max_length=255)
        message = models.TextField()
        recipient = models.EmailField()
        sender = models.EmailField()
        sent_at = models.DateTimeField(auto_now_add=True)

        def __str__(self):
            return self.subject


class OneTimePassword(models.Model):
    user=models.OneToOneField(User, on_delete=models.CASCADE)
    otp=models.CharField(max_length=6)
    secret = models.CharField(max_length=32)
    timestamp = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.user.first_name} - otp code"
    
    
class Plan(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    descripcion = models.CharField(max_length=255)
    tipo = models.CharField(max_length=50, choices=[('Básico', 'Básico'), ('Medio', 'Medio'), ('Premium', 'Premium')])

    def __str__(self):
        return self.descripcion

class Suscripcion(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    suscriptor = models.ForeignKey(User, on_delete=models.CASCADE, related_name='suscripciones')
    destinatario = models.CharField(max_length=255)
    monto_mensual = models.DecimalField(max_digits=10, decimal_places=2)
    fecha_inicio = models.DateField()
    fecha_fin = models.DateField(null=True, blank=True)
    plan = models.ForeignKey(Plan, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.suscriptor.email} - {self.plan.descripcion}"

class Comunidad(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    nombre = models.CharField(max_length=255)
    descripcion = models.TextField()
    creador = models.ForeignKey(User, on_delete=models.CASCADE)
    fecha_creacion = models.DateField(auto_now_add=True)
    imagen = models.ImageField(null=True, blank=True)
    seguidores = models.ManyToManyField(User, related_name='siguiendo', through='SeguimientoComunidad')
    
    def __str__(self):
        return self.nombre

class SeguimientoComunidad(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    follower_user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="following_communities")
    comunidad = models.ForeignKey(Comunidad, on_delete=models.CASCADE, related_name="followers")
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.follower_user.email} sigue {self.comunidad.nombre}"
    
class Organizacion(models.Model):

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    nombre = models.CharField(max_length=255)
    tipo = models.CharField(max_length=50, choices=[('Veterinaria', 'Veterinaria'), ('CasaHogar', 'Casa Hogar'), ('Refugio', 'Refugio')])
    servicios = models.TextField()
    horario_atencion = models.CharField(max_length=50, choices=HORARIO_ATENCION_CHOICES)
    direccion = models.CharField(max_length=255)
    telefono = models.CharField(max_length=15)
    dueno = models.ForeignKey(User, on_delete=models.CASCADE, related_name='organizaciones')

    def __str__(self):
        return self.nombre

class Publicaciones(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    autor_usuario = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    autor_organizacion = models.ForeignKey(Organizacion, on_delete=models.CASCADE, null=True, blank=True, related_name='publicaciones_organizacion')
    descripcion = models.TextField()
    fecha_publicacion = models.DateField(auto_now_add=True)

    imagen = models.ImageField(null=True, blank=True)
    comunidad = models.ForeignKey(Comunidad, on_delete=models.CASCADE, null=True, blank=True)

    def save(self, *args, **kwargs):
        # Asegurar que al menos uno de los campos autor_usuario o autor_organizacion esté lleno
        if not self.autor_usuario and not self.autor_organizacion:
            raise ValueError('Debe especificar al menos un autor (usuario o organización)')
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.descripcion[:20]} - {self.fecha_publicacion}"

class Comentario(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    autor = models.ForeignKey(User, on_delete=models.CASCADE)
    publicacion = models.ForeignKey(Publicaciones, on_delete=models.CASCADE, related_name='comments')
    texto = models.TextField()
    fecha = models.DateField(auto_now_add=True)
    imagen = models.ImageField(null=True, blank=True)

    def __str__(self):
        return f"Comentario de: {self.autor.email} en {self.publicacion}"

class Evento(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    nombre = models.CharField(max_length=255)
    descripcion = models.TextField()
    organizador = models.ForeignKey(Organizacion, on_delete=models.CASCADE, related_name='eventos_programados')
    fecha = models.DateField()
    ubicacion = models.CharField(max_length=255)
    tipo = models.CharField(max_length=50, choices=[
        ('JornadaVacunacion', 'Jornada de Vacunación'),
        ('CampañaEsterilizacion', 'Campaña de Esterilización'),
        ('CharlaEducativa', 'Charla Educativa')
    ])
    activo = models.BooleanField(default=True)  # Indica si el evento está activo

    def __str__(self):
        return self.nombre
class Animal(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    nombre = models.CharField(max_length=255)
    especie = models.CharField(max_length=50)
    raza = models.CharField(max_length=50)
    edad = models.IntegerField()
    genero = models.CharField(max_length=10, choices=[
        ('Macho', 'Macho'),
        ('Hembra', 'Hembra')
    ])
    descripcion = models.TextField()
    imagen = models.ImageField(null=True, blank=True)
    propietario_usuario = models.ForeignKey(User, on_delete=models.CASCADE, related_name='animales_propios', null=True, blank=True)
    propietario_organizacion = models.ForeignKey(Organizacion, on_delete=models.CASCADE, related_name='animales_propios', null=True, blank=True)

    def save(self, *args, **kwargs):
        # Asegurar que al menos uno de los campos propietario_usuario o propietario_organizacion esté lleno
        if not self.propietario_usuario and not self.propietario_organizacion:
            raise ValueError('Debe especificar al menos un propietario (usuario o organización)')
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.nombre} - Propietario: {self.get_propietario()}"

    def get_propietario(self):
        if self.propietario_usuario:
            return f"Usuario: {self.propietario_usuario.first_name}"
        elif self.propietario_organizacion:
            return f"Organización: {self.propietario_organizacion.nombre}"
        else:
            return "Desconocido"

class Adopcion(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    animal = models.ForeignKey(Animal, on_delete=models.CASCADE, related_name='adopciones')
    adoptante_usuario = models.ForeignKey(User, on_delete=models.CASCADE, related_name='adopciones_realizadas', null=True, blank=True)
    adoptante_organizacion = models.ForeignKey(Organizacion, on_delete=models.CASCADE, related_name='adopciones_realizadas', null=True, blank=True)
    activo = models.BooleanField(default=True)
    descripcion = models.TextField()

    def save(self, *args, **kwargs):
        # Obtener el animal antes de cambiar el propietario
        animal_anterior = self.animal

        # Cambiar el propietario del animal al nuevo adoptante (usuario u organización)
        if self.adoptante_usuario:
            animal_anterior.propietario_usuario = self.adoptante_usuario
            animal_anterior.propietario_organizacion = None  # Asegurar que no haya una organización como propietario
        elif self.adoptante_organizacion:
            animal_anterior.propietario_organizacion = self.adoptante_organizacion
            animal_anterior.propietario_usuario = None  # Asegurar que no haya un usuario como propietario

        # Guardar el animal actualizado
        animal_anterior.save()

        # Desactivar otras adopciones activas del mismo animal si las hay
        if not self.activo:
            Adopcion.objects.filter(animal=self.animal, activo=True).exclude(id=self.id).update(activo=False)

        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.get_adoptante()}"

    def get_adoptante(self):
        if self.adoptante_usuario:
            return f"Adoptado por usuario: {self.adoptante_usuario.first_name}"
        elif self.adoptante_organizacion:
            return f"Adoptado por organización: {self.adoptante_organizacion.nombre}"
        else:
            return "Adopción por definir"


class Donaciones(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    donante = models.ForeignKey(User, on_delete=models.CASCADE, related_name='donaciones_hechas')
    destinatario = models.ForeignKey(User, on_delete=models.CASCADE, related_name='donaciones_recibidas')
    monto = models.DecimalField(max_digits=10, decimal_places=2)
    fecha = models.DateField(auto_now_add=True)

    def __str__(self):
        return f"{self.donante.email} - {self.destinatario.email}"