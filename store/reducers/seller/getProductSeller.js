const initialState = {
  isDone: false,
  latest: [],
  all: [],
}

const getProductSeller = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_SELLER_PRODUCT':
      return {
        ...state,
        latest: action.data.slice(0, 3),
        all: action.data,
        isDone: true,
      }
    case 'GET_SELLER_PRODUCT_ERROR':
      return {
        ...state,
        isDone: false,
      }
    default:
      return state
  }
}

export default getProductSeller
