from abc import ABC, abstractmethod


class Imposto(ABC):
    @classmethod
    @abstractmethod
    def calcular():
        raise NotImplementedError


class ICMS(Imposto):
    @classmethod
    def calcular(cls, value):
        return value * 0.06


class ISS(Imposto):
    @classmethod
    def calcular(cls, value):
        return value * 0.1


class PIS(Imposto):
    @classmethod
    def calcular(cls, value):
        return value * 0.0065


class COFINS(Imposto):
    @classmethod
    def calcular(cls, value):
        return value * 0.03


class Orcamento:
    def __init__(self, valor):
        self.valor = valor

    def calcular_imposto(self, imposto: Imposto):
        return imposto.calcular(self.valor)


orcamento = Orcamento(100)
print(f"ICMS: {orcamento.calcular_imposto(ICMS)}")
print(f"ISS: {orcamento.calcular_imposto(ISS)}")
print(f"PIS: {orcamento.calcular_imposto(PIS)}")
print(f"COFINS: {orcamento.calcular_imposto(COFINS)}")
