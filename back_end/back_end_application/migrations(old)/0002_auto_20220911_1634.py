# Generated by Django 3.0 on 2022-09-11 06:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('back_end_application', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='customer',
            old_name='name',
            new_name='first_name',
        ),
        migrations.AddField(
            model_name='customer',
            name='last_name',
            field=models.CharField(default='', max_length=100),
        ),
    ]