from django.http import JsonResponse
from django.shortcuts import render
from django.conf import settings
from . import calculation
from django.views.decorators.csrf import csrf_exempt
import json
from .models import Number
from django.core import serializers
from django.core.exceptions import ObjectDoesNotExist

 
@csrf_exempt
def index(request):
    if request.method == 'POST':
        data = json.loads(request.body.decode('utf-8'))

    if request.method == 'POST' and data['number'] != None:
        number = int(data['number'])

        divisors = calculation.divisors_calc(number)
        prime = calculation.prime_calc(divisors)

        if prime == True:
            prime_answer = "É primo"
        else:
            prime_answer = "Não é primo"

        try:
            n = Number.objects.get(number=number)
        
        except ObjectDoesNotExist:
            num = Number.objects.create(
                number=number,
                divisors=' '.join(map(str, divisors)) ,
                prime=prime,
            )
            num.save()

        return JsonResponse (
            data={
                'divisors' : divisors,
                'prime': prime_answer,
                'number': number,
            }
        )

    return JsonResponse({})

def repo(request):
    if request.method == 'GET':
        all_data = Number.objects.all()
        data_list = serializers.serialize('json', all_data)

        return JsonResponse (
            data = data_list,
            safe = False
        )

    return JsonResponse (
        data={
        }
    )