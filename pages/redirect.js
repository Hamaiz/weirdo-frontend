import Head from 'next/head'
import { useEffect } from 'react'

const result = ({ url }) => {
  useEffect(() => {
    window.location.replace(url)
  }, [])

  return (
    <>
      <Head>
        <title>Redirect | Weirdo</title>
      </Head>
      <div className='dflex'>
        <div class='preloader-wrapper big active'>
          <div class='spinner-layer spinner-blue-only'>
            <div class='circle-clipper left'>
              <div class='circle'></div>
            </div>
            <div class='gap-patch'>
              <div class='circle'></div>
            </div>
            <div class='circle-clipper right'>
              <div class='circle'></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

result.getInitialProps = async ({ query, res }) => {
  const { url } = query
  if (!url) {
    res.writeHead(301, {
      Location: '/',
    })
    res.end()
  } else {
    return {
      url,
    }
  }
}

export default result
