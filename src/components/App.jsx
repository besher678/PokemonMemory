import React, {useState} from "react";
import Header from "./Header.jsx";
import GetPokemon from "./GetPokemon.jsx";


export default function App() {

    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);

    function increaseScore(){
        setScore(score => score +1);
    }


    function newHighScore(newScore){
        if(highScore > newScore){

        } else{
            setHighScore(highScore => newScore);
        }
    }

    function restartGame(){
        newHighScore(score);
        setScore(score => 0);
    }

    return (
        <>
            <Header score={score} highScore={highScore} click={increaseScore}/>
            <GetPokemon increaseScore={increaseScore} reset={restartGame}/>
        </>
    )
}