from farms.models import Farm
from farms.serializers import FarmSerializer
from rest_framework import generics

class FarmListCreate(generics.ListCreateAPIView):
	queryset = Farm.objects.all()
	serializer_class = FarmSerializer

# Create your views here.
