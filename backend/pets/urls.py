from rest_framework.routers import DefaultRouter
from django.urls import include, path

from pets import views

v1_router = DefaultRouter()
v1_router.register(r'pets', views.PetViewSet, basename='pets')
v1_router.register(r'advertisements', views.AdvertisementViewSet,
                   basename='advertisements')

urlpatterns = [
    path('', include(v1_router.urls)),
]
