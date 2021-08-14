import React from "react";
import CaroElement from "./CaroElement";
import "./Panel.css";

const Panel = ({ onUpdateGameBoard }) => {
    const createSetOfCoords = () => {
        let setOfCoords = [];

        for (let y = 0; y < 3; y++) {
            for (let x = 0; x < 3; x++) {
                setOfCoords.push([y, x]);
            }
        }

        return setOfCoords;
    };

    const renderedCaroElementList = createSetOfCoords().map((coords, index) => {
        return <CaroElement key={index} tickCaro={onUpdateGameBoard} coords={coords} />;
    });

    return (
        <div className="caro-board" style={{ width: "432px", height: "432px", border: "2px dotted orange" }}>
            <div className="caro-row">{renderedCaroElementList.slice(0, 3)}</div>
            <div className="caro-row">{renderedCaroElementList.slice(3, 6)}</div>
            <div className="caro-row">{renderedCaroElementList.slice(6, 9)}</div>
        </div>
    );
};

export default Panel;