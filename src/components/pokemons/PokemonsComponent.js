import React, {useState}from 'react'
import {PokemonsWrap} from './PokemonsStyles';
import PokemonCard from './PokemonCardComponent';
import {
    useQuery,
    gql,
    useLazyQuery
  } from "@apollo/client";
  import { Waypoint } from "react-waypoint";
import { Spinner} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Pokemons(){
    const POKEMON_LIST = gql`
        query pokemons($limit: Int, $offset: Int) {
            pokemons(limit: $limit, offset: $offset) {
            count
            next
            previous
            status
            message
            results {
                url
                name
                image
              }
            }
        }
    `;

    const { loading, error, data, fetchMore } = useQuery(POKEMON_LIST,{
        variables: {
            limit: 2000,
            offset:0,
          },
    });

    if (loading) return (
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    );
    if (error) return <p>Error :(</p>;
    console.log(data.pokemons.results)
    return(
        <PokemonsWrap>
        <h1 className="title">Pokemon List</h1>
        <div className="page-container">
                <div className="card-container">        
                        {loading?
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        :
                        error?
                        <p>Error :(</p> 
                        : 
                        data.pokemons.results.map((pokemon,index)=>  (
                            <React.Fragment key={index}>
                            <PokemonCard name={pokemon.name} image={pokemon.image} id={index+1} total={data.pokemons.count} myPokemon="pokemons"/>
                            </React.Fragment>
                        ))}
                </div> 
        </div>
        </PokemonsWrap>
        
    )
    
}

export default Pokemons;