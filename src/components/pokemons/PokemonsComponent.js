import React from 'react'
import {Link} from 'react-router-dom';
import {PokemonsWrap} from './PokemonsStyles';
import Header from '../header/HeaderComponent';
import PokemonCard from './PokemonCardComponent';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
  } from "@apollo/client";


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

    const { loading, error, data } = useQuery(POKEMON_LIST,{
        variables: {
            limit: 20,
            offset:0,
          }
    });
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return(
        <PokemonsWrap>
        <h1>Pokemon List</h1>
        <div className="page-container">
                <div className="card-container">        
                        {data.pokemons.results.map((pokemon,index)=> (
                            <PokemonCard name={pokemon.name} image={pokemon.image} owned="-" id={index+1} total={data.pokemons.count}/>
                        ))}
                </div> 
        </div>
        </PokemonsWrap>
        
    )
    
}

export default Pokemons;