from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import Product

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'price', 'created_at')
    list_filter = ('created_at',)
    search_fields = ('name',)
    ordering = ('-created_at',)
