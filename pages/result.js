import Head from 'next/head'
import { connect } from 'react-redux'
import { useEffect, useState } from 'react'

// Imports
import Layout from '../components/Layout'
import Card from '../components/all/Card/Card'
import Search from '../components/result/Search'
import { getResultItemsAction } from '../store/actions/customer/getResultItemsAction'

// Style
import style from '../styles/result.module.scss'

const result = ({ search_query, getResultItemsAction, getResultItems }) => {
  const [loader, setLoader] = useState(false)

  useEffect(() => {
    getResultItemsAction({ search_query })
  }, [search_query, getResultItems.isDone])

  useEffect(() => {
    setLoader(getResultItems.isDone ? true : false)
  }, [getResultItems.items])

  // Pagination
  let pagination = []
  if (getResultItems.items.totalPages) {
    for (let i = 1; i <= getResultItems.items.totalPages; i++) {
      pagination.push(
        <div
          className={
            style.result_pages_number +
            ' ' +
            (i === getResultItems.items.page
              ? style.result_pages_number_active
              : '')
          }
          onClick={() =>
            i === getResultItems.items.page
              ? null
              : getResultItemsAction({ search_query, page: i })
          }>
          {i}
        </div>
      )
      // return (

      // )
    }
  }

  console.log(pagination)

  return (
    <>
      <Layout>
        <Head>
          <title>{search_query} | Weirdo</title>
          <meta name='keywords' content={search_query} />
        </Head>
        <Search />
        <div className='container'>
          <div className={style.result}>
            <div className={style.result_heading}>
              Search Results for
              <span className={style.result_search}>{search_query}</span>
            </div>
            <div className='row'>
              {getResultItems.items ? (
                loader ? (
                  getResultItems.items.items.length > 0 ? (
                    getResultItems.items.items.map((d, i) => (
                      <div className='col l4 m6 s12 xl3' key={i}>
                        <Card key={i} d={d} />
                      </div>
                    ))
                  ) : (
                    <div className='center'>
                      <div>No Products Found :(</div>
                    </div>
                  )
                ) : (
                  <div className='center'>
                    <div className='preloader-wrapper big active'>
                      <div className='spinner-layer spinner-blue-only'>
                        <div className='circle-clipper left'>
                          <div className='circle'></div>
                        </div>
                        <div className='gap-patch'>
                          <div className='circle'></div>
                        </div>
                        <div className='circle-clipper right'>
                          <div className='circle'></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              ) : (
                <></>
              )}
            </div>
            {getResultItems.items ? (
              <div className='center'>
                <div className={style.result_pages}>
                  <div className={style.result_pages_previous}>Previous</div>
                  {getResultItems.items.totalPages ? (
                    // pagination.map((p, i) => ({ p }))
                    pagination
                  ) : (
                    <></>
                  )}
                  <div className={style.result_pages_next}>Next</div>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </Layout>
    </>
  )
}

// function PagesNumber({ totalPages, page, search_query }) {
//   // for (let i = 1; i <= 10; i++) {
//   //   console.log(i)
//   // }

//   for (let i = 1; i <= totalPages; i++) {
//     console.log('i', i)
//     return (
//       <div
//         className={
//           style.result_pages_number +
//           ' ' +
//           (i === page ? style.result_pages_number_active : '')
//         }
//         // onClick={() => getResultItemsAction({ search_query, page: i })}
//       >
//         {i}
//       </div>
//     )
//   }
// }

result.getInitialProps = async ({ query, res }) => {
  const { search_query } = query
  if (!search_query) {
    res.writeHead(301, {
      Location: '/',
    })
    res.end()
  } else {
    return {
      search_query: search_query.replace(/'+'/g, ' '),
    }
  }
}

const mapStateToProps = ({ getResultItems }) => ({
  getResultItems,
})

const mapDispatchToProps = (dispatch) => ({
  getResultItemsAction: (data) => dispatch(getResultItemsAction(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(result)
