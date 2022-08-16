from django.urls import path 
from back_end_application import views
from . import views

urlpatterns = [
    path('', views.ApiOverview, name='home'),
    path('create/', views.add_products, name='add-items'),
    path('all/', views.view_products, name='view_items')


]
