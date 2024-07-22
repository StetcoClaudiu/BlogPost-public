from django.db import models
from datetime import date
from django.contrib.auth.models import User

# Create your models here.
class BlogPost(models.Model):
    title=models.CharField(max_length=20,default='')
    content=models.CharField(max_length=500,default='')
    author=models.ForeignKey(User, on_delete=models.CASCADE)
    created_at=models.DateField(default=date.today)
    updated_at=models.DateField(default=date.today)
