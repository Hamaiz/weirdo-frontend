import { useState, useEffect } from 'react'
import Head from 'next/head'
import { connect } from 'react-redux'

// Import
import { getLocation } from '../store/actions/customer/getLocation'
import { getUserReducers } from '../store/actions/authenticationReducers/getUserReducers'
import Loader from '../components/all/Loader/Loader'
import Layout from '../components/Layout'

// Style
import style from '../styles/setting.module.scss'

const setting = ({
  getLocation,
  getUserReducers,
  getUser,
  getLocationReducer,
}) => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    M.Tooltip.init(document.querySelectorAll('.tooltipped'))
  }, [])

  useEffect(() => {
    if (getLocationReducer.authError === undefined) {
      getUserReducers()
      setLoading(false)
    } else {
      alert('Error Occured')
      window.location.reload()
    }
  }, [getLocationReducer])

  return (
    <>
      <Head>
        <title>Weirdo | Setting</title>
      </Head>
      <Loader loading={loading} />
      <Layout>
        <div className={style.setting}>
          <div className='container'>
            <div className='row'>
              <div className='col s12'>
                <div className={style.setting_container}>
                  <div className={style.setting_container_name}>
                    Your Location
                    {getUser.location === 'Unknown' ? (
                      <a
                        className={
                          'tooltipped ' + style.setting_container_name_tooltip
                        }
                        data-position='right'
                        data-tooltip='We respect your privacy, so if you want better results you can share location.'>
                        i
                      </a>
                    ) : null}
                  </div>
                  {getUser.location === 'Unknown' ? (
                    <div
                      className={style.setting_container_btn}
                      onClick={() => {
                        setLoading(true)
                        getLocation()
                      }}>
                      Share Location
                    </div>
                  ) : (
                    <div className={style.setting_container_location}>
                      {getUser.location}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

setting.getInitialProps = async ({ res, req }) => {
  if (req) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/user`,
      {
        headers: new Headers({
          'weirdo-get-user': 'weirdo-get-user',
          cookie: req.headers.cookie,
        }),
      }
    )
    if (response.status === 200) {
      return {}
    } else {
      res.writeHead(302, {
        Location: '/login',
      })
      res.end()
    }
  } else {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/user`,
      {
        headers: new Headers({
          'weirdo-get-user': 'weirdo-get-user',
        }),
        credentials: 'include',
      }
    )
    if (response.status === 200) {
      return {}
    } else {
      Router.push('/dashboard')
      return {}
    }
  }
}

const mapStateToProps = ({ getUser, getLocationReducer }) => ({
  getUser,
  getLocationReducer,
})

const mapDispatchToProps = (dispatch) => ({
  getLocation: () => dispatch(getLocation()),
  getUserReducers: () => dispatch(getUserReducers()),
})

export default connect(mapStateToProps, mapDispatchToProps)(setting)
