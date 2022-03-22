// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require("./exercicio-04.js");

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    const expectError = new Error('Não temos esse pokémon para você :(');
    getPokemonDetails('pikachu', (error, message) => {
      try {
        expect(error).toEqual(expectError);
        done()
      }
      catch (error){
        done(error)
      }
    })
  })

  it("retorna um pokemon que existe no banco de dados", (done) => {
    const expectPokemon = `Olá, seu pokémon é o Bulbasaur, o tipo dele é Grass e a habilidade principal dele é Razor Leaf`;
    getPokemonDetails('Bulbasaur', (error, message) => {
      try {
        expect(message).toBe(expectPokemon);
        done()  
      }
      catch (error) {
        done(error);
      }
    });
  })
})