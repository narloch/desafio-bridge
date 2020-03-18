from django.http import HttpResponse
from django.shortcuts import render
from django.conf import settings
from . import calculation

def index(request):
    if request.method == 'POST' and request.POST.get('number') != None:
        number = int(request.POST.get('number'))

        divisors = calculation.divisors_calc(number)
        prime = calculation.prime_calc(divisors)

        if prime == True:
            prime_answer = "É primo"
        else:
            prime_answer = "Não é primo"

        return render(request, 'home.html', {
                'divisors' : divisors,
                'prime': prime_answer
            })

    return render(request, 'home.html', {})