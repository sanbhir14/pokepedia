import React from 'react'
import {Link} from 'react-router-dom' 

function PokemonDetail(){
    return(
        <React.Fragment>
        <div>Pokemon Detail Page</div>
        <Link to='/pokemons'>Go Back</Link>
        </React.Fragment>
    )
    
}

export default PokemonDetail;