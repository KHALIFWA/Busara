# Generated by Django 2.2.4 on 2019-08-17 12:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bank', '0002_userbankaccount'),
    ]

    operations = [
        migrations.CreateModel(
            name='TransactionMethod',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('method_name', models.CharField(max_length=250)),
                ('created', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
