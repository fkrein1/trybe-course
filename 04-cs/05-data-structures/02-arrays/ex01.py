# 1 - OK
# 0 - Instabilidades

valores_coletados1 = [0, 1, 1, 1, 0, 0, 1, 1]

valores_coletados2 = [1, 1, 1, 1, 0, 0, 1, 1]

def max_stable(list: list[int]) -> int:
    max_time = 0
    counter = 0
    for time in list:
        if time == 0:
          max_time = max(max_time, counter)
          counter = 0
        else:
            counter += 1
    print(max_time)

max_stable(valores_coletados1)
max_stable(valores_coletados2)