# Generated by Django 3.2.8 on 2021-11-21 16:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('inventory', '0002_alter_drink_options'),
    ]

    operations = [
        migrations.AddField(
            model_name='drink',
            name='slug',
            field=models.SlugField(default='simple-drink'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='menu',
            name='slug',
            field=models.SlugField(default='another-item'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='product',
            name='slug',
            field=models.SlugField(default='whatever'),
            preserve_default=False,
        ),
    ]
