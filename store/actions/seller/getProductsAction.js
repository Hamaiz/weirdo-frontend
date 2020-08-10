export const getAllProduct = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/seller/get-product`,
        {
          headers: new Headers({
            'weirdo-seller-product': 'weirdo-seller-product',
          }),
          credentials: 'include',
        }
      )

      const result = await response.json()
      if (response.status === 200) {
        dispatch({ type: 'GET_SELLER_PRODUCT', data: result })
      } else {
        throw await result
      }
    } catch {
      dispatch({ type: 'GET_SELLER_PRODUCT_ERROR' })
    }
  }
}
