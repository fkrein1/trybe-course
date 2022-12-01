interface Instrument {
  name: string;
  play(): void;
}

class FluteNew implements Instrument {
  constructor(public name: string) { }

  public play(): void {
    console.log(`${this.name} está emitindo melodias`);
  }
}

class Drums implements Instrument {
  constructor(public name: string) { }

  public play(): void {
    console.log(`${this.name} está fazendo o ar vibrar bem forte`);
  }
}

class Guitar implements Instrument {
  constructor(public name: string) { }

  public play(): void {
    console.log(`${this.name} está vibrando suas cordas`);
  }
}

class MusicianNew {
  constructor(
    public name: string,
    public instrument: Instrument = new Flute('Minha flauta')
  ) { }

  play() {
    this.instrument.play();
    console.log(
      `"${this.name}" é quem está comandando a emissão dos sons`
    );
  }
}

const musician1 = new MusicianNew('Márcia');
const musician2 = new MusicianNew('Vicente', new Drums('Minha bateria'));
const musician3 = new MusicianNew('Natan', new Guitar('Meu violão'));

musician1.play();
musician2.play();
musician3.play();