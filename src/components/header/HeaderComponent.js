import React from 'react';
import {HeaderWrap} from './HeaderStyles';
import {Link} from 'react-router-dom';
import { faAddressCard} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header(){
    return(
        <HeaderWrap>
            <header>
            <div className="content">
                <Link className="logo" to='/pokemons'>Pokepedia</Link>
                <div className="toggler">
                    <Link to='/mypokemon' className="tog">
                        <FontAwesomeIcon icon={faAddressCard} />
                    </Link>
                </div>
                <nav>
                    <ul>
                        <li><Link to='/pokemons' className="active">Home</Link></li>
                        <li><Link to='/mypokemon' >My Pokemons</Link></li>
			        </ul>
	            </nav>
            </div>
            </header> 
        </HeaderWrap>
    )
    
}



export default Header;