import publicIp from 'react-public-ip'

export const postsellerAction = (data) => {
  return async (dispatch) => {
    try {
      const ipv4 = (await publicIp.v4()) || ''
      const {
        companyName,
        companyAbbr,
        comapnyLinkedin,
        companyFacebook,
        yourName,
        yourAge,
        yourLinkedin,
        yourFacebook,
        yourDescripiton,
        personalNumber,
        personalExp,
        personalAddress,
      } = data
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/seller/start`,
        {
          method: 'POST',
          credentials: 'include',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            companyName,
            companyAbbr,
            comapnyLinkedin,
            companyFacebook,
            yourName,
            yourAge,
            yourLinkedin,
            yourFacebook,
            yourDescripiton,
            personalNumber,
            personalExp,
            personalAddress,
            ipv4,
          }),
        }
      )
      if (response.status === 200) {
        dispatch({ type: 'POST_SELLER' })
      } else if (response.status === 422) {
        throw await response.json()
      }
    } catch (error) {
      dispatch({ type: 'POST_SELLER_ERROR' })
    }
  }
}

export const postsellerActionState = ({ name, value }) => {
  return async (dispatch) => {
    switch (name) {
      case 'companyName':
        dispatch({ type: 'COMPANY_NAME', value })
        break
      case 'companyAbbr':
        dispatch({ type: 'COMPANY_ABBR', value })
        break
      case 'comapnyLinkedin':
        dispatch({ type: 'COMPANY_LI', value })
        break
      case 'companyFacebook':
        dispatch({ type: 'COMPANY_FB', value })
        break
      case 'yourName':
        dispatch({ type: 'YOUR_NAME', value })
        break
      case 'yourAge':
        dispatch({ type: 'YOUR_AGE', value })
        break
      case 'yourLinkedin':
        dispatch({ type: 'YOUR_LI', value })
        break
      case 'yourFacebook':
        dispatch({ type: 'YOUR_FB', value })
        break
      case 'yourDescripiton':
        dispatch({ type: 'YOUR_DESC', value })
        break
      case 'personalNumber':
        dispatch({ type: 'PERSONAL_NUMB', value })
        break
      case 'personalExp':
        dispatch({ type: 'PERSONAL_EXP', value })
        break
      case 'personalAddress':
        dispatch({ type: 'PERSONAL_ADD', value })
        break
    }
  }
}
