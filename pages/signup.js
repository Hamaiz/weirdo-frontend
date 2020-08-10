import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { connect } from 'react-redux'
import Router from 'next/router'

// Import
import { signUp } from '../store/actions/authenticationReducers/signUp'
import Layout from '../components/Layout'
import Loader from '../components/all/Loader/Loader'

// Style
import style from '../styles/signup.module.scss'

const signup = ({ signUp, authError }) => {
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [checkbox, setCheckbox] = useState(true)

  useEffect(() => {
    handleErrors()
  }, [authError])

  const handleErrors = async () => {
    if (authError) {
      setLoading(false)
      const { errors } = authError
      for await (const e of errors) {
        switch (e.param) {
          case 'name':
            document.getElementById('nameError').innerText = e.msg
            break
          case 'email':
            document.getElementById('emailError').innerText = e.msg
            break
          case 'password':
            document.getElementById('passError').innerText = e.msg
            break
          case 'confirmPassword':
            document.getElementById('confirmError').innerText = e.msg
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
    signUp({
      name,
      email,
      password,
      confirmPassword,
      checkbox,
    })
  }

  const handleError = (e) => {
    const { name, value } = e.target
    switch (name) {
      case 'name':
        if (value === '') {
          document.getElementById('nameError').innerText =
            'This should not be empty'
        } else {
          document.getElementById('nameError').innerText = ''
        }
        break
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
      case 'confirmPassword':
        if (value !== document.querySelector('input[name="password"]').value) {
          document.getElementById('confirmError').innerText =
            'Password should match'
        } else {
          document.getElementById('confirmError').innerText = ''
        }
        break
    }
  }

  return (
    <>
      <Loader loading={loading} />
      <Layout>
        <Head>
          <title>Weirdo | Signup</title>
        </Head>
        <div className='container'>
          <div className={style.signup}>
            <div className={style.signup_name}>
              Sign Up for Weirdo
              <span className='right'>
                Already a Member?
                <Link href='/login'>
                  <a>Login</a>
                </Link>
              </span>
            </div>
            <div className={style.signup_form}>
              <div className='row'>
                <div className='col m6 s12'>
                  <div className={style.signup_form_control}>
                    <div className={style.signup_form_control_label}>
                      Full Name <span>*</span>
                    </div>
                    <div className={style.signup_form_control_input}>
                      <input
                        type='text'
                        onChange={(e) => setName(e.target.value)}
                        className={'browser-default'}
                        name='name'
                        onKeyUp={handleError}
                      />
                    </div>
                    <div
                      className={style.signup_form_control_error}
                      id='nameError'></div>
                  </div>
                </div>
                <div className='col m6 s12'>
                  <div className={style.signup_form_control}>
                    <div className={style.signup_form_control_label}>
                      Email <span>*</span>
                    </div>
                    <div className={style.signup_form_control_input}>
                      <input
                        type='email'
                        onChange={(e) => setEmail(e.target.value)}
                        className='browser-default'
                        name='email'
                        onKeyUp={handleError}
                      />
                    </div>
                    <div
                      className={style.signup_form_control_error}
                      id='emailError'></div>
                  </div>
                </div>
                <div className='col m6 s12'>
                  <div className={style.signup_form_control}>
                    <div className={style.signup_form_control_label}>
                      Password <span>*</span>
                    </div>
                    <div className={style.signup_form_control_input}>
                      <input
                        type='password'
                        onChange={(e) => setPassword(e.target.value)}
                        name='password'
                        className='browser-default'
                        placeholder='Password must be 6 characters long'
                        onKeyUp={handleError}
                      />
                    </div>
                    <div
                      className={style.signup_form_control_error}
                      id='passError'></div>
                  </div>
                </div>
                <div className='col m6 s12'>
                  <div className={style.signup_form_control}>
                    <div className={style.signup_form_control_label}>
                      Confirm Password <span>*</span>
                    </div>
                    <div className={style.signup_form_control_input}>
                      <input
                        type='password'
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className='browser-default'
                        name='confirmPassword'
                        onKeyUp={handleError}
                      />
                    </div>
                    <div
                      className={style.signup_form_control_error}
                      id='confirmError'></div>
                  </div>
                </div>
                <div className='col s12'>
                  <div className={style.signup_form_control}>
                    <div className={style.signup_form_control_checkbox}>
                      <label>
                        <input
                          id='indeterminate-checkbox'
                          type='checkbox'
                          className='red'
                          checked={checkbox}
                          onChange={(e) => setCheckbox(e.target.checked)}
                        />
                        <span>
                          I want to receive exclusive offers and promotions from
                          Weirdo.
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className='col s12 center'>
                  <button
                    className={style.signup_form_btn}
                    onClick={handleSubmit}>
                    Sign Up
                  </button>
                </div>
                <div className='col s12 center'>
                  <div className={style.signup_form_or}>Or</div>
                </div>
                <div className='col m6 s12 center'>
                  <Link href='/api/google'>
                    <div className={style.signup_form_social_g}>
                      Sign Up with Google
                    </div>
                  </Link>
                </div>
                <div className='col m6 s12 center'>
                  <Link href='/api/twitter'>
                    <div className={style.signup_form_social_t}>
                      Sign Up with Twiiter
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
      <div id='modal1' className='modal'>
        <div className='modal-content center'>
          <h4 className={style.modal_text}>Verify your email address</h4>
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

signup.getInitialProps = async ({ res, req }) => {
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

const mapStateToProps = ({ signUp }) => ({
  authError: signUp.authError,
})

const mapDispatchToProps = (dispatch) => ({
  signUp: (newUser) => dispatch(signUp(newUser)),
})

export default connect(mapStateToProps, mapDispatchToProps)(signup)
