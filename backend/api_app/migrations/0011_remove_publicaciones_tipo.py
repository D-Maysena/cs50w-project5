# Generated by Django 5.0.6 on 2024-07-05 23:47

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api_app', '0010_evento_activo'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='publicaciones',
            name='tipo',
        ),
    ]