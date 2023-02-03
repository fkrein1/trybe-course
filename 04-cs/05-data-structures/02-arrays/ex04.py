entradas = [1, 2, 3, 1]
saídas = [3, 2, 7, 9]
instante_buscado = 4
resultado: 1


def students_in_library(entry: list[int], exit: list[int], time: int) -> int:
    students = 0
    for i in range(len(entry)):
        if entry[i] <= time and exit[i] >= time:
            students += 1

    print(students)


students_in_library(entradas, saídas, instante_buscado)