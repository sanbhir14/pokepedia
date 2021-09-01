import React from 'react'
import {Link} from 'react-router-dom' 
import {PokemonDetailWrap} from './PokemonDetailStyles'
import pikachu from '../../assets/pikachu.png'
import PokemonCard from '../pokemons/PokemonCardComponent'

function PokemonDetail(){
    return(
        <PokemonDetailWrap>
            <section className="detail-header">
            <div className="pagination">
                <p className="previous">
                <div className="pagination-wrapper">
                    <span className="arrow"></span>
                    <span className="pokemon-number"> #001</span>
                    <span className="pokemon-name"> Pikachu</span>
                    <span className="arrow"></span>
                </div>
                </p>
            </div>
            </section>
            <section className="page-container">
                <PokemonCard/>
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