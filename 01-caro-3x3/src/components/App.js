import React, { useState, useEffect } from "react";
import Panel from "./Panel";

const App = () => {
    const [coords, setCoords] = useState([]);
    const [turn, setTurn] = useState(0);
    const [gameBoard, setGameBoard] = useState([[null, null, null], [null, null, null], [null, null, null]]);
    const [winner, setWinner] = useState(null);

    const updateGameBoard = (x, y) => {
        if (!gameBoard[y][x] && !winner) {
            setCoords(coords.concat({ x: x, y: y}));
            setTurn(turn + 1);

            let cloneGameBoard = [[null, null, null], [null, null, null], [null, null, null]];

            for (let j = 0; j < gameBoard.length; j++) {
                for (let i = 0; i < gameBoard[0].length; i++) {
                    cloneGameBoard[j][i] = gameBoard[j][i];
                }
            }
            if ((turn + 1) % 2 === 1) cloneGameBoard[y][x] = "X";
            else cloneGameBoard[y][x] = "O";

            setGameBoard(cloneGameBoard);
        }
    };

    // Check if we have a winner!
    useEffect(() => {
        /** Find the winner horizontally */ 
        console.log("yeah", gameBoard);
        for (let y = 0; y < gameBoard.length; y++) { 
            if (gameBoard[y][0] && gameBoard[y][0] === gameBoard[y][1] && gameBoard[y][0] === gameBoard[y][2]) {
                setWinner(<span>The winner is: player {(turn % 2 === 1) ? 1 : 2}</span>);  
                return;

            } else continue;   
        }

        /** Find the winner vertically */ 
        for (let x = 0; x < gameBoard[0].length; x++) {
            if (gameBoard[x][0] && gameBoard[x][0] === gameBoard[x][1] && gameBoard[x][0] === gameBoard[x][2]) {
                setWinner(<span>The winner is: player {(turn % 2 === 1) ? 1 : 2}</span>); 
                return;

            } else continue;   
        }

    }, [gameBoard]);

    return (
        <div className="ui container" style={{ marginTop: "40px" }}>
            <Panel onUpdateGameBoard={updateGameBoard} coords={coords} />
            <h2 id="winner" className="ui header" style={{ marginTop: "20px" }}>{winner}</h2>
        </div>
    );
};

export default App;