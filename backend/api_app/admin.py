from django.contrib import admin
from .models import User, OneTimePassword, Plan, Suscripcion, Comunidad, SeguimientoComunidad, Publicaciones, Comentario, Evento,Organizacion, Animal, Adopcion, Donaciones

# Register your models here.
admin.site.register(User)
admin.site.register(OneTimePassword)
admin.site.register(Plan)
admin.site.register(Suscripcion)
admin.site.register(Comunidad)
admin.site.register(SeguimientoComunidad)
admin.site.register(Publicaciones)
admin.site.register(Comentario)
admin.site.register(Evento)
admin.site.register(Organizacion)
admin.site.register(Animal)
admin.site.register(Adopcion)
admin.site.register(Donaciones)