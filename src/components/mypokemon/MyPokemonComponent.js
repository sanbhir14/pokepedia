import React,{useEffect,useState} from 'react'
import { PokemonsWrap } from '../pokemons/PokemonsStyles';
import PokemonCard from '../pokemons/PokemonCardComponent';

function MyPokemon(){
    let myPokeList = JSON.parse(localStorage.getItem('my_pokemon'))
    const [list, setList] = useState([])
    const handleDelete = (id) => {
        const newPokeList = list.filter((item) => item.id !== id);
        setList(newPokeList);
        localStorage.setItem('my_pokemon', JSON.stringify(newPokeList))
    }
    const getLocal = () => {
        if(localStorage.getItem('my_pokemon') === null){
            localStorage.setItem('my_pokemon', JSON.stringify([]))
        }
        let pokeLocal = JSON.parse(localStorage.getItem('my_pokemon'))
        setList(pokeLocal)
    }
    useEffect(() => {
        getLocal()
    }, [])
    console.log(list)
    return(
        <PokemonsWrap>
        <h1>Pokemon List</h1>
        <div className="page-container">
                <div className="card-container">        
                        {list.map((pokemon,index)=>  (
                            <React.Fragment key={index}>
                            <h6>{pokemon.nickname}</h6>
                            <PokemonCard name={pokemon.name} image={pokemon.image} owned="-" id={pokemon.id} total={pokemon.nickname}/>
                            
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