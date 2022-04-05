import React from "react";
import Pokemon from './Pokemon'
import pokemons from './data'

class Pokedex extends React.Component {
  render() {
    return (
      <>
        <h1>Pokedex</h1>
        <div className='pokemons-container'>
      { pokemons.map(pokemon => <Pokemon pokemon={pokemon} key={pokemon.id} />) }
        </div>
      </>
      )
  } 
}
  
export default Pokedex