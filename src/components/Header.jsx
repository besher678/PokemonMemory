import Scoreboard from "./Scoreboard.jsx";
import "../style/Header.css"

export default function Header({score, highScore, click}) {

    return (
        <>
            <div className="header">
                <div className="left-section">
                    <h1>Memory Game</h1>
                </div>
                <Scoreboard score={score} highScore={highScore}/>
            </div>
        </>
    )
}