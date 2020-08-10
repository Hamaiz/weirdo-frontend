export const logIn = ({ email, password }) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/login`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: JSON.stringify({
            email,
            password,
          }),
        }
      )
      if (response.status === 200) {
        dispatch({ type: 'LOGIN_USER' })
      } else {
        throw await response.json()
      }
    } catch (error) {
      dispatch({ type: 'LOGIN_USER_FAIL', error })
    }
  }
}
