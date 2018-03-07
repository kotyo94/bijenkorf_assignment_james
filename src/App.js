import React, {Component} from 'react';
import Exercise1 from './components/exercise-1';
import Exercise2 from './components/exercise-2';
import Exercise3 from './components/exercise-3';

class App extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="container">
                <h1 className="text-center"> Exercise 1 </h1>
                <Exercise1/>
                <h1 className="text-center"> Exercise 2 </h1>
                <Exercise2/>
                <h1 className="text-center"> Exercise 3 </h1>
                <Exercise3/>
            </div>
        );
    }
}

export default App;