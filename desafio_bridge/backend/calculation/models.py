from django.db import models

class Number(models.Model):
    number = models.IntegerField()
    divisors = models.CharField(max_length=100)
    prime = models.BooleanField()