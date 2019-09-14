import React from "react";

function Navbar(props) {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <ul className="nav justify-content-center">
                    <li className="nav-item non-image">
                        <h2>Score: {props.score} | High Score: {props.highScore}</h2>
                    </li>
                </ul>
                <h1 className="display-4">Clicky Game: NFL Players</h1>
                <p className="lead">Click on an image to earn points, but don't click on any more than once!</p>
            </div>
        </div>
    )
}

export default Navbar;