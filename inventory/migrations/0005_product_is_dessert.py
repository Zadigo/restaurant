# Generated by Django 4.0.1 on 2022-02-20 20:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('inventory', '0004_drink_is_hot_drink'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='is_dessert',
            field=models.BooleanField(default=False),
        ),
    ]
