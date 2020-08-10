export const getMessageAction = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/message`,
        {
          headers: new Headers({
            'weirdo-get-message': 'weirdo-get-message',
          }),
          credentials: 'include',
        }
      )

      const result = await response.json()
      if (response.status === 200) {
        dispatch({ type: 'GET_MESSAGE', data: result })
      } else if (response.status === 422) {
        dispatch({ type: 'GET_MESSAGE', data: result })
      } else {
        throw await result
      }
    } catch {
      dispatch({ type: 'GET_MESSAGE_ERROR' })
    }
  }
}
