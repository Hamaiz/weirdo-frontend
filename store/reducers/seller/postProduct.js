const initialState = {
  error: undefined,
  isDone: false,
}

const postProduct = (state = initialState, action) => {
  switch (action.type) {
    case 'POST_PRODUCT':
      return {
        ...state,
        isDone: true,
        error: null,
      }
    case 'POST_PRODUCT_ERROR':
      return {
        ...state,
        isDone: false,
        error: true,
      }
    default:
      return state
  }
}

export default postProduct
