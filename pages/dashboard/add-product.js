import { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { connect } from 'react-redux'
import Router from 'next/router'

// import

// Import
import { leftIcon } from '../../components/all/svg'
import Loader from '../../components/all/Loader/Loader'
import First from '../../components/add/First'
import Second from '../../components/add/Second'
import { getUserReducers } from '../../store/actions/authenticationReducers/getUserReducers'
import { postProductAction } from '../../store/actions/seller/postProductAction'

// Style
import style from '../../styles/add.module.scss'

const AddProduct = ({
  getUserReducers,
  getUser,
  postProductAction,
  postProduct,
}) => {
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [dimensions, setDimensions] = useState('')
  const [available, setAvailable] = useState(true)
  const [weight, setWeight] = useState('')
  const [description, setDescription] = useState('')
  const [file, setFile] = useState('')
  const [fileSrc, setFileSrc] = useState('')
  const [images, setImages] = useState([])
  const [imagesSrc, setImagesSrc] = useState([])

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
    getUserReducers()
  }, [getUser.isLoggedIn])

  useEffect(() => {
    if (postProduct.error === true) {
      setLoading(false)
      alert('An Error Occured')
      setStep(1)
    } else if (postProduct.error === null) {
      window.location.href = '/dashboard'
      setLoading(false)
    }
  }, [postProduct])

  const setState = {
    setTitle,
    setPrice,
    setDimensions,
    setAvailable,
    setWeight,
    setDescription,
    setFile,
    setImages,
    setFileSrc,
    setImagesSrc,
  }
  const state = {
    title,
    price,
    dimensions,
    available,
    weight,
    description,
    file,
    images,
    fileSrc,
    imagesSrc,
  }

  const postFormData = () => {
    setLoading(true)
    postProductAction({
      title,
      price,
      dimensions,
      available,
      weight,
      description,
      file,
      images,
    })
  }

  return (
    <>
      <Head>
        <title>Weirdo | Add Product</title>
      </Head>
      <Loader loading={loading} />
      <div className={style.add}>
        <div className={style.add_head}>
          <Link href='/dashboard'>
            <div className={style.add_back}>
              {leftIcon}
              <span>Go Back Home</span>
            </div>
          </Link>
          <Link href='/'>
            <div className={style.add_logo}>Weirdo</div>
          </Link>
        </div>
        <div className='container'>
          <SwitchStatement
            step={step}
            setStep={setStep}
            style={style}
            setState={setState}
            state={state}
            postFormData={postFormData}
          />
        </div>
      </div>
    </>
  )
}

const SwitchStatement = ({
  style,
  step,
  setStep,
  setState,
  state,
  postFormData,
}) => {
  switch (step) {
    case 1:
      return (
        <First
          style={style}
          setStep={setStep}
          setState={setState}
          state={state}
        />
      )
    case 2:
      return (
        <Second
          style={style}
          setStep={setStep}
          setState={setState}
          state={state}
          postFormData={postFormData}
        />
      )
  }
}

AddProduct.getInitialProps = async ({ res, req }) => {
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
      if (result.roles === 'seller') {
        return {}
      } else {
        res.writeHead(302, {
          Location: '/dashboard',
        })
        res.end()
      }
    } else {
      res.writeHead(302, {
        Location: '/dashboard',
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
      if (result.roles === 'seller') {
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

const mapStateToProps = ({ getUser, postProduct }) => ({
  getUser,
  postProduct,
})

const mapDispatchToProps = (dispatch) => ({
  getUserReducers: () => dispatch(getUserReducers()),
  postProductAction: (data) => dispatch(postProductAction(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct)
