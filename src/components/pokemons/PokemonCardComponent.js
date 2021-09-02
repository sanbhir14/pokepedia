import React, {useEffect, useState} from 'react';
import {PokemonCardWrap} from './PokemonCardStyles';
import {Link, useHistory} from 'react-router-dom';
import { Modal,Button, InputGroup, FormControl } from 'react-bootstrap';


function PokemonCard(props){
    const setPokeList = props.setPokeList;
	var url = "/detail/" + props.name;
    var image = props.image
    var total = props.total
	const history = useHistory()
	const [show, setShow] = useState(false);
	const [list, setList] = useState([])
	const [totalOwn, setTotalOwn] = useState()
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
	const handleClick=()=>{
		history.push({
			pathname: url,
			pokeProps: {
				image:image,
				total:total
			},
		  });
	}
	const handleColor = (type) => {
        if(type === "normal"){
            return "#e57373"
        }
        if(type === "grass"){
            return "#009688";
        }
        if(type === "fire"){
            return "#ef5350";
        }
        if(type === "water"){
            return "#3f51b5"
        }
        if(type === "electric"){
            return "#ffeb3b"
        }
        if(type === "ice"){
            return "#42a5f5"
        }
        if(type === "fighting"){
            return "#795548"
        }
        if(type === "poison"){
            return "#7e57c2"
        }
        if(type === "ground"){
            return "#fbc02d"
        }
        if(type === "flying"){
            return "#7e57c2"
        }
        if(type === "psychic"){
            return "#ec407a"
        }
        if(type === "bug"){
            return "#26a69a"
        }
		else{
			return "#E54545"
		}
    }
	const handleRemove=()=>{
		const newPokeList = list.filter((item) => item.nickname.toLowerCase() !== props.nickname.toLowerCase());
		setList(newPokeList);
        localStorage.setItem('my_pokemon', JSON.stringify(newPokeList))
		setShow(false);
		setPokeList(newPokeList)
	}
	const getLocal = () => {
        if(localStorage.getItem('my_pokemon') === null){
            localStorage.setItem('my_pokemon', JSON.stringify([]))
        }
        let pokeLocal = JSON.parse(localStorage.getItem('my_pokemon'))
        setList(pokeLocal)
		let owning = pokeLocal.filter((item) => item.id === props.id)
		setTotalOwn(owning.length)
    }
	

    useEffect(() => {
        getLocal()
    }, [])
	
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
					{totalOwn} Owned
				</div>
				<div className="about">
					{
						props.myPokemon === "pokemons"?
						<div className="id">
							<h3>{props.id}/{props.total}</h3>
						</div>
						:
						props.myPokemon === "myPokemon"?
						<div className="id">
							<h3>{props.nickname}</h3>
						</div>
						:
						props.myPokemon === "detail"?
						<div className="id" style={{
							display: "flex",
							flexDirection: "column"
						  }}>
							{props.types.map((el,index) => (
								<div className="types" style={{backgroundColor: handleColor(el.type.name)}}>
                                	{el.type.name}
                            	</div>
							))}
						</div>
						:
						null
					}
					
					{
						props.myPokemon === "pokemons"?
							<div className="abilities">
                        		<button className="detail-btn" onClick={handleClick}>Detail</button>
							</div>
						:
						props.myPokemon === "myPokemon"?
							<div className="abilities">
								<button className="detail-btn" onClick={handleShow}>Abandon</button>
								<Modal show={show} onHide={handleClose}>
									<Modal.Header closeButton>
										<Modal.Title>Are you sure wanna abandon your pokemon??</Modal.Title>
									</Modal.Header>
									<Modal.Body>
										<button className="detail-btn" onClick={handleRemove}>Yes :(</button>
										<button className="detail-btn" onClick={handleClose}>Definitely No!!</button>
									</Modal.Body>
								</Modal>
							</div>
							
						:
						null
					}
				</div>
			</div>
        </PokemonCardWrap>
    )
}

export default PokemonCard;