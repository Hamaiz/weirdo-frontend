import { useState, useEffect } from 'react'
import Head from 'next/head'

// import
import Loader from '../components/all/Loader/Loader'
import style from '../styles/confirmation.module.scss'
import Navbar from '../components/Navbar'

const confirmation = ({ isVerified }) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(isVerified)
    if (isVerified) {
      M.Modal.init(document.querySelector('.modal'), {
        dismissible: false,
      }).open()
      // window.location.href = '/login'
    }
  }, [isVerified])

  return (
    <>
      <Head>
        <title>Weirdo | Confirmation</title>
      </Head>
      <Loader loading={loading} />
      <Navbar />
      <div className={style.confirmation}>
        {!loading ? (
          <div className={style.confirmation_error}>There was an error</div>
        ) : (
          <span></span>
        )}
      </div>
      <div id='modal1' className='modal'>
        <div className='modal-content center'>
          <h4 className={style.modal_text}>You can close this page</h4>
        </div>
      </div>
    </>
  )
}

confirmation.getInitialProps = async ({ query, res }) => {
  const { token } = query

  let isVerified = true
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + '/api/confirmation',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        token,
      }),
    }
  )
  if (response.status === 200) {
    return {
      isVerified,
    }
  } else {
    res.writeHead(301, {
      Location: '/',
    })
    res.end()
  }
}

export default confirmation
