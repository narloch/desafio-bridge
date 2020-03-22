from django.http import JsonResponse
from django.shortcuts import render
from django.conf import settings
from . import calculation
from django.views.decorators.csrf import csrf_exempt
import json
 
@csrf_exempt
def index(request):
    data = json.loads(request.body.decode('utf-8'))

    print(data)
    if request.method == 'POST' and data['number'] != None:
        number = int(data['number'])

        divisors = calculation.divisors_calc(number)
        prime = calculation.prime_calc(divisors)

        if prime == True:
            prime_answer = "É primo"
        else:
            prime_answer = "Não é primo"

        return JsonResponse (
            data={
                'divisors' : divisors,
                'prime': prime_answer,
                'number': number,
            }
        )

    return JsonResponse({})