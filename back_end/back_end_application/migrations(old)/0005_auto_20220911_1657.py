# Generated by Django 3.0 on 2022-09-11 06:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('back_end_application', '0004_auto_20220911_1655'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customer',
            name='phone',
            field=models.IntegerField(default=0),
        ),
    ]
