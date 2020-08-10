// import { useEffect, useState } from 'react'
import Link from 'next/link'

const SellerDashboard = ({ style, latest }) => {
  const data = ['a', 'b', 'c']

  return (
    <>
      <div className='col s12 m12 l9 '>
        <div className={style.dashboard_main}>
          <div className={style.dashboard_main_heading}>Navigation</div>
          <div className='center'>
            <Link href='/dashboard/add-product'>
              <div className={style.dashboard_main_btn}>Add Product</div>
            </Link>
            <Link href='/dashboard/clients'>
              <div className={style.dashboard_main_btn}>Clients</div>
            </Link>
            <Link href='/dashboard/products'>
              <div className={style.dashboard_main_btn}>All Products</div>
            </Link>
            <Link href='/dashboard/message/53981204'>
              <div className={style.dashboard_main_btn}>Messages</div>
            </Link>
          </div>
        </div>
        <div className={style.dashboard_main2}>
          <div className={style.dashboard_main_heading}>
            Recently Added Products
          </div>
        </div>
        <div className={style.dashboard_main3}>
          <div className='row'>
            {latest.length > 0 ? (
              latest.map((e, i) => (
                <div className='col l6 m6 s12 xl4' key={i}>
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
        <div className={style.dashboard_main2}>
          <div className={style.dashboard_main_heading}>Recent Clients</div>
        </div>
        <div className={style.dashboard_main3}>
          <div className='row'>
            {data.length > 1 ? (
              data.map((e, i) => (
                <div className='col l6 m6 s12 xl4' key={i}>
                  <div className={style.card}>
                    <a href='/' className={style.other}>
                      other
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <div className='center'>
                <div className={style.dashboard_main3_no}>No Clients Found</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default SellerDashboard
