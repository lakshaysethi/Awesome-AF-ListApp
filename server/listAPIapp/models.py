from django.db import models
from django.contrib.auth.models import User
# Create your models here.


import json




class Task(models.Model):
    name = models.CharField(max_length=30)
    done = models.BooleanField(default=False)
    archived = models.BooleanField(default=False)
    user = models.ForeignKey(User, on_delete=models.PROTECT)
    #ALBUM=  models.ForeignKey(Musician, on_delete=models.CASCADE)
    def __str__(self):
        return self.name +' of user '+  str(self.user)
    def toJSON(self):
        return json.dumps(self, default=lambda o: o.__dict__, 
            sort_keys=True, indent=4)
