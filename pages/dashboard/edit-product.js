import { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { connect } from 'react-redux'
import Router from 'next/router'

// import

// Import
import { leftIcon } from '../../components/all/svg'
import Loader from '../../components/all/Loader/Loader'
import First from '../../components/edit/First'
import Second from '../../components/edit/Second'
import { getUserReducers } from '../../store/actions/authenticationReducers/getUserReducers'
import { postEditProductAction } from '../../store/actions/seller/postProductAction'
import { getAllProduct } from '../../store/actions/seller/getProductsAction'

// Style
import style from '../../styles/add.module.scss'

const EditProduct = ({
  getUserReducers,
  getUser,
  postEditProductAction,
  postProduct,
  slug,
  getProductSeller,
  getAllProduct,
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
  const [alreadySrc, setAlreadySrc] = useState('')
  const [alreadyImages, setAlreadyImages] = useState([])
  const [slugs, setSlugs] = useState('')

  useEffect(() => {
    getUserReducers()
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
    getAllProduct()
    getProductSeller.all.find((item) => {
      if (item.slug === slug) {
        const {
          title,
          price,
          dimensions,
          available,
          weight,
          description,
          image,
          gallery,
        } = item
        setSlugs(item.slug)
        setTitle(title)
        setPrice(price)
        setDimensions(dimensions)
        setAvailable(available)
        setWeight(weight)
        setDescription(description)
        setAlreadySrc(image)
        setAlreadyImages(gallery)
      }
    })
  }, [getProductSeller.isDone])

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
    alreadySrc,
    alreadyImages,
  }

  const postFormData = () => {
    setLoading(true)
    postEditProductAction({
      title,
      price,
      dimensions,
      available,
      weight,
      description,
      file,
      images,
      slugs,
    })
  }

  return (
    <>
      <Head>
        <title>Weirdo | Edit Product</title>
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

EditProduct.getInitialProps = async ({ res, req, query }) => {
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
        return { slug: query.slug }
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
      if (result.roles === 'seller') {
        return { slug: query.slug }
      } else {
        Router.push('/dashboard')
      }
    } else {
      Router.push('/login')
      return {}
    }
  }
}

const mapStateToProps = ({ getUser, postProduct, getProductSeller }) => ({
  getUser,
  postProduct,
  getProductSeller,
})

const mapDispatchToProps = (dispatch) => ({
  getUserReducers: () => dispatch(getUserReducers()),
  postEditProductAction: (data) => dispatch(postEditProductAction(data)),
  getAllProduct: () => dispatch(getAllProduct()),
})

export default connect(mapStateToProps, mapDispatchToProps)(EditProduct)
