import "./speechBox.css";
import { useState, useEffect, useRef} from "react";


const dialogue = [
    {
        name: "Rick",
        lines: [
            `Alright, Morty, pay attention—this game’s as simple as it gets.`,
            `You see those cards?`,
            `Your job is to click on ‘em.`,
            `But only the ones you haven’t clicked before.`
        ],
        image: "https://pngimg.com/d/rick_morty_PNG28.png"
    },
    {
        name: "Morty",
        lines: [
            "Wait, Rick, that’s it? Just click the cards?"
        ],
        image: "https://e7.pngegg.com/pngimages/776/370/png-clipart-morty-smith-amazon-com-computer-mouse-mouse-mats-rick-sanchez-skin-electronics-face-thumbnail.png"
    },
    {
        name: "Rick",
        lines: [
            `Exactly!`,
            `Each new card you click boosts your score.`,
            `But if you click one twice, it’s all over, Morty.`,
            `No second chances, no retries.`,
            'Just kaboom—world’s done for.'
        ],
        image: "https://pngimg.com/d/rick_morty_PNG28.png"
    },
    {
        name: "Morty",
        lines: [
            `Why does it always have to be so stressful, Rick?!`,
        ],
        image: "https://e7.pngegg.com/pngimages/776/370/png-clipart-morty-smith-amazon-com-computer-mouse-mouse-mats-rick-sanchez-skin-electronics-face-thumbnail.png"
    },
    {
        name: "Rick",
        lines: [
            'Just click the damn cards and stop whining Morty.'
        ],
        image: "https://pngimg.com/d/rick_morty_PNG28.png"
    }
]

export default function SpeechBox() {

    const [text, setText] = useState<string>("");
    const [turn, setTurn] = useState<number>(0);
    const [currentChar, setCurrentChar] = useState<number>(0);
    const [currentLine, setCurrentLine] = useState<number>(0);
    const speechTime = useRef<number>(25);
    
    let lineEnd: boolean = currentChar === dialogue[turn].lines[currentLine].length;

    function setNewText(lineString: string): void {
        if(currentChar < lineString.length) {
            const newText: string = lineString.slice(0, currentChar + 1);
            setText(newText);
            setCurrentChar(currentChar + 1);
        }
    }

    function handleText(): void {
        if(!lineEnd) {
            speechTime.current = 0;
            lineEnd = true;
            return;
        }

        if(currentLine < dialogue[turn].lines.length - 1 && lineEnd) {
            speechTime.current = 25;
            setCurrentChar(0);
            setCurrentLine(currentLine + 1);
        }

        if(currentLine === dialogue[turn].lines.length - 1 && lineEnd && turn < dialogue.length - 1) {
            speechTime.current = 25;
            setCurrentChar(0);
            setCurrentLine(0);
            setTurn(turn + 1);
        }
    }
    useEffect(() => {
        const key = setTimeout(() => {setNewText(dialogue[turn].lines[currentLine])}, speechTime.current)
        return () => {
            clearTimeout(key)
        }
    }, [currentLine, currentChar])

    return (
        <div className="speechBox">
            <img src={dialogue[turn].image} alt="" />
            <div className="speechText" onClick={handleText}>
                <p><b>{dialogue[turn].name}</b></p>
                <p>{text}</p>
            </div>
        </div>
    )
}