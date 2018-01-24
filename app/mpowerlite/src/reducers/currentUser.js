import * as types from './types'

const initialState = {
  user: {},
  loggedIn: false
}

const currentUser = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN:
      return [
        ...state,
        {
          loggedIn: true,
          user: action.user
        }
      ]
    case types.LOGOUT:
      return [
        ...state,
        {
          user: {},
          loggedIn: false
        }
      ]
    default:
      return state;
  }
}

export default currentUser;