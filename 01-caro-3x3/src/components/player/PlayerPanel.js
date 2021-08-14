import React from "react";
import "./PlayerPanel.css";
import Player from "./Player";

const PlayerPanel = ({ score, setNextRound }) => {
    const restartGame = () => {
        window.location.reload(false);
    };  

    return (
        <div className="player-panel">
            <div className="group-player">
                <Player name="Player 1" score={score} />
                <Player name="Player 2" score={score} />
            </div>

            <div className="group-btn">
                <button className="ui primary button" onClick={setNextRound}>Next</button>
                <button className="ui green button" onClick={restartGame}>Restart</button>
            </div>
        </div>
    );
};

export default PlayerPanel;