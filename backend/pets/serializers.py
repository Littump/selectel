from rest_framework import serializers
from users.serializers import UserCustomSerializer

from pets import models


class PetSerializer(serializers.ModelSerializer):
    owner = UserCustomSerializer(read_only=True)

    class Meta:
        model = models.Pet
        fields = '__all__'

    def create(self, validated_data):
        owner = self.context.get("request").user
        return models.Pet.objects.create(owner=owner, **validated_data)


class AdvertisementSerializer(serializers.ModelSerializer):
    author = UserCustomSerializer(read_only=True)

    class Meta:
        model = models.Advertisement
        fields = '__all__'

    def create(self, validated_data):
        author = self.context.get("request").user
        return models.Advertisement.objects.create(author=author,
                                                   **validated_data)


class RequestSerializer(serializers.ModelSerializer):
    author = UserCustomSerializer(read_only=True)
    pet = PetSerializer(read_only=True)

    class Meta:
        model = models.Request
        fields = '__all__'

    def create(self, validated_data):
        author = self.context.get("request").user
        return models.Request.objects.create(author=author, **validated_data)
