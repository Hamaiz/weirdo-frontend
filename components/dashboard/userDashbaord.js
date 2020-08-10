import Link from 'next/link'
import Carousel from '@brainhubeu/react-carousel'
import MediaQuery from 'react-responsive'

const UserDashbaord = ({ style, rightIcon, leftIcon }) => {
  return (
    <>
      <div className='col s12 m12 l9 '>
        <MediaQuery maxWidth='991px'>
          <div className={style.dashboard_main_mobile_user}>
            <div className={style.dashboard_main_heading}>Whishlist</div>
            <Carousel
              arrows
              slidesPerPage={1}
              arrowLeft={
                <div className={style.dashboard_main_left}>{leftIcon}</div>
              }
              arrowLeftDisabled={
                <div className={style.dashboard_main_left_disable}></div>
              }
              arrowRightDisabled={
                <div className={style.dashboard_main_right_disable}></div>
              }
              arrowRight={
                <div className={style.dashboard_main_right}>{rightIcon}</div>
              }
              keepDirectionWhenDragging
              addArrowClickHandler
              className={style.dashboard_main_carousel}>
              <div className={style.dashboard_card}></div>
              <div className={style.dashboard_card}></div>
            </Carousel>
          </div>
          <div className={style.dashboard_main_mobile_user}>
            <div className={style.dashboard_main_heading}>Reviews</div>
            <Carousel
              arrows
              slidesPerPage={1}
              keepDirectionWhenDragging
              arrowLeft={
                <div className={style.dashboard_main_left}>{leftIcon}</div>
              }
              arrowLeftDisabled={
                <div className={style.dashboard_main_left_disable}></div>
              }
              arrowRightDisabled={
                <div className={style.dashboard_main_right_disable}></div>
              }
              arrowRight={
                <div className={style.dashboard_main_right}>{rightIcon}</div>
              }
              addArrowClickHandler
              className={style.dashboard_main_carousel}>
              <div className={style.dashboard_review}></div>
            </Carousel>
          </div>
          <div className={style.dashboard_main_mobile_user}>
            <div className={style.dashboard_main_heading}>Items Bought</div>
            <Carousel
              arrows
              slidesPerPage={1}
              keepDirectionWhenDragging
              arrowLeft={
                <div className={style.dashboard_main_left}>{leftIcon}</div>
              }
              arrowLeftDisabled={
                <div className={style.dashboard_main_left_disable}></div>
              }
              arrowRightDisabled={
                <div className={style.dashboard_main_right_disable}></div>
              }
              arrowRight={
                <div className={style.dashboard_main_right}>{rightIcon}</div>
              }
              addArrowClickHandler
              className={style.dashboard_main_carousel}>
              <div className={style.dashboard_card}></div>
            </Carousel>
          </div>
        </MediaQuery>
        <MediaQuery minWidth='991px'>
          <div className={style.dashboard_main_mobile_user}>
            <div className={style.dashboard_main_heading}>Whishlist</div>
            <Carousel
              arrows
              slidesPerPage={2.5}
              arrowLeft={
                <div className={style.dashboard_main_left}>{leftIcon}</div>
              }
              arrowLeftDisabled={
                <div className={style.dashboard_main_left_disable}></div>
              }
              arrowRightDisabled={
                <div className={style.dashboard_main_right_disable}></div>
              }
              arrowRight={
                <div className={style.dashboard_main_right}>{rightIcon}</div>
              }
              keepDirectionWhenDragging
              addArrowClickHandler
              className={style.dashboard_main_carousel}>
              <div className={style.dashboard_card}></div>
              <div className={style.dashboard_card}></div>
            </Carousel>
          </div>
          <div className={style.dashboard_main_mobile_user}>
            <div className={style.dashboard_main_heading}>Reviews</div>
            <Carousel
              arrows
              slidesPerPage={2.5}
              keepDirectionWhenDragging
              arrowLeft={
                <div className={style.dashboard_main_left}>{leftIcon}</div>
              }
              arrowLeftDisabled={
                <div className={style.dashboard_main_left_disable}></div>
              }
              arrowRightDisabled={
                <div className={style.dashboard_main_right_disable}></div>
              }
              arrowRight={
                <div className={style.dashboard_main_right}>{rightIcon}</div>
              }
              addArrowClickHandler
              className={style.dashboard_main_carousel}>
              <div className={style.dashboard_review}></div>
            </Carousel>
          </div>
          <div className={style.dashboard_main_mobile_user}>
            <div className={style.dashboard_main_heading}>Items Bought</div>
            <Carousel
              arrows
              slidesPerPage={2.5}
              keepDirectionWhenDragging
              arrowLeft={
                <div className={style.dashboard_main_left}>{leftIcon}</div>
              }
              arrowLeftDisabled={
                <div className={style.dashboard_main_left_disable}></div>
              }
              arrowRightDisabled={
                <div className={style.dashboard_main_right_disable}></div>
              }
              arrowRight={
                <div className={style.dashboard_main_right}>{rightIcon}</div>
              }
              addArrowClickHandler
              className={style.dashboard_main_carousel}>
              <div className={style.dashboard_card}></div>
            </Carousel>
          </div>
        </MediaQuery>
      </div>

      <div className='col s12'>
        <div className={style.dashboard_seller}>
          <div className={style.dashboard_seller_heading}>
            Want to become a seller?
          </div>
          <Link href='/seller'>
            <div className={style.dashboard_seller_btn}>Start Selling</div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default UserDashbaord
