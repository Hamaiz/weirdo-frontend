const initialState = {
  authError: undefined,
  isLoggedIn: false,
}

const getUser = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USER':
      return {
        ...state,
        ...action.data,
        isLoggedIn: true,
      }
    case 'GET_USER_ERROR':
      return {
        ...state,
        authError: null,
        isLoggedIn: false,
      }
    default:
      return state
  }
}

export default getUser
