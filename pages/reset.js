import { useState, useEffect } from 'react'
import Head from 'next/head'
import { connect } from 'react-redux'

// import
import { resetPass } from '../store/actions/authenticationReducers/forgotPass'
import Navbar from '../components/Navbar'
import Loader from '../components/all/Loader/Loader'

// Style
import style from '../styles/forgot.module.scss'

const reset = ({ resetPass, token, authError }) => {
  const [loading, setLoading] = useState(false)
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  useEffect(() => {
    console.log(authError)
    handleAuthError()
  }, [authError])

  const handleAuthError = async () => {
    if (authError) {
      setLoading(false)
      const { errors } = authError
      for await (const e of errors) {
        switch (e.param) {
          case 'password':
            document.getElementById('passError').innerText = e.msg
            break
          case 'confirmPassword':
            document.getElementById('confirmPassError').innerText = e.msg
            break
        }
      }
    } else if (authError === null) {
      window.location.href = '/login'
    }
  }

  const handleSubmit = () => {
    setLoading(true)
    resetPass({ password, confirmPassword, token })
  }

  const handleError = (e) => {
    const { value, name } = e.target
    switch (name) {
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
          document.getElementById('confirmPassError').innerText =
            'Password should match'
        } else {
          document.getElementById('confirmPassError').innerText = ''
        }
        break
    }
  }
  return (
    <>
      <Head>
        <title>Weirdo | Reset</title>
      </Head>
      <Loader loading={loading} />
      <Navbar />
      <div className={style.forgot}>
        <div className='container'>
          <div className='col m6 s12 center'>
            <div className={style.forgot_heading}>
              Hey! please write a new password
            </div>
          </div>
          <div className={style.forgot_bg}>
            <div className='col m6 s12'>
              <div className={style.forgot_control}>
                <div className={style.forgot_label}>
                  Password <span>*</span>
                </div>
                <div className={style.forgot_input}>
                  <input
                    type='password'
                    name='password'
                    onChange={(e) => setPassword(e.target.value)}
                    className={'browser-default '}
                    onKeyUp={handleError}
                  />
                </div>
                <div className={style.forgot_error} id='passError'></div>
              </div>
            </div>
            <div className='col m6 s12'>
              <div className={style.forgot_control}>
                <div className={style.forgot_label}>
                  Confirm Password <span>*</span>
                </div>
                <div className={style.forgot_input}>
                  <input
                    type='password'
                    name='confirmPassword'
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className={'browser-default '}
                    onKeyUp={handleError}
                  />
                </div>
                <div className={style.forgot_error} id='confirmPassError'></div>
              </div>
            </div>
          </div>
          <div className='col m6 s12 center'>
            <div className={style.forgot_btn} onClick={handleSubmit}>
              Submit
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

reset.getInitialProps = async ({ query, res }) => {
  const { token } = query

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/reset/${token}`,
    {
      headers: new Headers({
        'weirdo-reset-token': 'weirdo-reset-token',
      }),
    }
  )
  if (response.status === 200) {
    return {
      token,
    }
  } else {
    res.writeHead(301, {
      Location: '/',
    })
    res.end()
  }
}

const mapStateToProps = ({ forgotPass }) => ({
  authError: forgotPass.authError,
})

const mapDispatchToProps = (dispatch) => ({
  resetPass: (pass) => dispatch(resetPass(pass)),
})

export default connect(mapStateToProps, mapDispatchToProps)(reset)
