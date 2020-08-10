import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { connect } from 'react-redux'
import Router from 'next/router'

// import
import {
  postsellerAction,
  postsellerActionState,
} from '../store/actions/seller/postsellerAction'
import { getUserReducers } from '../store/actions/authenticationReducers/getUserReducers'
import { leftIcon } from '../components/all/svg'
import Loader from '../components/all/Loader/Loader'
import First from '../components/seller/First'
import Second from '../components/seller/Second'
import Third from '../components/seller/third'
import Fourth from '../components/seller/Fourth'

// Style
import style from '../styles/seller.module.scss'

const seller = ({
  postsellerAction,
  postsellerActionState,
  sellerForm,
  getUser,
  getUserReducers,
  postSeller,
}) => {
  const [loading, setLoading] = useState(false)
  const [step, setStep] = useState(1)
  const [name, setName] = useState('')

  useEffect(() => {
    getUserReducers()
    setName(getUser.name)
  }, [getUser.isLoggedIn])

  useEffect(() => {
    let darkMode = localStorage.getItem('darkmode')
    if (darkMode === 'enabled') {
      enableDarkMode()
    } else {
      disableDarkMode(false)
    }
  }, [])

  function enableDarkMode() {
    document.body.classList.add('dark')
    localStorage.setItem('darkmode', 'enabled')
  }

  function disableDarkMode() {
    document.body.classList.remove('dark')
    localStorage.setItem('darkmode', null)
  }

  useEffect(() => {
    if (postSeller.authError === true) {
      setLoading(false)
      alert('An Error Occured')
      setStep(1)
    } else if (postSeller.authError === null) {
      window.location.href = '/dashboard'
      setLoading(false)
    }
  }, [postSeller])

  const postFormData = () => {
    const {
      companyName,
      companyAbbr,
      comapnyLinkedin,
      companyFacebook,
      yourName,
      yourAge,
      yourLinkedin,
      yourFacebook,
      yourDescripiton,
      personalNumber,
      personalExp,
      personalAddress,
    } = sellerForm
    postsellerAction({
      companyName,
      companyAbbr,
      comapnyLinkedin,
      companyFacebook,
      yourName,
      yourAge,
      yourLinkedin,
      yourFacebook,
      yourDescripiton,
      personalNumber,
      personalExp,
      personalAddress,
    })
  }

  return (
    <>
      <Head>
        <title>Weirdo | Seller</title>
      </Head>
      <Loader loading={loading} />
      <div className={style.seller}>
        <div className={style.seller_head}>
          <Link href='/dashboard'>
            <div className={style.seller_back}>
              {leftIcon}
              <span>Go Back Home</span>
            </div>
          </Link>
          <Link href='/'>
            <div className={style.seller_logo}>Weirdo</div>
          </Link>
        </div>
        <div className='container'>
          <div className={style.seller_main}>
            <div className='col s12'>
              <div className={style.seller_main_form}>
                <SwitchStatement
                  step={step}
                  setStep={setStep}
                  postsellerAction={postsellerAction}
                  postsellerActionState={postsellerActionState}
                  sellerForm={sellerForm}
                  postFormData={postFormData}
                  name={name}
                  setLoading={setLoading}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const SwitchStatement = ({
  step,
  setStep,
  postsellerActionState,
  sellerForm,
  postFormData,
  name,
  setLoading,
}) => {
  switch (step) {
    case 1:
      return (
        <>
          <First
            setStep={setStep}
            postsellerActionState={postsellerActionState}
            sellerForm={sellerForm}
          />
        </>
      )
    case 2:
      return (
        <>
          <Second
            setStep={setStep}
            postsellerActionState={postsellerActionState}
            sellerForm={sellerForm}
            name={name}
          />
        </>
      )
    case 3:
      return (
        <>
          <Third
            setStep={setStep}
            postsellerActionState={postsellerActionState}
            sellerForm={sellerForm}
          />
        </>
      )
    case 4:
      return (
        <>
          <Fourth
            setStep={setStep}
            postFormData={postFormData}
            setLoading={setLoading}
          />
        </>
      )
  }
}

seller.getInitialProps = async ({ res, req }) => {
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
      const result = await response.json()
      if (result.roles === 'user') {
        return {}
      } else {
        res.writeHead(302, {
          Location: '/dashboard',
        })
        res.end()
      }
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
      const result = await response.json()
      if (result.roles === 'user') {
        return {}
      } else {
        Router.push('/dashboard')
      }
    } else {
      Router.push('/login')
      return {}
    }
  }
}

const mapStateToProps = ({ sellerForm, getUser, postSeller }) => ({
  sellerForm,
  getUser,
  postSeller,
})

const mapDispatchToProps = (dispatch) => ({
  postsellerAction: (data) => dispatch(postsellerAction(data)),
  postsellerActionState: (data) => dispatch(postsellerActionState(data)),
  getUserReducers: () => dispatch(getUserReducers()),
})

export default connect(mapStateToProps, mapDispatchToProps)(seller)
