import math
from abc import ABC, abstractmethod


class FiguraGeometrica(ABC):
    @abstractmethod
    def area(self):
        ...

    @abstractmethod
    def perimetro(self):
        ...


class Quadrado(FiguraGeometrica):
    def __init__(self, lado):
        self.lado = lado

    def area(self):
        return self.lado * self.lado

    def perimetro(self):
        return self.lado * 4


class Retangulo(FiguraGeometrica):
    def __init__(self, base, altura):
        self.base = base
        self.altura = altura

    def area(self):
        return self.base * self.altura

    def perimetro(self):
        return (self.base + self.altura) * 2


class Circulo(FiguraGeometrica):
    def __init__(self, raio):
        self.raio = raio

    def area(self):
        return math.pi * self.raio * self.raio

    def perimetro(self):
        return math.pi * self.raio * 2
