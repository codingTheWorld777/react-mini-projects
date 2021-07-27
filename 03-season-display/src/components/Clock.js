import React from "react";

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { time: new Date().toLocaleTimeString() };
        this.timeId = null;
    }

    componentDidMount() {
        const getTime = () => {
            this.setState({ time: new Date().toLocaleTimeString() });
        };

        this.timeId = setInterval(getTime, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timeId);
    }

    render() {
        return (
            <div style={{ display: "inline" }}>{ this.state.time }</div>
        );
    }
}

export default Clock;