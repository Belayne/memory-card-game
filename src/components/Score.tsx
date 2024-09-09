
interface ScoreProps {
    currentScore: number,
    maxScore: number
}

export default function Score({currentScore, maxScore}: ScoreProps) {
    return (
        <div>
            <p>{currentScore} / {maxScore}</p>
        </div>
    )
}