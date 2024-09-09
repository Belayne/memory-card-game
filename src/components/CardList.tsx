import { useState, useEffect} from "react";
import Card from "./Card";
import { getCharacters } from "rickmortyapi";
import "./cardList.css"

interface CharacterData {
    imageUrl: string,
    name: string
}

interface CardListProps {
    listLength: number,
    resetScore: Function,
    increaseScore: Function
}

interface CardState extends CharacterData{
    id: string,
    clicked: boolean
}

async function getCharacterData(name: string = "rick"):Promise<any> {
    try {
        const charData: any = await getCharacters({
            name: name,
            page: 1
        })
        const characterData: CharacterData[] = charData.data.results.map((data: any) => ({imageUrl: data.image, name: data.name}))
        return characterData;
    } catch (error) {
        console.error(`Failed to fetch images: ${error}`);
    }
}

export default function CardList({listLength, resetScore, increaseScore}: CardListProps) {
    const [cards, setCards] = useState<CardState[]>([]);

    useEffect(() => {
        getCharacterData("Rick").then(result => {
            const newCards: CardState[] = [];
            for(let i = 0; i < listLength; i++) {
                newCards.push({...result[i], clicked: false, id: i + ""})
            }
            setCards(newCards)
        })
    }, [])

    function shuffle() {
        const shuffledCards: CardState[] = [...cards];
        for(let i = 0; i < shuffledCards.length; i++) {
            const swapIndex = Math.floor(Math.random() * (listLength - 1));
            [shuffledCards[i], shuffledCards[swapIndex]] = [shuffledCards[swapIndex], shuffledCards[i]] 
        }
        setCards(shuffledCards);
    }

    function setClicked(cardID: string) {
        const newCards = cards.map(card => {
            if(cardID === card.id) {
                card.clicked = true;
            }
            return card;
        })
        setCards(newCards);
    }

    function handleClick(e: React.MouseEvent) {
        const target = e.target as HTMLImageElement
        const cardID: string = target.id;
        const clickedCard: CardState | undefined = cards.find(card => cardID === card.id);
        if(clickedCard?.clicked) {
            resetScore();
            resetCards();
        }
        else {
            increaseScore();
            setClicked(cardID);
            shuffle();
        }
    }

    function resetCards() {
        const newCards: CardState[] = cards.map(card => {
            card.clicked = false;
            return card;
        })
        setCards(newCards);
    }

    return (
        <div className="cards">
            {cards.map(card => <Card key={card.id} id={card.id} imgSrc={card.imageUrl} name = {card.name} handleClick={handleClick}></Card>)}
        </div>
    )
}