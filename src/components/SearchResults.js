import React, {Component} from 'react';
import SuggestionItem from './SuggestionItem'

class SearchResults extends Component {

    render()
    {
        let suggestionItems;
        if (this.props.searchResults) {
            suggestionItems = this.props.searchResults.map(result => {
                return (
                    <SuggestionItem searchResult={result}/>
                )
            })
        }

        return (
            <ul>
                {suggestionItems}
            </ul>
        );
    }
}

export default SearchResults