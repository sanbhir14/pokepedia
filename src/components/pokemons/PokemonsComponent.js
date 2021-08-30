import React from 'react'
import {Link} from 'react-router-dom' 

function Pokemons(){
    return(
        <React.Fragment>
        <div>Pokemon List Page</div>
        <Link to='/detail'>Go to detail</Link>
        </React.Fragment>
    )
    
}

export default Pokemons;