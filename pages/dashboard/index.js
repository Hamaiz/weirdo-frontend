import { useEffect, useState } from 'react'
import Head from 'next/head'
import { connect } from 'react-redux'
import Router from 'next/router'

// import
import UserDashbaord from '../../components/dashboard/userDashbaord'
import SellerDashboard from '../../components/dashboard/SellerDashboard'
import Layout from '../../components/Layout'
import {
  rightIcon,
  leftIcon,
  cameraIcon,
  facebookIconDash,
  linkedInDash,
} from '../../components/all/svg'
import { getAllProduct } from '../../store/actions/seller/getProductsAction'
import Loader from '../../components/all/Loader/Loader'
import Dashboard from '../../components/dashboard/Dashboard'

// style
import style from '../../styles/dashboard.module.scss'

const dashboard = ({ getUser, getAllProduct, getProductSeller }) => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (getUser.roles === 'seller') {
      getAllProduct()
    }
  }, [getUser])

  useEffect(() => {
    M.Modal.init(document.querySelectorAll('.modal'))
  }, [])

  return (
    <>
      <Head>
        <title>Weirdo | Dashboard</title>
      </Head>
      <Loader loading={loading} />
      <Layout>
        <div className={style.dashboard}>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col s12 m12 l3'>
                <div className={style.marginTop}></div>
                <div className={style.dashboard_sidebar}>
                  <div className={style.dashboard_sidebar_img}>
                    <img src={getUser.image} alt='' loading='lazy' />
                    <div className={style.dashboard_sidebar_img_btn}>
                      <button data-target='modalimg' className='modal-trigger'>
                        <div>{cameraIcon}</div>
                      </button>
                    </div>
                  </div>
                  <div className={style.dashboard_sidebar_name}>
                    {getUser.company}
                  </div>
                  <div className={style.dashboard_sidebar_location}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='32'
                      height='32'
                      viewBox='0 0 24 24'>
                      <path d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z' />
                    </svg>
                    <span>{getUser.location}</span>
                  </div>
                </div>
                {getUser.roles === 'seller' ? (
                  <>
                    <div className={style.dashboard_sidebar}>
                      <div className={style.dashboard_sidebar_desc}>
                        <h4>Description</h4>
                        {getUser.yourDescription}
                      </div>
                    </div>
                    <div className={style.dashboard_sidebar}>
                      <div className={style.dashboard_sidebar_desc}>
                        <h4 className='center'>Social Media</h4>
                        <div className={style.dashboard_sidebar_desc_social}>
                          {getUser.companiesLinkedin ? (
                            <a href={getUser.companiesLinkedin}>
                              {linkedInDash}
                            </a>
                          ) : null}
                          {getUser.companiesLinkedin ? (
                            <a href={getUser.companiesFacebook}>
                              {facebookIconDash}
                            </a>
                          ) : null}
                        </div>
                      </div>
                    </div>
                    <div className={style.dashboard_sidebar}>
                      <div className={style.dashboard_sidebar_desc}>
                        <h4 className='center'>{getUser.name}</h4>
                        <div className={style.dashboard_sidebar_desc_social}>
                          {getUser.yourLinkedin ? (
                            <a href={getUser.yourLinkedin}>{linkedInDash}</a>
                          ) : null}
                          {getUser.yourLinkedin ? (
                            <a href={getUser.yourFacebook}>
                              {facebookIconDash}
                            </a>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </>
                ) : null}
              </div>
              <SwitchSeller
                style={style}
                leftIcon={leftIcon}
                getUser={getUser}
                rightIcon={rightIcon}
                latest={getProductSeller.latest}
              />
            </div>
          </div>
        </div>
        <Dashboard setLoading={setLoading} />
      </Layout>
    </>
  )
}

const SwitchSeller = ({ getUser, style, leftIcon, rightIcon, latest }) => {
  switch (getUser.roles) {
    case 'user':
      return (
        <UserDashbaord
          style={style}
          leftIcon={leftIcon}
          rightIcon={rightIcon}
        />
      )

    case 'seller':
      return <SellerDashboard style={style} latest={latest} />

    default:
      return (
        <div className={style.loader}>
          <div className='preloader-wrapper active'>
            <div className='spinner-layer'>
              <div className='circle-clipper left'>
                <div className='circle'></div>
              </div>
              <div className='gap-patch'>
                <div className='circle'></div>
              </div>
              <div className='circle-clipper right'>
                <div className='circle'></div>
              </div>
            </div>
          </div>
        </div>
      )
  }
}

dashboard.getInitialProps = async ({ res, req }) => {
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
    console.log(response)
    if (response.status === 200) {
      return {}
    } else {
      Router.push('/login')
      return {}
    }
  }
}

const mapStateToProps = ({ getUser, getProductSeller }) => ({
  getUser,
  getProductSeller,
})

const mapDispatchToProps = (dispatch) => ({
  getAllProduct: () => dispatch(getAllProduct()),
})

export default connect(mapStateToProps, mapDispatchToProps)(dashboard)
