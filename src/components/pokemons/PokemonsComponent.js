import React, {useState}from 'react'
import {Link} from 'react-router-dom';
import {PokemonsWrap} from './PokemonsStyles';
import Header from '../header/HeaderComponent';
import PokemonCard from './PokemonCardComponent';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql,
    useLazyQuery
  } from "@apollo/client";
  import { Waypoint } from "react-waypoint";


function Pokemons(){
    let poke = []
    const [opset,setOpset] = useState(50)
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
    const [getPoke, { loading_2, error_2, data_2 }] = useLazyQuery(POKEMON_LIST);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    console.log(data.pokemons.results)
    return(
        <PokemonsWrap>
        <h1>Pokemon List</h1>
        <div className="page-container">
                <Waypoint
                    onEnter={() =>
                        getPoke({variables: {
                            limit: 10,
                            offset: 90,
                          }})
                    }
                />
                <div className="card-container">        
                        {data.pokemons.results.map((pokemon,index)=>  (
                            <React.Fragment key={index}>
                            <PokemonCard name={pokemon.name} image={pokemon.image} id={index+1} total={data.pokemons.count} myPokemon="pokemons"/>
                            
                            {/* {data.pokemons.next !== null && index == data.pokemons.results.length && (
                            
                            )} */}
                            </React.Fragment>
                        ))}
                </div> 
        </div>
        </PokemonsWrap>
        
    )
    
}

export default Pokemons;