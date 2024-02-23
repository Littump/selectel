from django.db import models

from users.models import User


class Pet(models.Model):
    type = models.CharField(max_length=150)
    breed = models.CharField(max_length=150, blank=True)
    blood_type = models.CharField(max_length=150, blank=True)
    age = models.IntegerField(blank=True)
    habits = models.TextField(blank=True)
    avatar = models.ImageField(upload_to='avatar/', blank=True)
    nickname = models.CharField(max_length=150, blank=True)
    owner = models.ForeignKey(User, on_delete=models.CASCADE,
                              related_name='pets')


class Advertisement(models.Model):
    need_blood_types = models.CharField(max_length=100)
    date = models.DateTimeField(blank=True)
    city = models.CharField(max_length=150)
    address = models.CharField(max_length=150)
    progress = models.IntegerField(blank=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE,
                               related_name='advertisements')
    pet = models.ForeignKey(Pet, on_delete=models.CASCADE,
                            related_name='advertisements')


class Request(models.Model):
    reason = models.CharField(max_length=150, blank=True)
    address = models.CharField(max_length=150, blank=True)
    blood_amount = models.FloatField(blank=True)
    contact = models.CharField(max_length=150)
    pet = models.ForeignKey(Pet, on_delete=models.CASCADE,
                            related_name='requests')
    date = models.DateTimeField(blank=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE,
                               related_name='requests')
