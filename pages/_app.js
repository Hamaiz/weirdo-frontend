import { useEffect } from 'react'
import { Provider } from 'react-redux'
import { createWrapper } from 'next-redux-wrapper'
import store from '../store/store'

// import
if (typeof window !== 'undefined') {
  require('materialize-css')
}

// Styles
import '../styles/base.scss'
import '../styles/footer.scss'
import '../styles/Navbar.scss'
import 'materialize-css/dist/css/materialize.min.css'
import '@brainhubeu/react-carousel/lib/style.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    M.AutoInit()
  }, [])

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

const makestore = () => store
const wrapper = createWrapper(makestore)

export default wrapper.withRedux(MyApp)
