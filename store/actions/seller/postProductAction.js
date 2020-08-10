export const postProductAction = (data) => {
  return async (dispatch) => {
    try {
      const {
        title,
        price,
        dimensions,
        available,
        weight,
        description,
        file,
        images,
      } = data

      const formData = new FormData()
      formData.append('file', file)
      images.forEach((file) => {
        formData.append('productPhotos', file)
      })
      formData.set('title', title)
      formData.set('price', price)
      formData.set('description', description)
      formData.set('weight', weight)
      formData.set('dimensions', dimensions)
      formData.set('available', available)

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}5001/api/seller/add-product`,
        {
          method: 'POST',
          credentials: 'include',
          body: formData,
        }
      )
      console.log(response)
      if (response.status === 200) {
        dispatch({ type: 'POST_PRODUCT' })
      } else if (422) {
        throw await response.json()
      }
    } catch (error) {
      dispatch({ type: 'POST_PRODUCT_ERROR' })
    }
  }
}
export const postEditProductAction = (data) => {
  return async (dispatch) => {
    try {
      const {
        title,
        price,
        dimensions,
        available,
        weight,
        description,
        file,
        images,
        slugs,
      } = data

      const formData = new FormData()
      formData.append('file', file)
      images.forEach((file) => {
        formData.append('productPhotos', file)
      })
      formData.set('title', title)
      formData.set('price', price)
      formData.set('description', description)
      formData.set('weight', weight)
      formData.set('dimensions', dimensions)
      formData.set('available', available)
      formData.set('slug', slugs)

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/seller/edit-product`,
        {
          method: 'POST',
          credentials: 'include',
          body: formData,
        }
      )
      console.log(response)
      if (response.status === 200) {
        dispatch({ type: 'POST_PRODUCT' })
      } else if (422) {
        throw await response.json()
      }
    } catch (error) {
      dispatch({ type: 'POST_PRODUCT_ERROR' })
    }
  }
}
