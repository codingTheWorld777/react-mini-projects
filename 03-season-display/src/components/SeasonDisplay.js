import React from 'react';
import Clock from './Clock';
import '../style/SeasonDisplay.css';

/**
 * Note: 
 * Northern Hemisphere: From March to August -> Summer, the rest is winter
 * Southern Hemisphere: Revert from above
 */

/** Config season for destructuring variable */
const seasonConfig = {
    summer: {
        decisionText: "Lets hit the beach!",
        icon: "sun",
        iconColor: "orange"
    },
    winter: {
        decisionText: "Burr, it is chilly!",
        icon: "snowflake",
        iconColor: "#b9e2ff"
    }
}

const getSeason = (latitude, month) => {
    if (month > 2 && month < 9) return (latitude > 0) ? "summer" : "winter";
    else return (latitude > 0) ? "winter" : "summer";
};

const SeasonDisplay = props => {
    let season = getSeason(props.latitude, new Date().getMonth());
    let {decisionText, icon, iconColor} = seasonConfig[season];

    return (
        <div className="row season-display">
            <div className="column">
                <div className={ `ui message ${season}` }>
                    <h1 style={{ textAlign: "center" }}>Weather card</h1>
                    <hr style={{ marginBottom: "20px" }} />
                    
                    <i className={`${icon} icon massive icon-left`} style={{ color: iconColor, display: "block", marginBottom: "10px" }} />
                    <h2 className="ui header" style={{ display: "inline" }}>Latitude: </h2>
                    <p style={{ display: "inline" }}>{ props.latitude }</p> <br/>

                    <h2 className="ui header" style={{ display: "inline", marginTop: "10px" }}>Current time: </h2>
                    <Clock/><br/>

                    <h2 className="ui header" style={{ display: "inline" }}>Date: </h2>
                    <p style={{ display: "inline" }}>{ new Date().toLocaleString('en-us', { month: 'long' }) } </p> 
                    <p style={{ display: "inline" }}>{ new Date().getFullYear() }</p> <br/>

                    <h3>The weather at the moment is { season }</h3>

                    <h1> { decisionText }</h1>
                    <i className={`${icon} icon massive icon-right`} style={{ color: iconColor, display: "block", marginBottom: "10px" }} />
                    <a className="ui blue button" href="#">Learn more »</a>
                </div>
            </div>
        </div>
    );
}

export default SeasonDisplay;