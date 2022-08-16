# Generated by Django 3.0 on 2022-08-05 09:59

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('productID', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(default='', max_length=100)),
                ('size', models.DecimalField(decimal_places=5, max_digits=15)),
                ('price', models.DecimalField(decimal_places=5, max_digits=15)),
                ('currentStock', models.IntegerField()),
            ],
        ),
    ]
