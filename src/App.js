import React, {Component} from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import Form from './components/Form';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            condition: true,
            inputValue: ""
        };
    }

    onFocusForm(state) {
        this.setState({
            condition: state
        })
    }

    onBlueForm(state) {
        this.setState({
            condition: state
        })
    }

    onClickClear(state) {
        this.setState({
            inputValue: ""
        })
    }

    onOnInputChange(state) {
        this.setState({
            inputValue: state
        })
    }

    render() {
        return (
            <div className="container">
                < Form onFocusForm={this.onFocusForm.bind(this)} onBlueForm={this.onBlueForm.bind(this)}
                       onInputChange={this.onOnInputChange.bind(this)} onClickClear={this.onClickClear.bind(this)}/>
            </div>
        );
    }
}

export default App;