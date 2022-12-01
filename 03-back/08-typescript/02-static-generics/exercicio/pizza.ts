interface Pizza {
  flavor: string;
  slices: 4 | 6 | 8;
}

const calabresa: Pizza = { flavor: 'Calabresa', slices: 8 };
const marguerita: Pizza = { flavor: 'Marguerita', slices: 6 };
const nutela: Pizza = { flavor: 'Nutela', slices: 4 };

interface RegularPizza extends Pizza {
  flavor: 'Calabresa' | 'Frango' | 'Pepperoni';
}

interface VeggiePizza extends Pizza {
  flavor: 'Marguerita' | 'Palmito' | 'Cogumelo';
}

interface DesertPizza extends Pizza {
  flavor: 'Nutela' | 'Goiabada com Queijo' | 'Marshmallow';
  slices: 4;
}

const frango: RegularPizza = { flavor: 'Frango', slices: 8 };
const palmito: VeggiePizza = { flavor: 'Palmito', slices: 6 };
const marshmallow: DesertPizza = { flavor: 'Marshmallow', slices: 4 };

