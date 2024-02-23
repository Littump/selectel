from django_filters import rest_framework
from django_filters.rest_framework import FilterSet
from pets import models


class PetFilter(FilterSet):
    type = rest_framework.CharFilter(
        field_name='type',
        lookup_expr='exact'
    )

    city = rest_framework.CharFilter(
        field_name='city',
        lookup_expr='exact'
    )

    blood_type = rest_framework.CharFilter(
        method='is_have_blood_type',
    )

    class Meta:
        model = models.Pet
        fields = ['type', 'blood_type', 'city']

    def is_have_blood_type(self, queryset, name, value):
        bloods = value.split(';')
        return queryset.filter(blood_type__in=bloods)
