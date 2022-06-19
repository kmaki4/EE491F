from django.conf import settings
from django.db import models
from django.utils import timezone

class Greeting(models.Model):
    message = models.CharField(max_length=200)