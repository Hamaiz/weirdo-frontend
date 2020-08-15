import Head from 'next/head'
import { connect } from 'react-redux'
import Carousel from '@brainhubeu/react-carousel'
import Link from 'next/link'
import { useEffect, useState } from 'react'

// Imports
import Layout from '../../components/Layout'
import {
  rightIcon,
  leftIcon,
  plusIcon,
  minusIcon,
  heartsIcon,
} from '../../components/all/svg'

// Styles
import style from '../../styles/p.module.scss'
import styles from '../../styles/cart.module.scss'

const p = ({ d, getUser }) => {
  useEffect(() => {
    console.log(getUser)
  }, [getUser.isLoggedIn])

  return (
    <>
      <Head>
        <title>Ajazz | Weirdo</title>
      </Head>
      <Layout keyword={d.product.keywords.join(', ')}>
        <div className={style.p}>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col l9 s12'>
                <div className={style.p_item}>
                  <div className='row'>
                    <div className='col m5 s12'>
                      <div className={style.p_item_img}>
                        <img
                          src={d.product.image}
                          alt={d.product.slug}
                          loading='lazy'
                        />
                      </div>
                    </div>
                    <div className='col m7 s12'>
                      <div className={style.p_item_title}>
                        {d.product.title}
                      </div>
                      <div className={style.p_item_cart}>
                        <div className={style.p_item_price}>
                          ${d.product.price}
                        </div>
                        <div className={style.p_item_heart}>{heartsIcon}</div>
                      </div>
                      <div className={style.p_item_cart}>
                        <div className={style.p_item_cart_plus}>
                          <div className={styles.cart_main_quantity}>
                            <span className={styles.cart_main_quantity_m}>
                              {minusIcon}
                            </span>
                            <span className={styles.cart_main_quantity_qty}>
                              2
                            </span>
                            <span className={styles.cart_main_quantity_p}>
                              {plusIcon}
                            </span>
                          </div>
                        </div>
                        <div className={style.p_item_cart_add}>Add To Cart</div>
                      </div>
                    </div>
                  </div>
                  <div className={style.p_item_desc}>
                    <div className={style.p_item_desc_heading}>
                      Description:
                    </div>
                    <div className={style.p_item_desc_d}>
                      {d.product.description}
                    </div>
                  </div>

                  <div className={style.p_item_desc}>
                    <div className={style.p_item_desc_heading}>Images:</div>
                    <div className={style.p_item_images}>
                      <Carousel
                        arrows
                        slidesPerPage={1}
                        arrowLeft={
                          <div className={style.p_item_images_left}>
                            {leftIcon}
                          </div>
                        }
                        arrowLeftDisabled={
                          <div
                            className={style.p_item_images_left_disable}></div>
                        }
                        arrowRightDisabled={
                          <div
                            className={style.p_item_images_right_disable}></div>
                        }
                        arrowRight={
                          <div className={style.p_item_images_right}>
                            {rightIcon}
                          </div>
                        }
                        className={style.p_item_carousel}
                        keepDirectionWhenDragging
                        addArrowClickHandler>
                        {d.product.gallery.map((g, i) => (
                          <img
                            src={g}
                            alt={d.title}
                            key={i}
                            className={style.p_item_images_img}
                            loading='lazy'
                          />
                        ))}
                      </Carousel>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col l3 s12'>
                <div className={style.p_seller}>
                  <div className={style.p_seller_name}>{d.seller.company}</div>
                  <div className={style.p_seller_country}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='32'
                      height='32'
                      viewBox='0 0 24 24'>
                      <path d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z' />
                    </svg>
                    {d.seller.location.country}
                  </div>
                  {!getUser.isLoggedIn ? (
                    getUser.roles === 'seller' ? (
                      <></>
                    ) : (
                      <Link href='/login'>
                        <div className={style.p_seller_contact}>Login</div>
                      </Link>
                    )
                  ) : (
                    <Link
                      href={
                        '/m?user=' + getUser.id + '&seller=' + d.seller.user
                      }>
                      <div className={style.p_seller_contact}>Conatact</div>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export async function getServerSideProps({ query, res, req }) {
  const { slug } = query

  if (!slug) {
    res.writeHead(301, {
      Location: '/',
    })
    res.end()
  } else {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/get-single-item/${slug}`,
      {
        headers: new Headers({
          'weirdo-item-specific-product': 'weirdo-item-specific-product',
        }),
        cookie: req.headers.cookie,
      }
    )
    const d = await response.json()

    return {
      props: {
        d,
      },
    }
  }
}

const mapStateToProps = ({ getResultItems, getUser }) => ({
  getResultItems,
  getUser,
})

const mapDispatchToProps = (dispatch) => ({
  getResultItemsAction: (data) => dispatch(getResultItemsAction(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(p)
