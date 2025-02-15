import { useEffect, useState } from "react";

function App() {
  const [pokemon, setPokemon] = useState({});
  const [pokemonName, setPokemonName] = useState('');
  const handleFormSubmission = (event) => {
    event.preventDefault();

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((body) => body.json())
      .then((json) => {
        setPokemon(json);
      });
  };

  return (
    <>
      <div>
        <form onSubmit={handleFormSubmission}>
          <input type="text" placeholder="Pokemon name..." onChange={(e) => setPokemonName(e.target.value)} value={pokemonName} />
          <button type="submit">Fetch Pokemon</button>
        </form>
      </div>
      <div>
        {pokemon?.species ? (
          <div>
            <h1>{pokemon.species.name}</h1>
            <img src={pokemon.sprites.front_default} alt={pokemon.species.name} />
          </div>
        ) : null}
      </div>
    </>
  );
}

export default App;
