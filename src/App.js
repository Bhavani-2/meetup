import './App.css'

import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'

import Header from './components/Header'
import NotFound from './components/NotFound'

import Register from './components/Register'

import LoginContext from './context/LoginContext'
import Home from './components/Home'

// These are the lists used in the application. You can move them to any component needed.

/* const topicsList = [
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
] */

// Replace your code here
class App extends Component {
  state = {
    activeTopic: 'Arts and Culture',
    searchInput: '',
    isRegisterClicked: false,
    showError: false,
  }

  changeTopic = activeTopic => {
    this.setState({activeTopic})
  }

  changeSearch = searchInput => {
    this.setState({searchInput})
  }

  registerName = () => {
    this.setState({isRegisterClicked: true})
  }

  updateError = () => {
    this.setState({showError: true})
  }

  render() {
    const {activeTopic, searchInput, isRegisterClicked, showError} = this.state

    return (
      <LoginContext.Provider
        value={{
          activeTopic,
          changeTopic: this.changeTopic,
          searchInput,
          isRegisterClicked,
          showError,
          changeSearch: this.changeSearch,
          registerName: this.registerName,
          updateError: this.updateError,
        }}
      >
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route component={NotFound} />
        </Switch>
      </LoginContext.Provider>
    )
  }
}

export default App
