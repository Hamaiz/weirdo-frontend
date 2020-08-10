export const postUploadImage = ({ image }) => {
  return async (dispatch) => {
    const file = await image
    let formData = await new FormData()
    formData.append('file', file)
    dispatch({ type: 'POST_UESR_RESET' })
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/imageUpload`,
        {
          method: 'POST',
          credentials: 'include',
          body: formData,
        }
      )
      if (response.status === 200) {
        dispatch({ type: 'POST_UESR_IMAGE' })
      } else if (401) {
        throw await response.json()
      }
    } catch (error) {
      dispatch({ type: 'POST_CUSTOMER_ERROR', error })
    }
  }
}
