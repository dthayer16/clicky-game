import React from "react";
import "./style.css";

function PlayerCard(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.id} src={props.image} />
            </div>
        </div>
    );
}

export default PlayerCard;