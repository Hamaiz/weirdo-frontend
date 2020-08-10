import publicIp from 'react-public-ip'

export const getLocation = () => {
  return async (dispatch) => {
    try {
      const ipv4 = (await publicIp.v4()) || ''
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/location`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: JSON.stringify({ ipv4 }),
        }
      )
      if (response.status === 200) {
        dispatch({ type: 'GET_LOCATION' })
      } else {
        throw response
      }
    } catch (error) {
      dispatch({ type: 'GET_LOCATION_ERROR' })
    }
  }
}
