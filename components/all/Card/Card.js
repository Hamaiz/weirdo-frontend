// Imoprt
import { facebookIcon, twitterIcon, cartIcon, heartIcon } from '../svg'

// Style
import style from './Card.module.scss'

const Card = () => {
  const twiiterShare = (e) => {
    e.preventDefault()
    const url = e.target.getAttribute('data-url')
    const heading = e.target.getAttribute('data-heading')
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
    const url = 'https://www.weirdo.com/product/ajazz-ak33'

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
        <a href='/' className={style.other}>
          other
        </a>
        {/* <div class={style.containers}></div> */}
      </div>
    </>
  )
}

export default Card
