import { MouseEventHandler } from "react"
import "./card.css"

interface cardProps {
    id: string,
    imgSrc: string,
    name: string,
    handleClick: MouseEventHandler
}

export default function Card({id, imgSrc, name, handleClick}: cardProps) {

    return (
        <div className="card">
            <img src={imgSrc} alt={name} id={id} className="cardImg" onClick={handleClick}/>
        </div>
    )
}