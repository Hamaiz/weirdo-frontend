import { combineReducers } from 'redux'

// import
import logIn from '../reducers/authenticationReducers/logIn'
import signUp from './authenticationReducers/signUp'
import forgotPass from './authenticationReducers/forgotPass'
import getUser from '../reducers/authenticationReducers/getUser'
import postCustomerReducer from '../reducers/customer/postCustomerReducer'
import getLocationReducer from '../reducers/customer/getLocationReducer'
import sellerForm from '../reducers/seller/sellerForm'
import postSeller from '../reducers/seller/postSeller'
import postProduct from '../reducers/seller/postProduct'
import getProductSeller from '../reducers/seller/getProductSeller'
import getMessage from '../reducers/message/getMessage'
import getResultItems from '../reducers/customer/getResultItems'
import getLatest from '../reducers/customer/getLatest'

const rootReducer = combineReducers({
  signUp,
  logIn,
  forgotPass,
  getUser,
  postCustomerReducer,
  getLocationReducer,
  sellerForm,
  postSeller,
  postProduct,
  getProductSeller,
  getMessage,
  getResultItems,
  getLatest,
})

export default rootReducer
