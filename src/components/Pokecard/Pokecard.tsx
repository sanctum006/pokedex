import React from 'react';
import './Pokecard.css';

interface PokecardProps {
    name: string;
    imageURL?: string;
    handleClick: (pokemonName: string) => void;
}

const Pokecard = ({ name, imageURL, handleClick }: PokecardProps) => {
    return (<div className="pokecard" onClick={() => {handleClick(name)}}>
        <img src={imageURL} alt="pokecard-img" className="pokemon-sprite" />
        <p>{name}</p>
    </div>);
};

export default Pokecard;