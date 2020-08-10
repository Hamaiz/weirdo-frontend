const initialState = {
  authError: undefined,
  isUploaded: false,
}

const postCustomerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'POST_UESR_IMAGE':
      return {
        ...state,
        isUploaded: true,
      }
    case 'POST_UESR_RESET':
      return {
        ...state,
        isUploaded: false,
      }
    case 'POST_CUSTOMER_ERROR':
      return {
        ...state,
        authError: null,
        isUploaded: false,
      }
    default:
      return state
  }
}

export default postCustomerReducer
