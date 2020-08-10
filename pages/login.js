import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { connect } from 'react-redux'
import Router from 'next/router'
import fetch from 'isomorphic-unfetch'

// Import
import { logIn } from '../store/actions/authenticationReducers/logIn'
import Layout from '../components/Layout'
import Loader from '../components/all/Loader/Loader'

// Style
import style from '../styles/login.module.scss'

const login = ({ logIn, authError }) => {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [redirect, setRedirect] = useState('')

  useEffect(() => {
    const url =
      window.location.hostname === 'localhost' ? 'http://localhost:5001' : ''

    setRedirect(url)
  }, [])

  useEffect(() => {
    handleAuthError()
  }, [authError])

  const handleAuthError = () => {
    if (authError) {
      setLoading(false)
      const { message, param } = authError
      switch (param) {
        case 'email':
          document.getElementById('emailError').innerText = message
          break
        case 'password':
          document.getElementById('passError').innerText = message
          break
        default:
          document.getElementById('emailError').innerText = message
          document.getElementById('passError').innerText = message
          break
      }
    } else if (authError === null) {
      window.location.href = '/dashboard'
    }
  }

  const handleSubmit = async () => {
    setLoading(true)
    logIn({ email, password })
  }

  const handleError = (e) => {
    const { name, value } = e.target
    switch (name) {
      case 'email':
        if (!value.match(/\S+@\S+\.\S+/g)) {
          document.getElementById('emailError').innerText =
            'Please provide a correct Email'
        } else {
          document.getElementById('emailError').innerText = ''
        }
        break
      case 'password':
        if (value.length < 6) {
          document.getElementById('passError').innerText =
            'Password should be 6 characters long'
        } else {
          document.getElementById('passError').innerText = ''
        }
        break
    }
  }

  return (
    <>
      <Loader loading={loading} />
      <Layout>
        <Head>
          <title>Weirdo | Login</title>
        </Head>
        <div className='container'>
          <div className={style.login}>
            <div className={style.login_name}>
              Welcome to Weirdo! Please login.
              <span className='right'>
                New Member?
                <Link href='/signup'>
                  <a>Signup</a>
                </Link>
              </span>
            </div>
            <div className={style.login_form}>
              <div className='row'>
                <div className='col m6 s12'>
                  <div className={style.login_form_control}>
                    <div className={style.login_form_control_label}>
                      Email <span>*</span>
                    </div>
                    <div className={style.login_form_control_input}>
                      <input
                        type='text'
                        onChange={(e) => setEmail(e.target.value)}
                        onKeyUp={handleError}
                        name='email'
                        className='browser-default'
                      />
                    </div>
                    <div
                      className={style.login_form_control_error}
                      id='emailError'></div>
                  </div>
                </div>
                <div className='col m6 s12'>
                  <div className={style.login_form_control}>
                    <div className={style.login_form_control_label}>
                      Password <span>*</span>
                    </div>
                    <div className={style.login_form_control_input}>
                      <input
                        type='password'
                        onChange={(e) => setPassword(e.target.value)}
                        onKeyUp={handleError}
                        className='browser-default'
                        name='password'
                      />
                    </div>
                    <div
                      className={style.login_form_control_error}
                      id='passError'></div>
                  </div>
                </div>
                <div className='col s12 center'>
                  <button
                    className={style.login_form_btn}
                    onClick={handleSubmit}>
                    Log In
                  </button>
                </div>
                <div className='col s12 right-align'>
                  <Link href='/forgot'>
                    <div className={style.login_form_forget}>
                      Forgot Password?
                    </div>
                  </Link>
                </div>
                <div className='col s12 center'>
                  <div className={style.login_form_or}>Or</div>
                </div>
                <div className='col m6 s12 center'>
                  <Link href={'/redirect?url=' + redirect + '/api/google'}>
                    <div className={style.login_form_social_g}>
                      Log In with Google
                    </div>
                  </Link>
                </div>
                <div className='col m6 s12 center'>
                  <Link href={'/redirect?url=' + redirect + '/api/twitter'}>
                    <div className={style.login_form_social_t}>
                      Log In with Twiiter
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

login.getInitialProps = async ({ res, req }) => {
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
      res.writeHead(302, {
        Location: '/dashboard',
      })
      res.end()
    } else {
      return {}
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
      Router.push('/dashboard')
      return {}
    } else {
      return {}
    }
  }
}

const mapStateToProps = ({ logIn }) => ({
  authError: logIn.authError,
})
const mapDispatchToProps = (dispatch) => ({
  logIn: (data) => dispatch(logIn(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(login)
