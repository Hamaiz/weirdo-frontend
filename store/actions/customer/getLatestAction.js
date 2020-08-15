export const getLatestAction = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/get-latest-item`,
        {
          headers: new Headers({
            'weirdo-item-product': 'weirdo-item-product',
          }),
          credentials: 'include',
        }
      )

      const result = await response.json()
      if (response.status === 200) {
        dispatch({ type: 'GET_LATEST_PRODUCT', data: result })
      } else {
        throw await result
      }
    } catch {
      dispatch({ type: 'GET_LATEST_PRODUCT_ERROR' })
    }
  }
}
