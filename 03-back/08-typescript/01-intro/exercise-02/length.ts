const conversion = {
  km: 1000,
  hm: 100,
  dam: 10,
  m: 1,
  dm: 0.1,
  cm: 0.01,
  mm: 0.001,
};

type Keys = keyof typeof conversion;

function convert(value: number, from: Keys, to: Keys): void {
  console.log((value * conversion[from]) / conversion[to]);
}

convert(100000, 'mm', 'km');
