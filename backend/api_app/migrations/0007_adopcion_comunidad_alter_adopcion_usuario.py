# Generated by Django 5.0.6 on 2024-07-05 18:35

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api_app', '0006_remove_animal_propietario_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='adopcion',
            name='comunidad',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='adopciones', to='api_app.comunidad'),
        ),
        migrations.AlterField(
            model_name='adopcion',
            name='usuario',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='adopciones', to=settings.AUTH_USER_MODEL),
        ),
    ]