def prime_number(n, i=2):
    if n == i:
        return True
    elif n % i == 0:
        return False
    return prime_number(n, i + 1)

print(prime_number(12))