const initialState = {
  authError: undefined,
}

const getLocationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_LOCATION':
      return {
        ...state,
        isUploaded: true,
      }
    case 'GET_LOCATION_ERROR':
      return {
        ...state,
        authError: null,
      }
    default:
      return state
  }
}

export default getLocationReducer
