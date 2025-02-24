
from django.urls import path, include

from apps.users.router import router

urlpatterns = [
    path('', include(router.urls)),
]
