import Cookies from 'universal-cookie'
import { history } from '..'


const cookies = new Cookies()

const UPDATE_USERNAME = 'UPDATE_USERNAME'
const UPDATE_PASSWORD = 'UPDATE_PASSWORD'
const LOGIN = 'LOGIN'

 const InitialState = {
   username: '',
   password: '',
   token: cookies.get('token'),
   user: {}
  }

export default(state = InitialState, action) => {
switch(action.type){
  case UPDATE_USERNAME: {
    return { ...state,
      username: action.username
    }
  }
  case UPDATE_PASSWORD: {
    return {
      ...state,
      password: action.password
    }
  }
  case LOGIN: {
    return {
      ...state,
      token: action.token, password: '', user: action.user
    }
  }
  default:
    return state
}
}

export function updateUserField(username){
  return { type: UPDATE_USERNAME, username}
}

export function updatePasswordField(password) {
  return { type: UPDATE_PASSWORD, password }
}

export function tryGetUserInfo() {
  return () => {
    fetch('/api/v1/user-info')
      .then((r) => r.json())
      .then((data) => {
        console.log(data)
      })
  }
}

export function signUp() {
  return (dispatch, getState) => {
    const { username, password } = getState().users
    fetch('/api/v1/usercreate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })
    })
      .then((r) => r.json())
      .then((data) => {
        dispatch({ type: LOGIN, token: data.token, user: data.user })
      })
  }
}



export function trySignIn() {
  return (dispatch) => {
    fetch('/api/v1/auth')
      .then((r) => r.json())
      .then((data) => {
        dispatch({ type: LOGIN, token: data.token, user: data.user })
        history.push('/private')
      })
  }
}

export function signIn() {
  return (dispatch, getState) => {
    const { username, password } = getState().users
    fetch('/api/v1/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })
    })
      .then((r) => r.json())
      .then((data) => {
        dispatch({ type: LOGIN, token: data.token, user: data.user})
        history.push('/private')
      })
  }
}