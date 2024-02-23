from rest_framework.routers import DefaultRouter
from django.urls import include, path

from pets import views

app_name = 'pets'

v1_router = DefaultRouter()
v1_router.register(app_name, views.PetViewSet, basename=app_name)
v1_router.register('advertisements', views.AdvertisementViewSet,
                   basename='advertisements')

urlpatterns = [
    path('', include(v1_router.urls)),
]
