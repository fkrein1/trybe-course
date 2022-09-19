abstract class AbstractAnimal {
  constructor(public name: string) { }
  abstract move(): void
}
class AbstractBird extends AbstractAnimal {
  move() { console.log(`${this.name} está voando.`); }
}
class AbstractMammal extends AbstractAnimal {
  move() { console.log(`${this.name} está andando.`); }
}
class AbstractFish extends AbstractAnimal {
  move() { console.log(`${this.name} está nadando.`); }
}
const x = new AbstractFish('Tubarão');
const y = new AbstractBird('Papagaio');
const z = new AbstractMammal('Tatu');

x.move();
y.move();
z.move();