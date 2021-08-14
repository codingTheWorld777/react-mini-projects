import React, { useState, useEffect } from "react";
import Panel from "./Panel";

const App = () => {
    const [coords, setCoords] = useState([]);
    const [turn, setTurn] = useState(0);
    const [winner, setWinner] = useState(null);

    const gameBoard = [[null, null, null], [null, null, null], [null, null, null]];
    
    const updateGameBoard = (x, y) => {
        setCoords(coords.concat({ x: x, y: y}));

        if ((turn + 1) % 2 === 1) gameBoard[y][x] = "X";
        else gameBoard[y][x] = "O";

        setTurn(turn + 1);
    };

    // Check if we have a winner!
    useEffect(() => {
        /** Find the winner horizontally */ 
        for (let y = 0; y < gameBoard.length; y++) { 
            let count = 0;

            for (let x = 0; x < gameBoard[0].length; x++) {  
                if (gameBoard[y][x] === gameBoard[y][x + 1] === gameBoard[y][x + 2]) {
                    setWinner(<span>The winner is: player {(turn % 2) + 1}</span>);   // the winner is player 1 or 2
                    console.log("Winner", (turn % 2) + 1);
                    return;
                } else break;   // break out of the loop of x and increase y to 1 
            }
        }

        /** Find the winner vertically */ 
        for (let x = 0; x < gameBoard[0].length; x++) {
            for (let y = 0; y < gameBoard.length; y++) {
                if (gameBoard[x][y] === gameBoard[x][y + 1] === gameBoard[x][y + 2]) {
                    setWinner(<span>The winner is: player {(turn % 2) + 1}</span>);   // the winner is player 1 or 2
                    console.log("Winner", (turn % 2) + 1);
                    return;
                } else break;   // break out of the loop of y and increase x to 1 
            }
        }

    }, [gameBoard]);

    return (
        <div className="ui container" style={{ marginTop: "40px" }}>
            <h2 id="winner" className="ui header" style={{ marginBottom: "10px" }}>{winner}</h2>
            <Panel onUpdateGameBoard={updateGameBoard} coords={coords} />
        </div>
    );
};

export default App;