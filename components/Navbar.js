import { useEffect, useState } from 'react'
import Link from 'next/link'
import MediaQuery from 'react-responsive'
import { connect } from 'react-redux'

// import
import { getUserReducers } from '../store/actions/authenticationReducers/getUserReducers'
import Loader from './all/Loader/Loader'
import {
  settingIcon,
  logoutIcon,
  modeIcon,
  hamburgerIcon,
} from '../components/all/svg'

const Navbar = ({
  getUserReducers,
  isLoggedIn,
  getUser,
  smallHeight = false,
}) => {
  const [loading, setLoading] = useState(false)
  const [profile, setProfile] = useState(false)
  const [checked, setChecked] = useState(false)
  const cartIcon = (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='30px'>
      <path d='M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z' />
    </svg>
  )

  useEffect(() => {
    M.Sidenav.init(document.querySelectorAll('.sidenav'))
  }, [])

  useEffect(() => {
    getUserReducers()
  }, [isLoggedIn])

  useEffect(() => {
    let darkMode = localStorage.getItem('darkmode')
    if (darkMode === 'enabled') {
      setChecked(true)
    } else {
      disableDarkMode(false)
    }
    if (smallHeight) {
      document.querySelector('.header').style.height = '80px'
    }
  }, [])

  useEffect(() => {
    if (checked) {
      enableDarkMode()
    } else {
      disableDarkMode()
    }
  }, [checked])

  function enableDarkMode() {
    document.body.classList.add('dark')
    localStorage.setItem('darkmode', 'enabled')
  }

  function disableDarkMode() {
    document.body.classList.remove('dark')
    localStorage.setItem('darkmode', null)
  }

  useEffect(() => {
    M.Modal.init(document.querySelectorAll('.modal'))

    window.onscroll = getScrollPosition
    function getScrollPosition() {
      const scrollObject = {
        y: window.pageYOffset,
      }
      const space = document.getElementById('space')

      const mainMenu = document.querySelector('.header')
      if (mainMenu) {
        if (scrollObject.y < 100) {
          mainMenu.classList.remove('menu_fixed')
          space.classList.remove('header_space')
        } else {
          space.classList.add('header_space')
          mainMenu.classList.add('menu_fixed')
        }
      }
    }
  }, [])

  const handleSubmit = async () => {
    try {
      setLoading(true)
      disableDarkMode()
      const response = await fetch(`http://localhost:5001/api/logout`, {
        method: 'delete',
        credentials: 'include',
      })

      if (response.status === 200) {
        setLoading(false)
        window.location.href = '/login'
      }
    } catch (err) {
      window.location.reload()
    }
  }

  return (
    <>
      <Loader loading={loading} />
      <div className='' id='space'></div>
      <div className='header '>
        <Link href='/'>
          <a className='header_logo'>Weirdo</a>
        </Link>
        <div className='header_nav'>
          <Link href='/'>
            <a className='header_nav_color'>Home</a>
          </Link>
          <Link href='/about'>
            <a className='header_nav_color'>About Us</a>
          </Link>

          {!isLoggedIn ? (
            <>
              <Link href='/login'>
                <a className='header_nav_login'>Login</a>
              </Link>
              <Link href='/signup'>
                <a className='header_nav_sign'>Signup</a>
              </Link>
            </>
          ) : (
            <>
              <a
                className='header_nav_color'
                onClick={() => setProfile((prvState) => !prvState)}>
                Profile
              </a>
              {profile ? (
                <div className='header_profile'>
                  <Link href='/dashboard'>
                    <div className='header_profile_pic'>
                      <img src={getUser.image} alt='' />
                      <div className='header_profile_pic_name'>
                        {getUser.name}
                      </div>
                    </div>
                  </Link>
                  <hr />
                  <Link href='/setting'>
                    <div className='header_profile_setting'>
                      <div className='header_profile_setting_icon'>
                        {settingIcon}
                      </div>
                      Setting
                    </div>
                  </Link>
                  <div
                    className='header_profile_setting'
                    onClick={() => {
                      setChecked((prvState) => !prvState)
                    }}>
                    <div className='header_profile_setting_icon'>
                      {modeIcon}
                    </div>
                    <div className='switch header_profile_setting_d'>
                      <label>
                        Off
                        {/* eslint-disable-next-line */}
                        <input type='checkbox' checked={checked} />
                        <span className='lever'></span>
                        On
                      </label>
                    </div>
                  </div>
                  <button className='logout modal-trigger' data-target='logout'>
                    <div className='header_profile_setting_icon'>
                      {logoutIcon}
                    </div>
                    Logout
                  </button>
                </div>
              ) : null}
            </>
          )}
        </div>

        {getUser.roles !== 'seller' ? (
          <Link href='/cart'>
            <a className='header_cart'>
              {cartIcon}
              <div className='header_cart_number'>2</div>
            </a>
          </Link>
        ) : null}

        <MediaQuery maxWidth='991px'>
          <a
            className='header_burger sidenav-trigger'
            rel='nofollow'
            href='#'
            data-target='slide-out'
            id='hamburger'>
            {hamburgerIcon}
          </a>
        </MediaQuery>
      </div>

      <div id='logout' className='modal'>
        <div className='modal-content center'>
          <h4>Are you sure you want to logout?</h4>
        </div>
        <div className='modal-footer'>
          <button className='modal-close btn grey lighten-2 black-text mr-1 waves-effect waves-light'>
            No
          </button>
          <button className='modal-close btn black mr-1' onClick={handleSubmit}>
            Yes
          </button>
        </div>
      </div>

      <ul id='slide-out' className='sidenav'>
        <li>
          <div className='sidenav-close sidenav_close' id='closeNav'>
            &times;
          </div>
        </li>
        <li>
          <Link href='/'>
            <a className='sidenav_color'>Home</a>
          </Link>
        </li>
        <li>
          <Link href='/about'>
            <a className='sidenav_color'>About Us</a>
          </Link>
        </li>
        {!isLoggedIn ? (
          <>
            <li>
              <Link href='/login'>
                <a className='sidenav_color'>Login</a>
              </Link>
            </li>
            <li>
              <Link href='/signup'>
                <a className='sidenav_color'>Signup</a>
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link href='/dashboard'>
                <a className='sidenav_color'>Profile</a>
              </Link>
            </li>
            <li>
              <Link href='/setting'>
                <a className='sidenav_color'>Setting</a>
              </Link>
            </li>
            <li>
              <div
                className='header_profile_setting sidenav_color sidenav_color_night'
                onClick={() => {
                  setChecked((prvState) => !prvState)
                }}>
                <div className='header_profile_setting_icon'>{modeIcon}</div>
                <div className='switch header_profile_setting_d'>
                  <label>
                    Off
                    {/* eslint-disable-next-line */}
                    <input type='checkbox' checked={checked} />
                    <span className='lever'></span>
                    On
                  </label>
                </div>
              </div>
            </li>
            <li>
              <button
                className='logout modal-trigger sidenav_color sidenav_color_night'
                data-target='logout'>
                <div className='header_profile_setting_icon'>{logoutIcon}</div>
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </>
  )
}

const mapStateToProps = ({ getUser }) => ({
  authError: getUser.authError,
  getUser,
  isLoggedIn: getUser.isLoggedIn,
})

const mapDispatchToProps = (dispatch) => ({
  getUserReducers: () => dispatch(getUserReducers()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
