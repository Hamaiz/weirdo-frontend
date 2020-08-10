import Head from 'next/head'

// Imports
import Layout from '../components/Layout'
import Card from '../components/all/Card/Card'
import Search from '../components/result/Search'

// Style
import style from '../styles/result.module.scss'

const result = ({ search_query }) => {
  // useEffect(() => {
  //   if (!search_query) {
  //     Router.push('/')
  //   }
  // }, [search_query])
  const data = [
    'a',
    'b',
    'c',
    'd',
    'a',
    'b',
    'c',
    'd',
    'a',
    'b',
    'c',
    'd',
    'a',
    'b',
    'c',
    'd',
  ]

  return (
    <>
      <Layout>
        <Head>
          <title>{search_query} | Weirdo</title>
        </Head>
        <Search />
        <div className='container'>
          <div className={style.result}>
            <div className={style.result_heading}>
              Search Results for
              <span className={style.result_search}>{search_query}</span>
            </div>
            <div className='row'>
              {data.map((d, i) => (
                <Card key={i} />
              ))}
            </div>
            <div className='right'>
              <div className={style.result_show}>show more</div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

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

export default result
