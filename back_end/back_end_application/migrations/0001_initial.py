# Generated by Django 3.0 on 2022-10-10 23:44

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0011_update_proxy_permissions'),
    ]

    operations = [
        migrations.CreateModel(
            name='BatchStatus',
            fields=[
                ('batchStatusID', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('status', models.CharField(default='', max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Customer',
            fields=[
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to=settings.AUTH_USER_MODEL)),
                ('first_name', models.CharField(default='', max_length=100)),
                ('last_name', models.CharField(default='', max_length=100)),
                ('email', models.EmailField(max_length=254, unique=True, verbose_name='email address')),
                ('phone', models.IntegerField(default=0)),
                ('shipping_address', models.CharField(default='', max_length=300)),
            ],
        ),
        migrations.CreateModel(
            name='CustomerOrder',
            fields=[
                ('customerOrderID', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('dateCreated', models.DateTimeField()),
                ('lastUpdated', models.DateTimeField()),
                ('customerID', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='back_end_application.Customer')),
            ],
        ),
        migrations.CreateModel(
            name='CustomerOrderStatus',
            fields=[
                ('updateID', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('updateType', models.CharField(max_length=512)),
            ],
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('productID', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('name', models.CharField(default='', max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Supplier',
            fields=[
                ('supplierID', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to=settings.AUTH_USER_MODEL)),
                ('name', models.CharField(max_length=100)),
                ('address', models.CharField(max_length=200)),
                ('phone', models.IntegerField(default=0)),
            ],
        ),
        migrations.CreateModel(
            name='SupplyOrder',
            fields=[
                ('supplyOrderID', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('invoiceNumber', models.CharField(default='000000000000', max_length=12)),
                ('date', models.DateTimeField()),
                ('supplierID', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='back_end_application.Supplier')),
            ],
        ),
        migrations.CreateModel(
            name='SupplyOrderStatus',
            fields=[
                ('updateID', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('updateType', models.CharField(choices=[('DLY', 'Delayed'), ('DVD', 'Delivered'), ('SNT', 'Sent'), ('CNC', 'Cancelled'), ('OTH', 'Other')], max_length=512)),
                ('updateContents', models.CharField(max_length=512)),
                ('supplyOrderID', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='back_end_application.SupplyOrder')),
            ],
        ),
        migrations.CreateModel(
            name='SupplierProduct',
            fields=[
                ('supplierProductID', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('price', models.DecimalField(decimal_places=5, max_digits=15)),
                ('currentStock', models.IntegerField(default=0)),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='back_end_application.Product')),
                ('supplierID', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='back_end_application.Supplier')),
            ],
        ),
        migrations.CreateModel(
            name='Stock',
            fields=[
                ('stockID', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('amount', models.DecimalField(decimal_places=5, max_digits=15)),
                ('customerID', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='back_end_application.Customer')),
                ('productID', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='back_end_application.Product')),
            ],
        ),
        migrations.CreateModel(
            name='CustomerOrderContents',
            fields=[
                ('customerOrderContentsID', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('quantity', models.IntegerField()),
                ('customerOrderID', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='back_end_application.CustomerOrder')),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='back_end_application.Product')),
                ('supplierID', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='back_end_application.Supplier')),
            ],
        ),
        migrations.AddField(
            model_name='customerorder',
            name='customerOrderStatus',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='back_end_application.CustomerOrderStatus'),
        ),
        migrations.CreateModel(
            name='Batch',
            fields=[
                ('batchID', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('dateReceived', models.DateTimeField()),
                ('expiryDate', models.DateTimeField()),
                ('quantity', models.IntegerField()),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='back_end_application.Product')),
                ('status', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='back_end_application.BatchStatus')),
            ],
        ),
    ]
