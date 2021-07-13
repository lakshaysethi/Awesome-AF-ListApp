from typing import cast
from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
from .models import Task
from django.shortcuts import get_object_or_404
# Create your views here.
import json
from django.contrib.auth.models import User

from django.views.decorators.csrf import csrf_exempt

# @login_required
@csrf_exempt
def get_list(request):
    u = User.objects.get(id=1)
    try:
        user_task_list_querydict = Task.objects.filter(user = u)
    except Exception as e:
        print(e)
        return JsonResponse({'status':'fail'})
    res = {}
    array = []
    for task in user_task_list_querydict:
        tskObj = {}
        tskObj['done'] = task.done
        tskObj['archived'] = task.archived
        tskObj['name'] = task.name
        array.append(tskObj)
    user_task_list = array
    res['task_list'] = user_task_list
    
    json = JsonResponse(res)
    return json

@csrf_exempt
def add_new_task(request):
    if request.method == "POST":
        task_name = request.POST.get('name')
        try:
            task = Task.objects.create(user = User.objects.get(id=1),name=task_name)
            task.save()
            return  JsonResponse({'status':'success'})
        except:
            return  JsonResponse({'message':'INVALID REQUEST'})

    return  JsonResponse({'message':'only post requests are allowed to this api endpoint'})

@csrf_exempt
def update_task(request):
    if request.method =="POST":
        try:
            task = Task.objects.get(id = request.POST.get('task_id'))
            task.done = request.POST.get('done')
            task.archived = request.POST.get('archieved')
            task.save()
            return  JsonResponse({'status':'success'})
        except Exception as e:
            print(e)
            return JsonResponse({'status':'fail'})
    return  JsonResponse({'message':'only post requests are allowed to this api endpoint'})
        

