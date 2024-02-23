from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    logo = models.ImageField(upload_to='logo/', blank=True)
    description = models.TextField(blank=True)
    middle_name = models.CharField(max_length=150, blank=True)
    city = models.CharField(max_length=150, blank=True)
    number = models.CharField(max_length=150, blank=True)
    vk_link = models.CharField(max_length=150, blank=True)
    ya_link = models.CharField(max_length=150, blank=True)
    cr_link = models.CharField(max_length=150, blank=True)
    is_open_link = models.BooleanField(blank=True, default=True)
    is_open_number = models.BooleanField(blank=True, default=True)
