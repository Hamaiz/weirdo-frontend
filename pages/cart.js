import { useEffect } from 'react'
import Head from 'next/head'
import Router from 'next/router'

// import
import Layout from '../components/Layout'
import {
  deleteIcon,
  heartsIcon,
  plusIcon,
  minusIcon,
} from '../components/all/svg'

// style
import style from '../styles/cart.module.scss'

const cart = () => {
  useEffect(() => {
    if (document.getElementById('hamburger')) {
      document.getElementById('hamburger').addEventListener('click', () => {
        document.getElementById('cartOver').style.overflowX = 'hidden'
      })
      document.getElementById('closeNav').addEventListener('click', () => {
        document.getElementById('cartOver').style.overflowX = 'auto'
      })
    }
  }, [])
  return (
    <>
      <Head>
        <title>Weirdo | Cart</title>
      </Head>
      <Layout>
        <div className={style.cart}>
          <div className='container-fluid'>
            <div className={style.cart_heading}>Cart</div>
            <div className='row'>
              <div className='col m12 s12 l7'>
                <div className={style.cart_main}>
                  <div
                    style={{ overflowX: 'auto', overflowY: 'hidden' }}
                    id='cartOver'>
                    <table>
                      <tr className={style.cart_main_item}>
                        <td>
                          <div className={style.cart_main_checkbox}>
                            <input
                              type='checkbox'
                              className={style.cart_main_checkbox_c}
                            />
                          </div>
                        </td>
                        <td>
                          <div className={style.cart_main_picture}>
                            <img
                              style={{ width: '100px' }}
                              src='https://i.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68'
                              alt=''
                            />
                          </div>
                        </td>
                        <td>
                          <div className={style.cart_main_title}>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit
                          </div>
                        </td>
                        <td>
                          <div className={style.cart_main_price}>$300</div>
                        </td>
                        <td>
                          <div className={style.cart_main_tools}>
                            <div className={style.cart_main_quantity}>
                              <span className={style.cart_main_quantity_m}>
                                {minusIcon}
                              </span>
                              <span className={style.cart_main_quantity_qty}>
                                2
                              </span>
                              <span className={style.cart_main_quantity_p}>
                                {plusIcon}
                              </span>
                            </div>
                            <div className={style.cart_main_icon}>
                              <span className={style.cart_main_icon_h}>
                                {heartsIcon}
                              </span>
                              <span className={style.cart_main_icon_d}>
                                {deleteIcon}
                              </span>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
              <div className='col s12 m12 l4 offset-l1'>
                <div className={style.cart_checkout}>
                  <div className={style.cart_checkout_summary}>
                    <div className={style.cart_checkout_summary_heading}>
                      Order Summary
                    </div>
                    <div className={style.cart_checkout_summary_sub}>
                      <div className={style.cart_checkout_summary_sub_h}>
                        SubTotal
                      </div>
                      <div className={style.cart_checkout_summary_sub_p}>
                        $2000
                      </div>
                    </div>
                    <div className={style.cart_checkout_summary_sub}>
                      <div className={style.cart_checkout_summary_sub_h}>
                        SubTotal
                      </div>
                      <div className={style.cart_checkout_summary_sub_p}>
                        $2000
                      </div>
                    </div>
                    <div className={style.cart_checkout_summary_voucher}>
                      <input
                        type='text'
                        className='browser-default'
                        placeholder='Enter Voucher Code'
                      />
                      <div className={style.cart_checkout_summary_voucher_btn}>
                        Apply
                      </div>
                    </div>
                    <div className={style.cart_checkout_summary_total}>
                      <div className={style.cart_checkout_summary_total_h}>
                        Total
                      </div>
                      <div className={style.cart_checkout_summary_total_p}>
                        $2000
                      </div>
                    </div>
                    <div className={style.cart_checkout_summary_btn}>
                      Proceed To Checkout
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export const getServerSideProps = async ({ res, req }) => {
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
        return {
          props: {},
        }
      } else {
        res.writeHead(302, {
          Location: '/dashboard',
        })
        res.end()
      }
    } else {
      return {
        props: {},
      }
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
        return {
          props: {},
        }
      } else {
        Router.push('/dashboard')
      }
    } else {
      return {
        props: {},
      }
    }
  }
}

export default cart
