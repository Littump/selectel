from djoser.serializers import UserSerializer

from users import models


class UserCustomSerializer(UserSerializer):
    class Meta:
        model = models.User
        fields = [
            'id',
            'username',
            'description',
            'first_name',
            'last_name',
            'middle_name',
            'logo',
            'city',
            'number',
            'vk_link',
            'ya_link',
            'cr_link',
            'is_open_link',
            'is_open_number',
        ]
