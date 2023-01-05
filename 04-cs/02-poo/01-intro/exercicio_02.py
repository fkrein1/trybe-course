import statistics


class Estatistica:
    @classmethod
    def average(cls, list):
        return sum(list) / len(list)

    @classmethod
    def median(cls, list):
        return statistics.median(list)

    @classmethod
    def mode(cls, list):
        return statistics.mode(list)


print(Estatistica.average([2, 3, 1, 2, 3, 3, 423, 11]))
print(Estatistica.median([2, 3, 1, 2, 3, 3, 4, 6, 7, 9, 233, 11]))
print(Estatistica.mode([2, 3, 1, 2, 3, 3, 9999, 11]))
