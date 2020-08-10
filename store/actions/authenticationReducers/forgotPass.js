export const forgotPass = ({ email }) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}5001/api/forgot`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: JSON.stringify({
            email,
          }),
        }
      )
      if (response.status === 200) {
        dispatch({ type: 'FORGOT_USER' })
      } else if (response.status === 422) {
        throw await response.json()
      }
    } catch (error) {
      dispatch({ type: 'FORGOT_USER_FAIL', error })
    }
  }
}

export const resetPass = ({ password, confirmPassword, token }) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/reset`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            password,
            confirmPassword,
            token,
          }),
        }
      )
      if (response.status === 200) {
        dispatch({ type: 'RESET_UESR' })
      } else if (response.status === 422) {
        throw await response.json()
      }
    } catch (error) {
      dispatch({ type: 'RESET_USER_FAILURE', error })
    }
  }
}
