import React,{useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom' 
import {PokemonDetailWrap} from './PokemonDetailStyles'
import pikachu from '../../assets/pikachu.png'
import PokemonCard from '../pokemons/PokemonCardComponent'
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
  } from "@apollo/client";
import { Modal,Button, InputGroup, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function PokemonDetail(props){
    let {name} = useParams();
    const [catchPoke, setCatchPoke] = useState(null)
    const [loadingPage, setLoadingPage] = useState(false)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [value, setValue] = useState({
        id: '',
        nickname: '',
        poke_name: '',

    })
    const randomizerProb = () => { 
        var min = 0;
        var max = 1;
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    const handleChange = (e) => {
        setValue({
            nickname: e.target.value
        })
    }
    const [list, setList] = useState([])
    const handleCatch = async() => {
        const random = randomizerProb()
        if(random == 1){
            setLoadingPage(true)
            setTimeout(function() {
                setLoadingPage(false)
                setCatchPoke(true)

            }, 2000);
        }
        else{
            setLoadingPage(true)
            setTimeout(function() {
                setLoadingPage(false)
                setCatchPoke(false)
            }, 2000);
        }
        setShow(true)
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
    const handleSubmit = () => {
        var arr = JSON.parse(localStorage.getItem('my_pokemon'))
        const checkNick = list.filter((item) => item.nickname !== value.nickname)
        if(value.nickname === ''){
            alert('Please insert your pokemon nickname!')
            
        }
        if(checkNick !== []){
            alert('nickname already in use')
        }
        else{
            list.push({
                id: data.pokemon.id,
                nickname: value.nickname,
                poke_name: name,
                image: props.location.pokeProps.image,
                total: props.location.pokeProps.total,
            })
            
            setValue({
                nickname: ''
            })
            localStorage.setItem('my_pokemon', JSON.stringify(list))
            setShow(false)
        }
        
    }
    

    const POKEMON_DETAIL = gql`
        query pokemon($namePoke: String!) {
            pokemon(name: $namePoke) {
            id
            name
            abilities {
                ability {
                name
                }
            }
            moves {
                move {
                name
                }
            }
            types {
                type {
                name
                }
            }
            message
            status
            }
        }
    `;
    const { loading, error, data } = useQuery(POKEMON_DETAIL,{
        variables: {
            namePoke: name
          }
    });
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return(
        <PokemonDetailWrap>
            <section className="detail-header">
            <div className="pagination">
                <p className="previous">
                <div className="pagination-wrapper">
                    <span className="arrow"></span>
                    <span className="pokemon-number"> #{data.pokemon.id}</span>
                    <span className="pokemon-name"> {data.pokemon.name}</span>
                    <span className="arrow"></span>
                </div>
                </p>
            </div>
            </section>
            <section className="page-container">
                <PokemonCard owned="-" image={props.location.pokeProps.image} total={props.location.pokeProps.total} id={data.pokemon.id}/>
                <div className="description">
                        {data.pokemon.types.map((el,index)=> (
                            <div className="types">
                                {el.type.name}
                            </div>
                        ))}
                    <div className="moves">
                        <h2>Moves:</h2>
                        <div className="move-section">
                            <div className="move-list">
                                {data.pokemon.moves.slice(0, 20).map((el,index)=>(
                                    <h4>{el.move.name}</h4>
                                ))}
                                
                            </div>
                        </div>
                    </div>
                    <div className="catch">
                        <button className="catch-btn" onClick={handleCatch}>CATCH!!</button>
                    </div>
                    <div className="catch">
                        <button className="explore-btn">Explore More</button>
                    </div>
                </div>
            </section>
            {
                catchPoke === true ?
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Gotcha {data.pokemon.name} was caught, give the nickname below</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                            <FormControl
                            placeholder="nickname"
                            value={value.name}
                            onChange={handleChange}
                            aria-label="nickname"
                            aria-describedby="basic-addon1"
                            />
                    </InputGroup>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleSubmit}>
                            Submit
                        </Button>
                        
                    </Modal.Footer>
                </Modal>
                :
                catchPoke === false?
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Oh no, It Get Away!!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        don't think about it, try again
                    </Modal.Body>
                    <Modal.Footer> 
                    </Modal.Footer>
                </Modal>
                :
                null
            }
        </PokemonDetailWrap>
    )
    
}

export default PokemonDetail;