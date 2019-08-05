from django.urls import path
from . import views

urlpatterns = [
    path('', views.snek_catch, name='snek_catch'),
]
