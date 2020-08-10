import { useState } from 'react'
import Head from 'next/head'
import { connect } from 'react-redux'

// Imports
import Layout from '../components/Layout'
import Main from '../components/main/Main'
import Card from '../components/all/Card/Card'
import Loader from '../components/all/Loader/Loader'

// Style
import style from '../styles/index.module.scss'

const index = () => {
  const [loading, setLoading] = useState(false)
  const data = ['a', 'b', 'c', 'd', 'a', 'b', 'c', 'd']
  return (
    <>
      <Loader loading={loading} />
      <Layout>
        <Head>
          <title>Weirdo</title>
        </Head>
        <Main />
        <div className='container'>
          <div className={style.index}>
            <div className={style.index_heading}>Flash Sale</div>
            <div className='row'>
              {/* <div className={style.index_bg}> */}
              {data.map((e, i) => (
                <div className='col l4 m6 s12 xl3' key={i}>
                  <Card key={i} />
                </div>
              ))}
              {/* </div> */}
            </div>
            <div className='right'>
              <div className={style.index_show}>show more</div>
            </div>

            <div className={style.index_heading}>Trending</div>
            <div className='row'>
              {data.map((e, i) => (
                <div className='col l4 m6 s12 xl3' key={i}>
                  <Card key={i} />
                </div>
              ))}
            </div>
            <div className='right'>
              <div className={style.index_show}>show more</div>
            </div>
            <div className={style.index_heading}>Latest</div>
            <div className='row'>
              {data.map((e, i) => (
                <div className='col l4 m6 s12 xl3' key={i}>
                  <Card key={i} />
                </div>
              ))}
            </div>
            <div className='right'>
              <div className={style.index_show}>show more</div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

const mapStateToProps = ({ getProduct }) => ({
  getProduct,
})
const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(index)
