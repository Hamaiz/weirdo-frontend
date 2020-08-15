import Head from 'next/head'

// Import
import Navbar from './Navbar'
import Footer from './Footer'

// Styles

const Layout = ({ children, keyword = 'weirdo, online, shopping' }) => {
  return (
    <>
      <Head>
        <meta
          name='description'
          content='Weirdo is a online shopping site which provides for you various different methods of payment.'
        />
        <meta name='keywords' content={keyword} />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
