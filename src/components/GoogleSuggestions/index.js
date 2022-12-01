// Write your code here
import './index.css'
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onClickInput = event => {
    this.setState({searchInput: event.target.value})
  }

  clickArrow = value => {
    this.setState({
      searchInput: value,
    })
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props

    const filteredSuggestionList = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <div className="google-suggestions-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="google-logo"
          />
          <div className="search-list-input-container">
            <div className="search-input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="search-icon"
              />
              <input
                type="search"
                className="search-input"
                value={searchInput}
                placeholder="Search Google"
                onChange={this.onClickInput}
              />
            </div>
            <ul className="suggestion-list">
              {filteredSuggestionList.map(each => (
                <SuggestionItem
                  suggestionDetails={each}
                  key={each.id}
                  clickArrow={this.clickArrow}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
