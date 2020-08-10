const initialState = {
  isDone: false,
  users: [],
}

const getMessage = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_MESSAGE':
      return {
        ...state,
        isDone: true,
        users: action.data,
      }
    case 'GET_MESSAGE_ERROR':
      return {
        ...state,
        isDone: false,
      }
    default:
      return state
  }
}

export default getMessage
