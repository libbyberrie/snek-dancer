from django.shortcuts import render

# Create your views here.
def snek_catch(request):
    return render(request, 'farms/snek_catch.html', {})
