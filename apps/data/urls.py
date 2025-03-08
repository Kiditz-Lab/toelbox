from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CSVToJsonViewSet

router = DefaultRouter()
router.register(r'csv-to-json', CSVToJsonViewSet, basename='csv-to-json')

urlpatterns = [
    path('', include(router.urls)),
]
