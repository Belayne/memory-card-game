import "./speechBox.css";
import { useState, useEffect, useRef} from "react";

const lines: String[] = [
    `Alright, Morty, pay attention—this game’s as simple as it gets.`,
    `You see those cards?`,
    `Your job is to click on ‘em.`,
    `But only the ones you haven’t clicked before.`
]


export default function SpeechBox() {
    //TODO: probably lift line state to a parent component "DialogueBox" so it can switch beetween characters
    //pass lines and char image as props
    //create a character object that contains lines and character image then pass it to DialogueBox

    const [text, setText] = useState<String>("");
    const [currentChar, setCurrentChar] = useState(0);
    const [currentLine, setCurrentLine] = useState(0);
    const speechTime = useRef(25);
    
    let lineEnd: Boolean = currentChar === lines[currentLine].length;

    function setNewText(lineString: String): void {
        if(currentChar < lineString.length) {
            const newText = lineString.slice(0, currentChar + 1);
            setText(newText);
            setCurrentChar(currentChar + 1);
        }
    }

    function setNewLine() {
        if(!lineEnd) {
            speechTime.current = 0;
            lineEnd = true;
            return;
        }

        if(currentLine < lines.length - 1 && lineEnd) {
            speechTime.current = 25;
            setCurrentChar(0);
            setCurrentLine(currentLine + 1);
        }
    }

    useEffect(() => {
        const key = setTimeout(() => {setNewText(lines[currentLine])}, speechTime.current)
        return () => {
            clearTimeout(key)
        }
    }, [currentLine, currentChar])

    return (
        <div className="speechBox">
            <img src="https://pngimg.com/d/rick_morty_PNG28.png" alt="" />
            <p className="speechText" onClick={setNewLine}>{text}</p>
            <button>Close</button>
        </div>
    )
}