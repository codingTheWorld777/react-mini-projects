import React from "react";

const Player = ({ name, score }) => {
    return (
        <div className="player">
            <h3>{name}</h3>
            <div style={{ textAlign: "left" }}>
               <span style={{ margin: "10px" }}> Score: {(name === "Player 1" ? score[0] : score[1])}</span>
            </div>
        </div>
    );
};

export default Player;