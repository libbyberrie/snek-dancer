from django.urls import path
from . import views

urlpatterns = [ 
	path('api/farm', views.FarmListCreate.as_view()),
]
