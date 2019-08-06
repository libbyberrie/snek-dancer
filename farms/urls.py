from django.urls import path
from . import views

urlpatterns = [
    path('snek', views.snek_catch, name='snek_catch'),
	path('api/farm', views.FarmListCreate.as_view()),
]
