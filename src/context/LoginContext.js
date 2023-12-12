import React from 'react'

const RegisterContext = React.createContext({
  activeTopic: 'ARTS AND CULTURE',
  searchInput: '',
  changeTopic: () => {},
  changeSearch: () => {},
  onSubmit: () => {},
  isRegisterClicked: false,
  registerName: () => {},
  showError: false,
  updateError: () => {},
})

export default RegisterContext
