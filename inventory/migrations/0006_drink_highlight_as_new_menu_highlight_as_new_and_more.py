# Generated by Django 4.0.1 on 2022-02-20 21:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('inventory', '0005_product_is_dessert'),
    ]

    operations = [
        migrations.AddField(
            model_name='drink',
            name='highlight_as_new',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='menu',
            name='highlight_as_new',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='product',
            name='highlight_as_new',
            field=models.BooleanField(default=False),
        ),
    ]