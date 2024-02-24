from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include

from selectel.yasg import urlpatterns as doc_urls

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('users.urls')),
    path('api/', include('pets.urls')),
]

urlpatterns += doc_urls

if settings.DEBUG:
    urlpatterns += static(
        settings.MEDIA_URL,
        document_root=settings.MEDIA_ROOT
    )
