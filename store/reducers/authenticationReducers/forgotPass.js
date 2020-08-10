const initialState = {
  authError: undefined,
}

const forgotPass = (state = initialState, action) => {
  switch (action.type) {
    case 'FORGOT_USER':
      return {
        ...state,
        authError: null,
      }
    case 'FORGOT_USER_FAIL':
      return {
        ...state,
        authError: action.error,
      }
    case 'RESET_UESR':
      return {
        ...state,
        authError: null,
      }
    case 'RESET_USER_FAILURE':
      return {
        ...state,
        authError: action.error,
      }
    default:
      return state
  }
}

export default forgotPass
