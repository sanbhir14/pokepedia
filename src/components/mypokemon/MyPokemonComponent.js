import React,{useEffect,useState} from 'react'
import { PokemonsWrap } from '../pokemons/PokemonsStyles';
import PokemonCard from '../pokemons/PokemonCardComponent';

function MyPokemon(){
    const [pokeList, setPokeList] = useState(JSON.parse(localStorage.getItem('my_pokemon')))
    const getLocal = () => {
        if(localStorage.getItem('my_pokemon') === null){
            localStorage.setItem('my_pokemon', JSON.stringify([]))
        }
        JSON.parse(localStorage.getItem('my_pokemon'))
        setPokeList(JSON.parse(localStorage.getItem('my_pokemon')))
    }
    useEffect(() => {
        getLocal()
    }, [])
    
    return(
        <PokemonsWrap>
        <h1>My Pokemon List</h1>
        <div className="page-container">
                <div className="card-container">        
                        {pokeList.map((pokemon,index)=>  (
                            <React.Fragment key={index}>
                            <PokemonCard name={pokemon.poke_name} image={pokemon.image} id={pokemon.id} nickname={pokemon.nickname} myPokemon="myPokemon" setPokeList={setPokeList}/>
                            
                            {/* {data.pokemons.next !== null && index == data.pokemons.results.length && (
                            
                            )} */}
                            </React.Fragment>
                        ))}
                </div> 
        </div>
        </PokemonsWrap>
    )
    
}

export default MyPokemon;