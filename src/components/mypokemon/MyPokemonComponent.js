import React,{useEffect,useState} from 'react'
import { PokemonsWrap } from '../pokemons/PokemonsStyles';
import PokemonCard from '../pokemons/PokemonCardComponent';
import {Button, Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory} from 'react-router-dom';

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
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const history = useHistory()
    const handleFind = () =>{
		history.push({
			pathname: "/"
		  });
	}
    return(
        <PokemonsWrap>
        {
            pokeList.length === 0?
                <div className="no-poke-alert">
                    <Modal show={handleShow} onHide={handleClose}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered>
                        <Modal.Header >
                            <Modal.Title>You didnt have any pokemon</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Button variant="outline-danger" onClick={handleFind}>Find Pokemons</Button>
                        </Modal.Body>
                    </Modal>
                </div>
            :
            <React.Fragment>
            <h1 className="title">My Pokemon List</h1>
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
            </React.Fragment>
        }
        
        </PokemonsWrap>
    )
    
}

export default MyPokemon;