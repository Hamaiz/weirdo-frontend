const initialState = {
  isDone: false,
  latest: [],
  all: [],
}

const getProduct = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USER_PRODUCT':
      return {
        ...state,
        latest: action.data.slice(0, 3),
        all: action.data,
        isDone: true,
      }
    case 'GET_USER_PRODUCT_ERROR':
      return {
        ...state,
        isDone: false,
      }
    default:
      return state
  }
}

export default getProduct
