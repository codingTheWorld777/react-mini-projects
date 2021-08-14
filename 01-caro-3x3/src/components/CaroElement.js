import React, { useState } from "react";

const CaroElement = ({ coords, onTickCaro }) => {
    return (
        <div 
            style={{ width: "140px", height: "140px", border: "2px solid black" }} 
            onClick={() => onTickCaro(coords[1], coords[0])}
        >
            
        </div>
    );
};

export default CaroElement;