import { useEffect, useState } from 'react'
import Router from 'next/router'

// Style
import style from './Main.module.scss'

const Main = () => {
  const [search, setSearch] = useState('')
  useEffect(() => {
    M.Carousel.init(document.querySelectorAll('.carousel'), {
      fullWidth: true,
      indicators: true,
      height: 500,
    })
  }, [])
  const searchIcon = (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
      <path d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z' />
    </svg>
  )
  return (
    <div className={style.main}>
      <div className='carousel carousel-slider center'>
        <div className='carousel-fixed-item'>
          <div className={style.main_search}>
            <input
              type='text'
              className='browser-default'
              placeholder='Search...'
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={(e) =>
                e.key !== 'Enter' || !search
                  ? e.prepreventDefault
                  : Router.push(
                      `/result?search_query=${search
                        .trim()
                        .replace(/\s+/g, '+')}`
                    )
              }
            />
            <button
              onClick={(e) =>
                !search
                  ? e.prepreventDefault
                  : Router.push(`/result?search_query=${search}`)
              }>
              {searchIcon}
            </button>
          </div>
        </div>
        <div
          className='carousel-item  grey darken-4 white-text'
          href='#one!'></div>
        <div
          className='carousel-item grey darken-4 white-text'
          href='#two!'></div>
        <div
          className='carousel-item grey darken-4 white-text'
          href='#three!'></div>
        <div
          className='carousel-item grey darken-4 white-text'
          href='#four!'></div>
      </div>

      <div className='container'>
        <div className={style.main_categories}>
          <div className={style.main_heading}>Categories</div>
          <div className={style.main_categories_wrapper}>
            <span className={style.main_categories_each}>
              <div>Electronics</div>
            </span>
            <span className={style.main_categories_each}>
              <div>Beauty</div>
            </span>
            <span className={style.main_categories_each}>
              <div>Toys</div>
            </span>
            <span className={style.main_categories_each}>
              <div>LifeStyle</div>
            </span>
            <span className={style.main_categories_each}>
              <div>Fashion</div>
            </span>
            <span className={style.main_categories_each}>
              <div>Sports</div>
            </span>
            <span className={style.main_categories_each}>
              <div>Cars</div>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
