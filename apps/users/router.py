from rest_framework import routers

from apps.users.views import UserViewSet
router = routers.DefaultRouter()
router.register(r'', UserViewSet)
