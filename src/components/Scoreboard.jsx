
export default function Scoreboard({score, highScore}) {

    return (
        <>
            <div className="scoreboard">
                <p><span>Score: </span>{score}</p>
                <p><span>Best Score:</span> {highScore}</p>
            </div>
        </>
    )
}