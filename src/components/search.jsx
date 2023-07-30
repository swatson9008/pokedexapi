import { useState } from "react";

export default function Search() {
  const [pokeSearch, setSearch] = useState('');
  const [pokeData, setPokeData] = useState([]);

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSearchClick = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokeSearch}`)
      .then((res) => res.json())
      .then((data) => {
        const searchedPokemon = {
          pokeName: data.name,
          capture: data.capture_rate,
        };
        setPokeData([searchedPokemon]);
      });
  };

  return (
    <div className="searchMain">
      <div className="searchContainer">
        <input
          type="text"
          id="searchInput"
          placeholder="Enter a Pokemon"
          value={pokeSearch}
          onChange={handleInputChange}
        />
        <button id="searchButton" onClick={handleSearchClick}>
          Search
        </button>
      </div>
      <div className="displayResult">
        {pokeData.map((pokemon) => (
          <div key={pokemon.pokeName}>
            <div className="pokeName">{pokemon.pokeName}</div>
            <div className="pokeDescrip">{pokemon.capture}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
