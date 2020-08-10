import { useState, useEffect } from 'react'
import Head from 'next/head'
import { connect } from 'react-redux'

// import
import { forgotPass } from '../store/actions/authenticationReducers/forgotPass'
import Navbar from '../components/Navbar'
import Loader from '../components/all/Loader/Loader'

// Style
import style from '../styles/forgot.module.scss'

const forgot = ({ forgotPass, authError }) => {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [disable, setDisable] = useState(true)

  useEffect(() => {
    handleAuthError()
  }, [authError])

  const handleAuthError = async () => {
    if (authError) {
      setLoading(false)
      const { errors } = authError
      for await (const e of errors) {
        switch (e.param) {
          case 'email':
            document.getElementById('emailError').innerText = e.msg
            break
          case 'no':
            document.getElementById('emailError').innerText = e.msg
            break
        }
      }
    } else if (authError === null) {
      setLoading(false)
      M.Modal.init(document.querySelector('.modal'), {
        dismissible: false,
      }).open()
    }
  }

  const handleSubmit = async () => {
    setLoading(true)
    forgotPass({ email })
  }

  const handleError = (e) => {
    const { name, value } = e.target
    if (name === 'email') {
      if (!value.match(/\S+@\S+\.\S+/g)) {
        document.getElementById('emailError').innerText =
          'Please provide a correct email'
        setDisable(true)
      } else {
        document.getElementById('emailError').innerText = ''
        setDisable(false)
      }
    }
  }

  return (
    <>
      <Head>
        <title>Weirdo | Forget Password</title>
      </Head>
      <Loader loading={loading} />
      <Navbar />
      <div className={style.forgot}>
        <div className='container'>
          <div className='col m6 s12 center'>
            <div className={style.forgot_heading}>
              Hey! please enter your email
            </div>
          </div>
          <div className={style.forgot_bg}>
            <div className='col m6 s12'>
              <div className={style.forgot_control}>
                <div className={style.forgot_label}>
                  Email <span>*</span>
                </div>
                <div className={style.forgot_input}>
                  <input
                    type='email'
                    name='email'
                    onChange={(e) => setEmail(e.target.value)}
                    className={'browser-default '}
                    onKeyUp={handleError}
                  />
                </div>
                <div className={style.forgot_error} id='emailError'></div>
              </div>
            </div>
            <div className='col m6 s12 center'>
              <div
                className={
                  style.forgot_btn + ' ' + (disable ? style.disable : '')
                }
                onClick={handleSubmit}>
                Submit
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='modal1' className='modal'>
        <div className='modal-content center'>
          <h4 className={style.modal_text}>Verify your email to continue</h4>
        </div>
        <div className='modal-footer'>
          <a
            className='modal-close waves-effect waves-green btn-flat'
            onClick={() => (window.location.href = '/login')}>
            OK
          </a>
        </div>
      </div>
    </>
  )
}

forgot.getInitialProps = async ({ res, req }) => {
  if (req) {
    const response = await fetch(`${NEXT_PUBLIC_API_URL}/api/user`, {
      headers: new Headers({
        'weirdo-get-user': 'weirdo-get-user',
        cookie: req.headers.cookie,
      }),
    })
    if (response.status === 200) {
      res.writeHead(302, {
        Location: '/dashboard',
      })
      res.end()
    } else {
      return {}
    }
  } else {
    const response = await fetch(`${NEXT_PUBLIC_API_URL}/api/user`, {
      headers: new Headers({
        'weirdo-get-user': 'weirdo-get-user',
      }),
      credentials: 'include',
    })
    if (response.status === 200) {
      Router.push('/dashboard')
      return {}
    } else {
      return {}
    }
  }
}

const mapStateToProps = ({ forgotPass }) => ({
  authError: forgotPass.authError,
})

const mapDispatchToProps = (dispatch) => ({
  forgotPass: (email) => dispatch(forgotPass(email)),
})

export default connect(mapStateToProps, mapDispatchToProps)(forgot)
