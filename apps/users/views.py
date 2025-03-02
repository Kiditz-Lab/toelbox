from rest_framework import viewsets
from django.contrib.auth.models import User
from drf_spectacular.utils import extend_schema
from apps.users.serializers import UserSerializer
@extend_schema(
    request=UserSerializer,
    responses={201: UserSerializer},
    tags=['Users']
)
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
