import React from "react";
import "./style.css";

function PlayerCard(props) {
    return (
        <div className="card">
            <div className="img-container ">
                <button onClick={() => props.handleCardCount(props.id)}>
                    <span class="align-middle">
                        <img alt={props.id} src={props.image} className="align-middle" />
                    </span>
                </button>
            </div>
        </div>
    );
}

export default PlayerCard;