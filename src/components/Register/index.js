// import {Component} from 'react'

import {withRouter} from 'react-router-dom'

import './index.css'
import LoginContext from '../../context/LoginContext'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const Register = props => (
  <LoginContext.Consumer>
    {value => {
      const {
        activeTopic,
        changeTopic,
        changeSearch,
        searchInput,

        showError,
        registerName,
        updateError,
      } = value
      console.log(activeTopic)

      const onChangeTopic = event => {
        changeTopic(event.target.value)
      }
      const onChangeSerach = event => {
        changeSearch(event.target.value)
      }
      const onSubmit = event => {
        event.preventDefault()
        if (searchInput !== '' && activeTopic !== '') {
          const {history} = props
          history.replace('/')
          registerName()
        } else {
          updateError()
        }
      }

      return (
        <div className="main-section">
          <img
            className="register-logo"
            src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
            alt="website register"
          />
          <div className="register-container">
            <h1 className="heading1">Let us join</h1>
            <form className="register-container" onSubmit={onSubmit}>
              <label className="label" htmlFor="label">
                Name
              </label>
              <input
                className="input"
                type="text"
                id="label"
                placeholder="Your name"
                onChange={onChangeSerach}
                value={searchInput}
              />
              <label className="label" htmlFor="label1">
                Topics
              </label>
              <select
                className="input"
                id="label1"
                value={activeTopic}
                onChange={onChangeTopic}
              >
                {topicsList.map(each => (
                  <option key={each.id} value={each.id}>
                    {each.displayText}
                  </option>
                ))}
              </select>
              <button className="button" type="submit">
                Register Now
              </button>
              {showError ? <p className="para">Please enter your name</p> : ''}
            </form>
          </div>
        </div>
      )
    }}
  </LoginContext.Consumer>
)

export default withRouter(Register)
