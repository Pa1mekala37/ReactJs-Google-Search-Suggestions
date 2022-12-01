// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, clickArrow} = props
  const {suggestion} = suggestionDetails

  const onClickArrow = () => {
    clickArrow(suggestion)
  }
  return (
    <li className="suggestion-item">
      <p className="suggestion-name">{suggestion}</p>
      <button className="arrow-button" type="button" onClick={onClickArrow}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-image"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
