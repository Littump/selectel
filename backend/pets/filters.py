from django_filters import rest_framework
from django_filters.rest_framework import FilterSet
from pets import models


class AdvertisementFilter(FilterSet):
    type = rest_framework.CharFilter(
        field_name='type',
        lookup_expr='exact'
    )

    city = rest_framework.CharFilter(
        field_name='city',
        lookup_expr='exact'
    )

    need_blood_types = rest_framework.CharFilter(
        method='is_have_blood_type',
    )

    class Meta:
        model = models.Pet
        fields = ['type', 'need_blood_types', 'city']

    def is_have_blood_type(self, queryset, name, value):
        bloods = value.split(';')
        querysets = [
            queryset.filter(need_blood_types__contains=blood)
            for blood in bloods
        ]

        queryset = querysets[0]
        for q in querysets[1:]:
            queryset = queryset | q
        return queryset.distinct()
