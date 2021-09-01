import React from 'react'
import {Link, useParams} from 'react-router-dom' 
import {PokemonDetailWrap} from './PokemonDetailStyles'
import pikachu from '../../assets/pikachu.png'
import PokemonCard from '../pokemons/PokemonCardComponent'
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
  } from "@apollo/client";

function PokemonDetail(props){
    let {name} = useParams();
    const POKEMON_DETAIL = gql`
        query pokemon($namePoke: String!) {
            pokemon(name: $namePoke) {
            id
            name
            abilities {
                ability {
                name
                }
            }
            moves {
                move {
                name
                }
            }
            types {
                type {
                name
                }
            }
            message
            status
            }
        }
    `;
    console.log(props.location.pokeProps.image)
    const { loading, error, data } = useQuery(POKEMON_DETAIL,{
        variables: {
            namePoke: name
          }
    });
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return(
        <PokemonDetailWrap>
            <section className="detail-header">
            <div className="pagination">
                <p className="previous">
                <div className="pagination-wrapper">
                    <span className="arrow"></span>
                    <span className="pokemon-number"> #{data.pokemon.id}</span>
                    <span className="pokemon-name"> {data.pokemon.name}</span>
                    <span className="arrow"></span>
                </div>
                </p>
            </div>
            </section>
            <section className="page-container">
                <PokemonCard owned="-" image={props.location.pokeProps.image} total={props.location.pokeProps.total} id={data.pokemon.id}/>
                <div className="description">
                    <div className="types">
                        Electric
                    </div>
                    <div className="moves">
                        <h2>Moves:</h2>
                        <div className="move-section">
                            <div className="move-list">
                                <h4>Attack A</h4>
                                <h4>Attack B</h4>
                                <h4>Attack C</h4>
                                <h4>Attack D</h4>
                                <h4>Attack E</h4>
                                <h4>Attack A</h4>
                                <h4>Attack B</h4>
                                <h4>Attack C</h4>
                                <h4>Attack D</h4>
                                <h4>Attack E</h4>
                            </div>
                        </div>
                    </div>
                    <div className="catch">
                        <button className="catch-btn">CATCH!!</button>
                    </div>
                    <div className="catch">
                        <button className="explore-btn">Explore More</button>
                    </div>
                </div>
            </section>
        </PokemonDetailWrap>
    )
    
}

export default PokemonDetail;