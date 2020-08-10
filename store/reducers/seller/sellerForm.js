const initialState = {
  companyName: '',
  companyAbbr: '',
  comapnyLinkedin: '',
  companyFacebook: '',
  yourName: '',
  yourAge: '',
  yourLinkedin: '',
  yourFacebook: '',
  yourDescripiton: '',
  personalNumber: '',
  personalExp: '',
  personalAddress: '',
}

const sellerForm = (state = initialState, action) => {
  switch (action.type) {
    case 'COMPANY_NAME':
      return {
        ...state,
        companyName: action.value,
      }
    case 'COMPANY_ABBR':
      return {
        ...state,
        companyAbbr: action.value,
      }
    case 'COMPANY_LI':
      return {
        ...state,
        comapnyLinkedin: action.value,
      }
    case 'COMPANY_FB':
      return {
        ...state,
        companyFacebook: action.value,
      }
    case 'YOUR_NAME':
      return {
        ...state,
        yourName: action.value,
      }
    case 'YOUR_AGE':
      return {
        ...state,
        yourAge: action.value,
      }
    case 'YOUR_LI':
      return {
        ...state,
        yourLinkedin: action.value,
      }
    case 'YOUR_FB':
      return {
        ...state,
        yourFacebook: action.value,
      }
    case 'YOUR_DESC':
      return {
        ...state,
        yourDescripiton: action.value,
      }
    case 'PERSONAL_NUMB':
      return {
        ...state,
        personalNumber: action.value,
      }
    case 'PERSONAL_EXP':
      return {
        ...state,
        personalExp: action.value,
      }
    case 'PERSONAL_ADD':
      return {
        ...state,
        personalAddress: action.value,
      }
    default:
      return state
  }
}

export default sellerForm
