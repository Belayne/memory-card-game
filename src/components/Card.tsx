import { MouseEventHandler } from "react"
import "./card.css"

type cardProps = {
    imgSrc: string,
    name: string,
    shuffle: MouseEventHandler
}

export default function Card({imgSrc, name, shuffle}: cardProps) {

    return (
        <div className="card">
            <img src={imgSrc} alt={name} className="cardImg" onClick={shuffle}/>
        </div>
    )
}