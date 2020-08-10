export const signUp = ({
  name,
  email,
  password,
  confirmPassword,
  checkbox,
}) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/signup`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: JSON.stringify({
            name,
            email,
            password,
            confirmPassword,
            checkbox,
          }),
        }
      )
      if (response.status === 200) {
        dispatch({ type: 'POST_USER' })
      } else if (response.status === 422) {
        throw await response.json()
      } else {
        alert('An Error Occured')
        window.location.reload()
      }
    } catch (error) {
      dispatch({ type: 'SIGNUP_USER_FAIL', error })
    }
  }
}
