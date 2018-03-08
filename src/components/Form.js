import React, {Component} from 'react';
import SearchResults from './SearchResults';

class Form extends Component {

    constructor() {
        super();
        this.state = {
            condition: false,
            inputValue: "",
            searchResults: []
        }
    }

    handleOnFocus(event) {
        this.setState({
            condition: true
        }, function () {
            this.props.onFocusForm(this.state.condition);
        })
    }

    handleOnClickClearIcon(event) {
        this.setState({
            inputValue: ""
        }, function () {
            this.props.onClickClear(this.state.condition);
        })
    }

    handleOnBlur(event) {
        setTimeout(() => this.setState({
            condition: false,
            searchResults: []
        }, function () {
            this.props.onBluerForm(this.state);
        }), 250)
    }

    handleInputChange(event) {
        this.setState({
            inputValue: event.target.value
        }, function () {
            this.props.onInputChange(this.state.condition);
        })
    }

    handleKeUp(event) {
        if(event.target.value.length > 1) {
            this.setState({
                inputValue: event.target.value
            }, function () {
                this.props.onKeyUp(this.state.inputValue);
            })
        }
    }

    render() {

        return (
            <div className="box">
                <form onFocus={this.handleOnFocus.bind(this)} onBlur={this.handleOnBlur.bind(this)}>
                    <input type="text" id="zoeken" name="" value={this.state.inputValue} placeholder="Zoeken"
                           ref="inputValue" onChange={this.handleInputChange.bind(this)}
                            onKeyUp={this.handleKeUp.bind(this)}/>
                    <button type="button" onClick={this.handleOnClickClearIcon.bind(this)}
                            className={this.state.condition ? "icon icon-clear" : "icon icon-clear visibility-hide"}>
                        <span>X</span>
                    </button>
                    <button className="icon icon-search">
                        <span>icon</span>
                    </button>
                    <SearchResults searchResults={this.props.searchResults}/>
                </form>
            </div>
        );
    }
}

export default Form;