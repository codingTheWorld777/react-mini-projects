import React from "react";

const CaroElement = ({ id, coords, onTickCaro }) => {
    return (
        <div 
            className="caro-element"
            id={`caro-element-${id}`}
            style={{ width: "140px", height: "140px", border: "2px solid black" }} 
            onClick={() => onTickCaro(coords[1], coords[0], id)}
        >
            
        </div>
    );
};

export default CaroElement;