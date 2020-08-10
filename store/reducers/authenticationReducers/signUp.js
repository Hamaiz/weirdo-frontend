const initialState = {
  authError: undefined,
}

const signUp = (state = initialState, action) => {
  switch (action.type) {
    case 'POST_USER':
      return {
        ...state,
        authError: null,
      }
    case 'SIGNUP_USER_FAIL':
      return {
        ...state,
        authError: action.error,
      }
    default:
      return state
  }
}

export default signUp
