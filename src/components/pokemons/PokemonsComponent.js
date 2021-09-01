import React from 'react'
import {Link} from 'react-router-dom';
import {PokemonsWrap} from './PokemonsStyles';
import Header from '../header/HeaderComponent';
import PokemonCard from './PokemonCardComponent';

function Pokemons(){
    return(
        <PokemonsWrap>
        <h1>Pokemon List</h1>
        <div className="page-container">
                <div className="card-container">        
                        <PokemonCard/>
                        <PokemonCard/>
                        <PokemonCard/>
                        <PokemonCard/>
                        <PokemonCard/>
                        <PokemonCard/>
                        <PokemonCard/>
                        <PokemonCard/>
                        <PokemonCard/>
                        <PokemonCard/>
                        <PokemonCard/>
                        <PokemonCard/> 
                </div> 
        </div>
        </PokemonsWrap>
    )
    
}

export default Pokemons;