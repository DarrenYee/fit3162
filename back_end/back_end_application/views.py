from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Product
from .serializers import ProductSerializer
from rest_framework import serializers, status
import pdb

# Create your views here.

def home (request):
    return HttpResponse("Test")
  
@api_view(['GET'])
def ApiOverview(request):
    api_urls = {
        'all_product': '/',
        'Search by ID': '/?product=product_id',
        'Add': '/create',
        'Update': '/update/pk',
        'Delete': '/item/pk/delete'
    }
  
    return Response(api_urls)

@api_view(['POST'])
def add_products(request):
    product = ProductSerializer(data=request.data)
  
    # validating for already existing data
    if Product.objects.filter(**request.data).exists():
        raise serializers.ValidationError('This data already exists')
  
    if product.is_valid():
        product.save()
        return Response(product.data)
    else:
        return Response(status=status.HTTP_404_NOT_FOUND)



@api_view(['GET'])
def view_products(request):
    
    # checking for the parameters from the URL
    if request.query_params:
        products = Product.objects.filter(**request.query_param.dict())
    else:
        products = Product.objects.all()
  
    # if there is something in items else raise error
    if products:
        return JsonResponse(data=list(products.values()), safe=False)

    else:
        return Response(status=status.HTTP_404_NOT_FOUND)