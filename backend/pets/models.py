from django.db import models

from users.models import User


class Pet(models.Model):
    type = models.CharField(max_length=150)
    breed = models.CharField(max_length=150, null=True)
    blood_type = models.CharField(max_length=150, null=True)
    age = models.IntegerField(null=True)
    habits = models.TextField(null=True)
    avatar = models.ImageField(upload_to='avatar/', null=True)
    nickname = models.CharField(max_length=150, null=True)
    owner = models.ForeignKey(User, on_delete=models.CASCADE,
                              related_name='pets')


class Advertisement(models.Model):
    need_blood_types = models.CharField(max_length=100, null=True)
    date = models.DateTimeField(null=True)
    city = models.CharField(max_length=150, null=True)
    address = models.CharField(max_length=150, null=True)
    reason = models.TextField(null=True)
    progress = models.IntegerField(null=True)
    blood_amount = models.IntegerField(null=True)
    contact = models.CharField(max_length=150, null=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE,
                               related_name='advertisements')
    pet = models.ForeignKey(Pet, on_delete=models.CASCADE,
                            related_name='advertisements')


class Request(models.Model):
    reason = models.CharField(max_length=150, null=True)
    address = models.CharField(max_length=150, null=True)
    blood_amount = models.FloatField(null=True)
    contact = models.CharField(max_length=150, null=True)
    pet = models.ForeignKey(Pet, on_delete=models.CASCADE,
                            related_name='requests')
    date = models.DateTimeField(null=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE,
                               related_name='requests')
