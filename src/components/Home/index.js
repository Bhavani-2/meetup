import './index.css'

import {Link, withRouter} from 'react-router-dom'
import LoginContext from '../../context/LoginContext'

// import Header from '../Header'

const Home = props => {
  const onClickButton = () => {
    const {history} = props
    history.replace('/register')
  }

  return (
    <LoginContext.Consumer>
      {value => {
        const {activeTopic, searchInput, isRegisterClicked} = value
        return (
          <div className="main-container">
            {isRegisterClicked === true ? (
              <div className="container1">
                <h1 className="heading">Hello {searchInput}</h1>
                <p className="welcome-para">Welcome to {activeTopic}</p>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                  className="image"
                />
              </div>
            ) : (
              <div className="container1">
                <h1 className="meetup-heading">Welcome to Meetup</h1>
                <p className="topic-para">Please register for the topic</p>
                <Link to="/register">
                  <button
                    className="button button1"
                    onClick={onClickButton}
                    type="button"
                  >
                    Register
                  </button>
                </Link>

                <img
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                  className="image"
                />
              </div>
            )}
          </div>
        )
      }}
    </LoginContext.Consumer>
  )
}

export default withRouter(Home)
