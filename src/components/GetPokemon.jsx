import {useEffect, useState} from "react";
import Card from "./Card.jsx";
import "../style/Main.css"


export default function GetPokemon({increaseScore, reset}){

    const [pokemon, setPokemon] = useState([]);
    const [clickedPokemon, setClickedPokemon] = useState([]);
    const images = {
        blastoise: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
        bulbasaur: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        butterfree: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
        caterpie: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
        charizard: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
        charmander: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
        charmeleon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
        ivysaur: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
        metapod: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
        squirtle: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
        venusaur: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
        wartortle: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"
};

    function makePokemon (array){
        setPokemon(pokemon => [...array])
    }

    function addClickedPokemon(e){
        setClickedPokemon(clickedPokemon => [...clickedPokemon, e.target.outerText])
    }

    function resetGame(){
        setClickedPokemon(clickedPokemon => []);
        reset();
    }


    useEffect( () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=12&offset=0').then(response => response.json()).then(data => {
            makePokemon(data.results);
        })


    }, []);

    function CapitalizeFirstLetter(word){
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    function clickPokemon(pokemon){
        if(clickedPokemon.includes(pokemon.target.outerText)){
            resetGame();
        }
        addClickedPokemon(pokemon);
        shuffleArrayPokemon();
        increaseScore();
    }

    function shuffleArrayPokemon(){
        let shuffledArray = [];
        let usedIndexes = [];

        let i = 0;
        while(i < pokemon.length){
            let randomNumber = Math.floor(Math.random() * pokemon.length);
            if(!usedIndexes.includes(randomNumber)){
                shuffledArray.push(pokemon[randomNumber]);
                usedIndexes.push(randomNumber);
                i++;
            }
        }
        makePokemon(shuffledArray);
    }


    return(
    <>
        <div className="container">
        {pokemon.map((data) => {
            return(
                <Card img={images[data.name]} lowercase={data.name} click={clickPokemon} key={data.name} name={CapitalizeFirstLetter(data.name)}></Card>
            );
        })}
        </div>

    </>
    );
}