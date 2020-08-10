export const getAllProduct = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/customer/get-product`,
        {
          headers: new Headers({
            'weirdo-customer-product': 'weirdo-customer-product',
          }),
          credentials: 'include',
        }
      )

      const result = await response.json()
      if (response.status === 200) {
        dispatch({ type: 'GET_USER_PRODUCT', data: result })
      } else {
        throw await result
      }
    } catch {
      dispatch({ type: 'GET_USER_PRODUCT_ERROR' })
    }
  }
}
