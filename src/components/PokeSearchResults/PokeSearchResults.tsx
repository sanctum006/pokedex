import React from 'react';
import { PokemonSchema } from '../types/PokemonSchema';
import './PokeSearchResults.css';

interface PokeSearchResultsProps {
    selectedPokemon: PokemonSchema | undefined;
}

const PokeSearchResults = ({ selectedPokemon }: PokeSearchResultsProps) => {

    const {name, id, height, weight, base_experience, sprites } = selectedPokemon || {};

    return (
        <div className="poke-result-card">
            {selectedPokemon ? (
                <div>
                    <img className="pokemon-animated-sprite" src={sprites?.animated || sprites?.normal} alt="pokemone-animated-img" />
                    <p>Name: {name}</p>
                    <p>Id: {id}</p>
                    <p>Height: {height}</p>
                    <p>Weight: {weight}</p>
                    <p>Base Exp: {base_experience}</p>
                </div>
            ) : (
                <h2> Welcome to the pokedex</h2>
            )}
        </div>
    );
}

export default PokeSearchResults;