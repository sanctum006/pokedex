import React from 'react';
import './Pokelist.css';
import Pokecard from '../Pokecard/Pokecard';
import { PokemonSchema } from '../types/PokemonSchema';

interface PokelistProps {
    searchedPokemons: PokemonSchema[];
    handleClick: (pokemonName: string) => void
}

const Pokelist = ({ searchedPokemons, handleClick }: PokelistProps) => {
    return (<div className="pokelist">
        {
            searchedPokemons.map((pokemon) => {
                return (
                    pokemon.name && (<Pokecard key={pokemon.id} name={pokemon.name} imageURL={pokemon.sprites?.normal} handleClick={handleClick} />)
                );
            })
        }
    </div>);
}

export default Pokelist;