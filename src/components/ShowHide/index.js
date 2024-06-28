// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    showFirstName: false,
    showLastName: false,
  }
  onShowLastName = () => {
    this.setState(prevState => ({showLastName: !prevState.showLastName}))
  }
  onShowFirstName = () => {
    this.setState(prevState => ({showFirstName: !prevState.showFirstName}))
  }
  render() {
    const {showFirstName, showLastName} = this.state
    return (
      <div className="appContainer">
        <h1 className="heading">Show/Hide</h1>
        <div className="showHideContainer">
          <div className="nameContainer">
            <button
              type="button"
              className="showHideButton"
              onClick={this.onShowFirstName}
            >
              Show/Hide Firstname
            </button>
            {showFirstName && <p className="name">Joe</p>}
          </div>
          <div className="nameContainer">
            <button
              type="button"
              className="showHideButton"
              onClick={this.onShowLastName}
            >
              Show/Hide Lastname
            </button>
            {showLastName && <p className="name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
