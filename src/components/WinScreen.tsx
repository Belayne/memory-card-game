import rickDanceGif from "../assets/rick_dance.gif";
import "./winScreen.css"

export default function WinScreen() {
    return (
        <div className="winScreen">
            <img src={rickDanceGif} alt="Rick Dancing" />
            <p>YOU DID IT!</p>
        </div>
    )
}