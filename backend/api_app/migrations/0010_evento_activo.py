# Generated by Django 5.0.6 on 2024-07-05 19:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api_app', '0009_alter_evento_organizador_alter_evento_tipo'),
    ]

    operations = [
        migrations.AddField(
            model_name='evento',
            name='activo',
            field=models.BooleanField(default=True),
        ),
    ]
