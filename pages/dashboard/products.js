import { useEffect, useState } from 'react'
import Head from 'next/head'
import { connect } from 'react-redux'
import Link from 'next/link'

// Import
import { searchIcon } from '../../components/all/svg'
import Layout from '../../components/Layout'
import { getAllProduct } from '../../store/actions/seller/getProductsAction'

// Style
import style from '../../styles/products.module.scss'
import { Router } from 'next/router'

const products = ({ getProductSeller, getAllProduct, getUser }) => {
  const [allProduct, setAllProduct] = useState([])

  useEffect(() => {
    M.AutoInit()
    getAllProduct()
    setAllProduct(getProductSeller.all)
  }, [getUser])

  const searchItems = (e) => {
    if (e.target.value) {
      const getItem = allProduct.filter((item) => {
        return item.title.match(new RegExp(e.target.value, 'i'))
      })
      setAllProduct(getItem)
    } else {
      setAllProduct(getProductSeller.all)
    }
  }

  const sortDate = (e) => {
    if (e.target.value === '2') {
      setAllProduct((prev) => prev.slice().reverse())
    }
    if (e.target.value === '1') {
      setAllProduct((prev) => prev.slice().reverse())
    }
  }

  return (
    <>
      <Head>
        <title>Weirdo | Products</title>
      </Head>
      <Layout>
        <div className={style.products}>
          <div className='container'>
            <div className={style.products_search}>
              <div className='row'>
                <div className='col m7 s12'>
                  <div className={style.products_search_input}>
                    <input
                      type='text'
                      className='browser-default'
                      placeholder='Search...'
                      onChange={searchItems}
                    />
                    <button>{searchIcon}</button>
                  </div>
                </div>
                <div className='col m4 s12 offset-m1'>
                  <div className={style.products_search_select}>
                    <div className='row'>
                      <div className='input-field col s12'>
                        <select onChange={sortDate}>
                          <option value='1'>Recently Added</option>
                          <option value='2'>Oldly Added</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={style.products_container}>
            <div className='container'>
              <div className='row'>
                {/* {console.log(allProduct)} */}
                {allProduct.length > 0 ? (
                  allProduct.map((e, i) => (
                    <div className='col l6 m6 s12 xl3' key={i}>
                      <div className={style.card}>
                        <div className={style.card_image}>
                          <img src={e.image} alt='' loading='lazy' />
                        </div>
                        <Link href={'/p/' + e.slug}>
                          <div className={style.card_title} title={e.title}>
                            {e.title.length > 30
                              ? e.title.slice(0, 30) + '...'
                              : e.title}
                          </div>
                        </Link>
                        <div className={style.card_price}>${e.price}</div>
                        <div className={style.card_rating}>
                          <div
                            class={style.stars}
                            style={{ '--rating': `${3}` }}></div>
                        </div>
                        <Link href={'/dashboard/edit-product/' + e.slug}>
                          <div className={style.card_btn}>Edit</div>
                        </Link>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className='center'>
                    <div className={style.dashboard_main3_no}>
                      No products Found
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

products.getInitialProps = async ({ res, req }) => {
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

const mapStateToProps = ({ getProductSeller, getUser }) => ({
  getUser,
  getProductSeller,
})

const mapDispatchToProps = (dispatch) => ({
  getAllProduct: () => dispatch(getAllProduct()),
})

export default connect(mapStateToProps, mapDispatchToProps)(products)
