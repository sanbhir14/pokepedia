import React from 'react'
import Header from './header/HeaderComponent';
import Footer from './footer/FooterComponent';
import {MainWrap} from './MainStyles';

import Pokemons from './pokemons/PokemonsComponent';
import PokemonDetail from './detail/PokemonDetailComponent';
import MyPokemon from './mypokemon/MyPokemonComponent';

import {Switch, Route, Redirect, withRouter} from 'react-router-dom'

function Main(){
    return(
        <React.Fragment>
        
        <Header/>
        <Switch>
        <Route path='/pokemons' component={Pokemons}/>
        <Route path='/detail/:name' component={PokemonDetail}/>
        <Route path='/mypokemon' component={MyPokemon}/>
        <Redirect to='/pokemons'/>
        </Switch>

        
        </React.Fragment> 
    )
}

export default withRouter(Main);