import React, { useState, useEffect } from "react";
import "./App.css";
import Panel from "./boardgame/Panel";
import PlayerPanel from "./player/PlayerPanel";

const App = () => {
    const [turn, setTurn] = useState(0);
    const [boardGame, setBoardGame] = useState([[null, null, null], [null, null, null], [null, null, null]]);
    const [winner, setWinner] = useState(null);
    const [score, setScore] = useState([0, 0]);

    const setNextRound = () => {
        setBoardGame([[null, null, null], [null, null, null], [null, null, null]]);
        setWinner(null);
        setTurn(0);    

        for (let id = 0; id < boardGame.length * boardGame[0].length; id++) {
            document.getElementById(`caro-element-${id}`).style.background = null;
        }
    };

    const updateBoardGame = (x, y, id) => {
        if (!boardGame[y][x] && !winner) {
            setTurn(turn + 1);

            let cloneBoardGame = [[null, null, null], [null, null, null], [null, null, null]];

            for (let j = 0; j < boardGame.length; j++) {
                for (let i = 0; i < boardGame[0].length; i++) {
                    cloneBoardGame[j][i] = boardGame[j][i];
                }
            }
            if ((turn + 1) % 2 === 1) {
                cloneBoardGame[y][x] = "X";
                document.getElementById(`caro-element-${id}`).style.background = "url(" + process.env.PUBLIC_URL + "/images/x.png)";
            }
            else {
                cloneBoardGame[y][x] = "O";
                document.getElementById(`caro-element-${id}`).style.background = "url(" + process.env.PUBLIC_URL + "/images/o.png)";
            }

            setBoardGame(cloneBoardGame);
        }
    };

    // Check if we have a winner!
    useEffect(() => {
        /** Find the winner horizontally */ 
        for (let y = 0; y < boardGame.length; y++) { 
            if (boardGame[y][0] && boardGame[y][0] === boardGame[y][1] && boardGame[y][0] === boardGame[y][2]) {
                setWinner(<span>The winner is: player {(turn % 2 === 1) ? 1 : 2}</span>);  
                (turn % 2 === 1) ? setScore([score[0] + 1, score[1]]): setScore([score[0], score[1] + 1]);
                return;

            } else continue;   
        }

        /** Find the winner vertically */ 
        for (let x = 0; x < boardGame[0].length; x++) {
            if (boardGame[0][x] && boardGame[0][x] === boardGame[1][x] && boardGame[0][x] === boardGame[2][x]) {
                setWinner(<span>The winner is: player {(turn % 2 === 1) ? 1 : 2}</span>); 
                (turn % 2 === 1) ? setScore([score[0] + 1, score[1]]): setScore([score[0], score[1] + 1]);
                return;

            } else continue;   
        }

        if (turn === 9) setWinner(<span>This turn is draw!</span>); 

    }, [boardGame, turn]);

    return (
        <div>
            <h2 
                className="ui header" 
                style={{ textAlign: "center", marginTop: "40px" }}
            >
                Happy game!
            </h2>

            <div className="game">
                <div style={{ marginTop: "40px", marginRight: "20px" }}>
                    <Panel onUpdateBoardGame={updateBoardGame} />
                </div>

                <div style={{ marginTop: "40px", marginLeft: "20px" }}>
                    <PlayerPanel score={score} setNextRound={setNextRound} />
                </div>
            </div>

            <h2 id="winner" className="ui header" style={{ marginTop: "20px", textAlign: "center" }}>{winner}</h2>
        </div>
    );
};

export default App;