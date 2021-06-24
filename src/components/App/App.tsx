import React from 'react';
import { pokemonData } from '../../data/pokedata';
import { PokemonSchema, PokemonSpritesSchema, UnpatchedPokemonSchema } from '../types/PokemonSchema';
import Pokedex from './../Pokedex/Pokedex'
import './App.css';

interface AppState {
  searchField: string;
  allPokemons: PokemonSchema[];
  searchedPokemons: PokemonSchema[];
  selectedPokemon:  PokemonSchema | undefined;
}

class App extends React.Component <any, AppState> {
  state = {
    searchField: "",
    allPokemons: [],
    searchedPokemons: [],
    selectedPokemon: undefined
  };

  patchPokemonData = (pokemons: UnpatchedPokemonSchema[]) => {
    const patchedPokemons = pokemons.map((pokemon) => {
      let parsedSprites: PokemonSpritesSchema = {
        normal: undefined,
        animated: undefined,
      };

      try {
        parsedSprites = pokemon.sprites && JSON.parse(pokemon.sprites);
      } catch (e) {
        console.log("Error", e);
      }

      const patchedPokemon: PokemonSchema = {
        ...pokemon,
        sprites: parsedSprites,
      };

      return patchedPokemon;
    });

    return patchedPokemons;
  };

  handleInputChange = (inputVal: string)  => {
    
    const { allPokemons } = this.state;

    const searchedPokemons = allPokemons.filter(
      (pokemon: PokemonSchema) => {
        return (
          pokemon.name && pokemon.name.toLowerCase().includes(inputVal.toLowerCase())
        );
      }
    )

    this.setState({
      searchField: inputVal,
      searchedPokemons,
    });
  }

  handleClick = (pokemonName: string) => {
    const { allPokemons } = this.state;

    const selectedPokemon = allPokemons.find((pokemon: PokemonSchema) => pokemon.name === pokemonName);

    this.setState({selectedPokemon});
  }

  componentDidMount () {
    const patchedPokemons = this.patchPokemonData(pokemonData);

    this.setState({
      allPokemons: patchedPokemons,
      searchedPokemons: patchedPokemons,
    });
  }

  render() {
    return (
    <div className="App">
      <h1>Pokedex</h1>
      <Pokedex handleInputChange={this.handleInputChange} selectedPokemon={this.state.selectedPokemon} handleClick={this.handleClick} searchedPokemons={this.state.searchedPokemons} />
    </div>)};
}

export default App;
