import { useState, useEffect } from 'react'
import Head from 'next/head'
import { connect } from 'react-redux'

// Imports
import { getLatestAction } from '../store/actions/customer/getLatestAction'
import Layout from '../components/Layout'
import Main from '../components/main/Main'
import Card from '../components/all/Card/Card'
import Loader from '../components/all/Loader/Loader'

// Style
import style from '../styles/index.module.scss'

const index = ({ getLatest, getLatestAction }) => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getLatestAction()
    console.log(getLatest)
  }, [getLatest.isDone])

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
              <div className={style.index_desc}>
                This Logic is not possible without having users
              </div>
            </div>

            <div className={style.index_heading}>Trending</div>
            <div className='row'>
              <div className={style.index_desc}>
                This Logic is not possible without having users
              </div>
            </div>
            <div className={style.index_heading}>Latest</div>
            <div className='row'>
              {getLatest.items.map((d, i) => (
                <div className='col l4 m6 s12 xl3' key={i}>
                  <Card key={i} d={d} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

const mapStateToProps = ({ getLatest }) => ({
  getLatest,
})
const mapDispatchToProps = (dispatch) => ({
  getLatestAction: () => dispatch(getLatestAction()),
})

export default connect(mapStateToProps, mapDispatchToProps)(index)
