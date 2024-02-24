from django.contrib import admin
from pets import models


@admin.register(models.Pet)
class PetAdmin(admin.ModelAdmin):
    ...
