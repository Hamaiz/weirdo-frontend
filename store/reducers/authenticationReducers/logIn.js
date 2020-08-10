const initialState = {
  authError: undefined,
}

const logIn = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return {
        ...state,
        authError: null,
      }
    case 'LOGIN_USER_FAIL':
      return {
        ...state,
        authError: action.error,
      }
    default:
      return state
  }
}

export default logIn
