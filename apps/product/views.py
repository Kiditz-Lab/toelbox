from rest_framework import viewsets
from .models import Product
from .serializers import ProductSerializer
from .pagination import ProductCursorPagination
from drf_spectacular.utils import extend_schema
@extend_schema(
    request=ProductSerializer,
    responses={201: ProductSerializer},
    tags=['Products']
)
class ProductViewSet(viewsets.ModelViewSet):
    queryset=Product.objects.all()
    serializer_class = ProductSerializer
    pagination_class = ProductCursorPagination