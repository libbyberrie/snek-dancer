from django.db import models

class Farm(models.Model):
	name = models.CharField(max_length=255)
	modified = models.DateTimeField(auto_now_add=True)
	micropythons = models.IntegerField()
	minipythons = models.IntegerField()

