import React from 'react';
import {PokemonCardWrap} from './PokemonCardStyles';
import pikachu from '../../assets/pikachu.png'

function PokemonCard(){
    return(
        <PokemonCardWrap>
            <div className="card">
				<div className="name">
					<h2>PIKACHU</h2>
				</div>
				<div className="image">
					<img src={pikachu} />
				</div>
				<div className="stats">
					5 Owned
				</div>
				<div className="about">
					<div className="id">
						<h3>1/153</h3>
					</div>
					<div className="abilities">
						<p>Detail</p>
					</div>
				</div>
			</div>
        </PokemonCardWrap>
    )
}

export default PokemonCard;