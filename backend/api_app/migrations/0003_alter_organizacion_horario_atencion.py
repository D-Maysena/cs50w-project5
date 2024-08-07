# Generated by Django 5.0.6 on 2024-07-05 15:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api_app', '0002_alter_publicaciones_comunidad'),
    ]

    operations = [
        migrations.AlterField(
            model_name='organizacion',
            name='horario_atencion',
            field=models.CharField(choices=[('LUN-VIE 7AM-4PM', 'Lunes a Viernes, 7:00 AM - 4:00 PM'), ('LUN-VIE 8AM-5PM', 'Lunes a Viernes, 8:00 AM - 5:00 PM'), ('LUN-VIE 9AM-6PM', 'Lunes a Viernes, 9:00 AM - 6:00 PM'), ('LUN-SAB 7AM-3PM', 'Lunes a Sábado, 7:00 AM - 3:00 PM'), ('LUN-SAB 8AM-4PM', 'Lunes a Sábado, 8:00 AM - 4:00 PM'), ('LUN-SAB 9AM-5PM', 'Lunes a Sábado, 9:00 AM - 5:00 PM'), ('LUN-DOM 8AM-2PM', 'Lunes a Domingo, 8:00 AM - 2:00 PM'), ('LUN-DOM 9AM-3PM', 'Lunes a Domingo, 9:00 AM - 3:00 PM')], max_length=50),
        ),
    ]
