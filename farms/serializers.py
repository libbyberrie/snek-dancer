from rest_framework import serializers
from farms.models import Farm

class FarmSerializer (serializers.ModelSerializer) :
	class Meta:
		model = Farm
		fields = ('name', 'modified', 'micropythons', 'curlyboi_snektions')
