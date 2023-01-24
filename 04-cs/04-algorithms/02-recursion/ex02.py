def count_even_numbers(n):
    if n == 1:
      return 0
    elif n % 2 == 0:
      return 1 + count_even_numbers(n-1)
    else: 
      return count_even_numbers(n - 1)