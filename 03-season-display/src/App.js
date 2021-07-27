import React from 'react';
import SeasonDisplay from './components/SeasonDisplay';
import ErrorMessage from './components/ErrorMessage';
import Loading from './components/Loading';
import Clock from './components/Clock';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { latitude: null, longitude: null, errorMessage: null };
        this.timeId = null;
    }

    componentDidMount() {
        const findLocation = () => {
            window.navigator.geolocation.getCurrentPosition(
                pos => {
                    this.setState({ 
                        latitude: pos.coords.latitude, 
                        longitude: pos.coords.longitude
                    });
                },
                err => this.setState({ errorMessage: err.message })
            );
        };

        this.timeId = setInterval(findLocation, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timeId);
    }

    // To avoid conditionals in render
    renderContent() {
        if (this.state.errorMessage && !this.state.latitude) {
            return <ErrorMessage errorMessage={ this.state.errorMessage } />

        } else if (!this.state.errorMessage && this.state.latitude) {
            return (
                <SeasonDisplay latitude={ this.state.latitude } >
                    <Clock time={ new Date().toLocaleTimeString() } />
                </SeasonDisplay>
            );
        } 

        return <Loading text="Please accept your location request" />
    } 

    render() {
        return  <div className="border black">{ this.renderContent() }</div>
    }
};


export default App;