import time
import number_substitution1 as sol1
import number_substitution2a as sol2a
import number_substitution2b as sol2b
import number_substitution3 as sol3

solutions = [
    sol1,
    sol2a,
    sol2b,
    sol3,
]

def benchmark(func):
    # 100 (cem) números
    one_hundred = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] * 10
    # 1.000 (mil) números
    one_thousand = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] * 100
    # 10.000 (dez mil) números
    ten_thousand = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] * 1000

    start_time = time.time()
    func(one_hundred)
    print(f"Cem: {(time.time() - start_time):.4f} segundos")

    start_time = time.time()
    func(one_thousand)
    print(f"Mil: {(time.time() - start_time):.4f} segundos")

    start_time = time.time()
    func(ten_thousand)
    print(f"Dez mil: {(time.time() - start_time):.4f} segundos")

if __name__ == "__main__":
    for sol in solutions:
        print('=' * 30)
        print(f"* {sol.DESCRIPTION}: {sol.COMPLEXITY}")
        benchmark(sol.number_substitution)
        print()