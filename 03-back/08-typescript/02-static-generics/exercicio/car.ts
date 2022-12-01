enum Color {
  BLACK = 'Preto',
  WHITE = 'Branca',
  RED = 'Vermelha',
  SILVER = 'Prata',
}

enum Door {
  ONE = 1,
  TWO = 2,
  TREE = 3,
  FOUR = 4,
}

enum Direction {
  LEFT = 'Esquerda',
  RIGHT = 'Direita'
}

class Car {
  brand: string;
  color: Color;
  doors: number;

  constructor(brand: string, color: Color, doors: number) {
    this.brand = brand;
    this.color = color;
    this.doors = doors;
  }
  honk():void {
    console.log(`Biiiiiiiiii.`);
  }
  openTheDoor(door:Door):void{
    console.log(`Abriu a porta ${door}`);
  }
  closeTheDoor(door:Door):void{
    console.log(`Abriu a porta ${door}`);
  }
  turnOn():void {
    console.log(`Liga o carro.`);
  }
  turnOff():void {
    console.log(`Desliga o carro.`);
  }
  speedUp():void {
    console.log(`Acelera o carro.`);
  }
  speedDown():void {
    console.log(`Freia o carro.`);
  }
  stop():void {
    console.log(`Freia o carro.`);
  }
  turn(direction:Direction):void {
    console.log(`Vira para a ${direction}.`);
  }
}

const driveOne = new Car('volks', Color.RED, 3)

driveOne.honk()
driveOne.turn(Direction.LEFT)