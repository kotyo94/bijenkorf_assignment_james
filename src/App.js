import React, {Component} from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import Form from './components/Form';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            condition: true,
            inputValue: "",
            searchResults: []
        };
    }

    onFocusForm(state) {
        this.setState({
            condition: state
        })
    }

    onBluerForm(state) {
        this.setState({
            condition: state.condition,
            searchResults: state.searchResults
        })
    }

    onClickClear(state) {
        this.setState({
            inputValue: "",
            searchResults: []
        })
    }

    onOnInputChange(state) {
        this.setState({
            inputValue: state
        });
    }

    onKeyUp(state) {
        this.getSearchResults(state);
    }

    getSearchResults(query) {
        fetch("http://localhost:3000/search\?q\="+query)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        searchResults: result['suggestions']
                    },function () {
                        console.log(this.state)
                    })
                },
                (error) => {
                    console.log(error)
                }
            )
    }

    render() {
        return (
            <div className="container">
                < Form searchResults={this.state.searchResults} onFocusForm={this.onFocusForm.bind(this)} onBluerForm={this.onBluerForm.bind(this)}
                       onInputChange={this.onOnInputChange.bind(this)} onClickClear={this.onClickClear.bind(this)}
                onKeyUp={this.onKeyUp.bind(this)}/>
            </div>
        );
    }
}

export default App;