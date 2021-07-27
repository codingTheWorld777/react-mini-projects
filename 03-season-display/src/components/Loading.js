import React from 'react';

const Loading = props => {
    return (
        <div className="ui">
            <div className="ui active dimmer">
                <div className="ui big text loader">{ props.text }</div>
            </div>
            <img className="ui wireframe image" src="https://semantic-ui.com/images/wireframe/short-paragraph.png" />
        </div>
    );
}

Loading.defaultProps = {
    text: "Loading..."
}

export default Loading;