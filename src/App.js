import React, {Component} from 'react';
import Form from './components/Form';

class App extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="container">
                <Form/>
            </div>
        );
    }
}

export default App;