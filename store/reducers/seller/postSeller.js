const initialState = {
  authError: undefined,
  isDone: false,
}

const postSeller = (state = initialState, action) => {
  switch (action.type) {
    case 'POST_SELLER':
      return {
        ...state,
        isDone: true,
        authError: null,
      }
    case 'POST_SELLER_ERROR':
      return {
        ...state,
        isDone: false,
        authError: true,
      }
    default:
      return state
  }
}

export default postSeller
