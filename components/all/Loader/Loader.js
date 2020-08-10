import { useEffect } from 'react'

// Style
import style from './Loader.module.scss'

const Loader = ({ loading }) => {
  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : ''
  }, [loading])

  if (loading) {
    return (
      <div className={style.loader}>
        <div className={style.loader_overlay}></div>
        <div className={style.loader_logo}>
          <div className={style.loader_logo_border}></div>
          <div className={style.loader_logo_name}>Weirdo</div>
        </div>
      </div>
    )
  } else {
    return <></>
  }
}

export default Loader
