// Imoprt
import { facebookIcon, twitterIcon, cartIcon, heartIcon } from '../svg'
import Link from 'next/link'

// Style
import style from './Card.module.scss'

const Card = ({ d }) => {
  const twiiterShare = (e) => {
    e.preventDefault()
    const url =
      window.hostname === 'localhost' ? 'http://localhost/p/' + p.slug : ''
    const heading = d.title
    const twitterWindow = window.open(
      `https://twitter.com/share?text=${heading}&url=${url}&hashtags=weirdo`
    )
    if (twitterWindow.focus) {
      twitterWindow.focus()
    }
    return false
  }

  const facebookShare = (e) => {
    e.preventDefault()
    const url =
      window.hostname === 'localhost' ? 'http://localhost/p/' + p.slug : ''

    const facebookWindow = window.open(
      `https://www.facebook.com/sharer/sharer.php?url=${url}`
    )

    if (facebookWindow.focus) {
      facebookWindow.focus()
    }
    return false
  }

  return (
    <>
      <div className={style.card}>
        <div className={style.card_desc}>
          <div className={style.multi_button}>
            <button
              title='Share on Twitter'
              data-url='https://www.weirdo.com/product/ajazz-ak33'
              data-heading='Ajazz ak33'
              onClick={twiiterShare}>
              {twitterIcon}
            </button>
            <button title='Share on Facebook' onClick={facebookShare}>
              {facebookIcon}
            </button>
            <button title='Add to cart'>{cartIcon}</button>
            <button title='Add to whishlist'>{heartIcon}</button>
          </div>
        </div>
        <div className={style.containers}>
          <img src={d.image} alt={d.slug} loading='lazy' />
          <Link href={'/p/[slug]'} as={'/p/' + d.slug}>
            <div className={style.card_title + ' ' + 'center'} title={d.title}>
              {d.title.length > 30 ? d.title.slice(0, 30) + '...' : d.title}
            </div>
          </Link>
          <div className={style.card_price}>${d.price}</div>
          <div className={style.card_rating}>
            <div
              className={style.card_stars}
              style={{ '--rating': `${3}` }}></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
