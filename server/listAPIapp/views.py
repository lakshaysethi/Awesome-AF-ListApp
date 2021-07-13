from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
from .models import List

# Create your views here.

@login_required
def get_list(request):
    u = request.user
    user_list = TaskList.objects.get(user = u)
    res = {}
    res['']
    json = JsonResponse()
    return json 

