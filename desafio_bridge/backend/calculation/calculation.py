import math

def divisors_calc(number):
    divisors = [1]

    for i in range(2, number+1):
        if number%i==0:
            divisors.append(i)

    return divisors

def prime_calc(divisors):
    if len(divisors) == 2:
        return True
    else:
        return False