def max_number(list):
    if len(list) == 1:
        return list[0]
    else:
        if max_number(list[1:]) > list[0]:
            return max_number(list[1:])
        else:
            return list[0]
