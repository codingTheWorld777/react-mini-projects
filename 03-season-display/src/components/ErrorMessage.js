import React from 'react';

const ErrorMessage = props => {
    return (
        <div className="row">
            <div className="column">
            <div className="ui message">
                <h1 className="ui header">Error message: </h1>
                <p>{ props.errorMessage }</p>
                <a className="ui blue button" href="#">Learn more »</a>
            </div>
            </div>
        </div>
    );
}

export default ErrorMessage;