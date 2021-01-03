import {
  SEARCH_USERS,
  SET_ALERT,
  SET_LOADING,
  CLEAR_USERS,
  GET_REPOS,
  GET_USER
} from '../Types';

export default (state,action) => {
  switch(action.type) {
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        loading: false
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false
      }
      case GET_USER:
        return {
          ...state,
          user: action.payload,
          loading: false
        }
      case GET_REPOS:
        return {
          ...state,
          repos: action.payload,
          loading: false
        }
    default :
    return state;
  }
}
