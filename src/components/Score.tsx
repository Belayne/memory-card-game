import "./score.css"

interface ScoreProps {
    currentScore: number,
    maxScore: number
}

export default function Score({currentScore, maxScore}: ScoreProps) {
    return (
        <div className="score">
            <p>{currentScore} / {maxScore}</p>
        </div>
    )
}