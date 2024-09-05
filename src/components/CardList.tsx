import { useState, useEffect } from "react";
import Card from "./Card";
import { getCharacters } from "rickmortyapi";
import "./cardList.css"

async function getCharacterData(name: string = "rick"):Promise<any> {
    try {
        const charData: any = await getCharacters({
            name: name,
            page: 2
        })
        console.log(charData)
        const characterData: string[] = charData.data.results.map((data: any) => ({imageUrl: data.image, name: data.name}))
        return characterData;
    } catch (error) {
        console.log(error);
    }
}

export default function CardList({listLength}) {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        getCharacterData("Rick").then(result => {
            const newCards = [];
            for(let i = 0; i < listLength; i++) {
                newCards.push({...result[i], clicked: false, id: i})
            }
            setCards(newCards)
        })
    }, [])

    function shuffle() {
        const shuffledCards: any[] = [...cards];
        for(let i = 0; i < shuffledCards.length; i++) {
            const swapIndex = Math.floor(Math.random() * 9);
            [shuffledCards[i], shuffledCards[swapIndex]] = [shuffledCards[swapIndex], shuffledCards[i]] 
        }
        setCards(shuffledCards);
    }

    return (
        <div className="cards">
            {cards.map(card => <Card key={card.id} imgSrc={card.imageUrl} name = {card.name} shuffle={shuffle}></Card>)}
        </div>
    )
}