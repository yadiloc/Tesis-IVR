# Generated by Django 4.2.6 on 2023-11-12 03:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_alter_transferencia_melodia'),
    ]

    operations = [
        migrations.AlterField(
            model_name='transferencia',
            name='id',
            field=models.AutoField(editable=False, primary_key=True, serialize=False),
        ),
    ]
