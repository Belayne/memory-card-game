import "./speechBox.css";
import { useState, useEffect, useRef} from "react";

export default function SpeechBox({dialogue}: any) {

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