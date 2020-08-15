const initialState = {
  isDone: false,
  items: [],
}

const getLatest = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_LATEST_PRODUCT':
      return {
        ...state,
        isDone: true,
        items: action.data,
      }
    case 'GET_LATEST_PRODUCT_ERROR':
      return {
        ...state,
        isDone: false,
      }
    default:
      return state
  }
}

export default getLatest
