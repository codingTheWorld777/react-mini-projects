import React from 'react';
import Accordian from './components/Accordion';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                Widgets App
                <Accordian />
            </div>
        );
    }
}

export default App;