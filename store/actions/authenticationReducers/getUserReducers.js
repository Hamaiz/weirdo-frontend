export const getUserReducers = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/user`,
        {
          headers: new Headers({
            'weirdo-get-user': 'weirdo-get-user',
          }),
          credentials: 'include',
        }
      )

      const r = await response.json()

      if (response.status === 200) {
        if (r.roles === 'user') {
          dispatch({ type: 'GET_USER', data: r })
        } else {
          dispatch({ type: 'GET_USER', data: r })
        }
      } else {
        dispatch({ type: 'GET_USER_ERROR' })
      }
    } catch (error) {
      dispatch({ type: 'GET_USER_ERROR' })
    }
  }
}
