from random import shuffle

from binary_search import binary_search
from bubble_sort import bubble_sort
from cronometro import Cronometro
from insertion_sort import insertion_sort
from merge_sort import merge_sort
from quick_sort import quick_sort
from selection_sort import selection_sort

# ex01
bubble = ["zebra", "macaco", "elefante", "arara", "javali"]
bubleFirst = ["macaco", "elefante", "arara", "javali", "zebra"]
bubbeSecond = ["elefante", "arara", "javali", "macaco", "zebra"]

# ex03

ordenados = list(range(10_000))
inversamente_ordenados = list(reversed(range(100)))
aleatorios = ordenados[:]  # copia dos ordenados
shuffle(aleatorios)  # embaralha eles

with Cronometro("insertion_sort_ordenado"):
    insertion_sort(ordenados)

with Cronometro("selection_sort_ordenado"):
    selection_sort(ordenados)

with Cronometro("insertion_sort_inverso"):
    insertion_sort(inversamente_ordenados)

with Cronometro("selection_sort_inverso"):
    selection_sort(inversamente_ordenados)

with Cronometro("insertion_sort_random"):
    insertion_sort(aleatorios)

with Cronometro("selection_sort_random"):
    selection_sort(aleatorios)

# ex 04

with Cronometro("merge_sort"):
    merge_sort(aleatorios)

with Cronometro("bubble_sort"):
    bubble_sort(aleatorios)
