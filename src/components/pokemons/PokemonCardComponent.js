import React from 'react';
import {PokemonCardWrap} from './PokemonCardStyles';
import {Link} from 'react-router-dom';


function PokemonCard(props){
    var url = "/detail/" + props.name;
    var image = props.image
    var total = props.total
    return(
        <PokemonCardWrap>
            <div className="card">
				<div className="name">
					<h2>{props.name}</h2>
				</div>
				<div className="image">
					<img src={props.image} />
				</div>
				<div className="stats">
					{props.owned} Owned
				</div>
				<div className="about">
					<div className="id">
						<h3>{props.id}/{props.total}</h3>
					</div>
					<div className="abilities">
                        <Link to={{pathname:url, pokeProps:{
                            image:image,
                            total:total
                        }}}>Detail</Link>
					</div>
				</div>
			</div>
        </PokemonCardWrap>
    )
}

export default PokemonCard;