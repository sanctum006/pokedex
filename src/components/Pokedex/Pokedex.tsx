import React from 'react';
import './Pokedex.css'
import PokeSearchResults from './../PokeSearchResults/PokeSearchResults'
import SearchBox from './../SearchBox/SearchBox';
import Pokelist from '../Pokelist/Pokelist';
import { PokemonSchema } from '../types/PokemonSchema';

interface PokedexProps {
    searchedPokemons: PokemonSchema[];
    selectedPokemon: PokemonSchema | undefined;
    handleInputChange: (inputVal: string) => void;
    handleClick: (pokemonName: string) => void
}

const Pokedex = ({ searchedPokemons, selectedPokemon , handleInputChange, handleClick }: PokedexProps) => {
    return <div className="pokedex-container">
        <div className="pokelist-container">
            <SearchBox handleInputChange={handleInputChange} />
            <Pokelist searchedPokemons={searchedPokemons} handleClick={handleClick} />
        </div>
        <div className="pokesearchresult-container">
            <PokeSearchResults selectedPokemon={selectedPokemon} />
        </div>
    </div>
}

export default Pokedex;