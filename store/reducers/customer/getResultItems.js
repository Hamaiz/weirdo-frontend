const initialState = {
  isDone: false,
  items: [],
}

const getResultItems = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ITEM_PRODUCT':
      return {
        ...state,
        isDone: true,
        items: action.data,
      }
    case 'GET_ITEM_PRODUCT_ERROR':
      return {
        ...state,
        isDone: false,
      }
    default:
      return state
  }
}

export default getResultItems
