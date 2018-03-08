import React, {Component} from 'react';

class SuggestionItem extends Component {

    render() {
        return (
            <li className="suggestionItem">
                <strong>{this.props.searchResult.searchterm} </strong>
            </li>
        );
    }
}

export default SuggestionItem