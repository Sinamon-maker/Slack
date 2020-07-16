
const UPDATE_NAME = 'UPDATE_NAME'
const ADD_NAME_TO_LIST = 'ADD_NAME_TO_LIST'
const RECEIVE_CHANELS = 'RECEIVE_CHANELS'

const initialState = {
  chanelname: '',
  chanels: ['olo']
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NAME: {
            return{
        ...state,
              chanelname: action.chanelname
    }
  }
    case RECEIVE_CHANELS: {
      return {
        ...state,
        chanels: [...state.channelList, action.chanels]
      }
    }
          default:
      return state
  }
}

export function setChanelname(chanelname) {
  return { type: UPDATE_NAME, chanelname }
}

export function receiveChanels() {
  return (dispatch) => {
    fetch('/api/v1/chanels')
      .then((r) => r.json())
      .then((data) => {
        dispatch({ type: RECEIVE_CHANELS, chanels: data.chanels })
      })
  }
}

export function addNametochaneLlist() {
  return (dispatch, getState) => {
    const { chanelname } = getState().chanels
    fetch('/api/v1/itemchanel', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chanelname
      })
    })
      .then((r) => r.json())
      .then((data) => {
        dispatch({ type: ADD_NAME_TO_LIST, chanel: data.chanel })
      })
  }
}