import "./container.css";
import { PropsWithChildren } from "react";

export default function GameContainer({children}: PropsWithChildren) {
    return(
        <div className="container">
            {children}
        </div>
    )
}