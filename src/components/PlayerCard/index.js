import React from "react";
import "./style.css";

function PlayerCard(props) {
    return (
        <div className="card">
            <button onClick={() => props.handleCardCount(props.id)}>

                <img alt={props.id} src={props.image} />
            </button>
        </div>
    );
}

export default PlayerCard;