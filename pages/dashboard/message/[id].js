import { useState, useEffect } from 'react'
import Head from 'next/head'
import io from 'socket.io-client'
import ScrollToBottom from 'react-scroll-to-bottom'
import { connect } from 'react-redux'
import Link from 'next/link'
import { useRouter } from 'next/router'

// Imports
import { getMessageAction } from '../../../store/actions/message/getMessageAction'
import Navbar from '../../../components/Navbar'
import Loader from '../../../components/all/Loader/Loader'

// Style
import style from '../../../styles/message.module.scss'

let socket
const message = ({ getUser, getMessageAction, getMessage }) => {
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [user, setUser] = useState({})
  const [messages, setMessages] = useState([])
  const router = useRouter()
  const { id } = router.query

  const arrayUser = [
    {
      name: 'Ahmed Buzdar',
      img:
        'https://i.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68',
      id: 98752389457,
      messages: [
        {
          user: 'ali',
          text: 'Hey',
        },
        {
          user: 'ahmed',
          text: 'good',
        },
        {
          user: 'ahmed',
          text:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque odit dolor eveniet consequatur sint, officiis at iure sed aspernatur quidem eaque tempora illo. Sapiente non eaque fugiat nesciunt blanditiis? Quasi?',
        },
      ],
    },
    {
      name: 'Pervaiz Ilahi',
      img:
        'https://i.picsum.photos/id/1014/6016/4000.jpg?hmac=yMXsznFliL_Y2E2M-qZEsOZE1micNu8TwgNlHj7kzs8',
      id: 53981204,
      messages: [
        {
          user: 'ali',
          text: 'Hey',
        },
        {
          user: 'pervaiz',
          text: 'nothing',
        },
        {
          user: 'pervaiz',
          text: 'Buy me',
        },
      ],
    },
  ]

  // useEffect(() => {
  //   console.log(getMessage.user)
  // }, [getMessage.isDone])

  useEffect(() => {
    getMessageAction()
    if (getMessage.isDone) {
      console.log(getMessage.users)

      // alert('An Error Occured')
      // window.location.reload()
    }
    socket = io('/chat')
    // socket.emit('join', { name: 'other', rooms: 'room' }, (error) => {
    //   if (error) alert(error)
    // })
    return () => {
      socket.emit('disconnect')
      socket.off()
    }
  }, [])

  useEffect(() => {
    setName(getUser.name)
    const user = arrayUser.find((item) => item.id === Number(id))
    const clone = Object.assign({}, user)
    delete clone.messages
    setUser(clone)
    setMessages(user.messages)
  }, [getUser, id])

  useEffect(() => {
    socket.on('message', (message) => {
      console.log(message)

      setMessages((messages) => [...messages, message])
    })
  }, [])

  const sendMessage = (e) => {
    e.preventDefault()
    const { name } = getUser

    if (message) {
      socket.emit('sendMessage', { message, name }, () => setMessage(''))
    }
  }

  return (
    <>
      <Loader loading={loading} />
      <Head>
        <title>Weirdo | Message</title>
      </Head>
      <Navbar smallHeight={true} />

      <div className={style.message}>
        <div className='row'>
          <div className='col m3 s2 removePad'>
            <div className={style.message_sidebar}>
              <div className={style.message_sidebar_heading}>Chats</div>
              <div className={style.message_sidebar_container}>
                {arrayUser ? (
                  arrayUser.map((e, i) =>
                    user ? (
                      <Link
                        key={i}
                        href={'/dashboard/message/[id]'}
                        as={`/dashboard/message/${e.id}`}>
                        <a
                          className={
                            style.message_sidebar_person +
                            ' ' +
                            (e.id === user.id ? style.active : null)
                          }>
                          <img src={e.img} alt={e.name + "'s Picture"} />

                          <div className={style.message_sidebar_person_name}>
                            {e.name}
                          </div>
                        </a>
                      </Link>
                    ) : null
                  )
                ) : (
                  <div className='center'>No One</div>
                )}
              </div>
            </div>
          </div>

          <div className='col m9 s10 removePad'>
            <div className={style.message_menu}>
              <div className={style.message_menu_top}>
                <div className={style.message_menu_top_left}>
                  {user ? (
                    <img
                      src={user.img}
                      alt={user ? user.name + "'s Image" : null}
                    />
                  ) : null}

                  <div className={style.message_menu_top_left_name}>
                    {user ? user.name : null}
                  </div>
                </div>
              </div>

              <ScrollToBottom className={style.message_menu_center}>
                {user
                  ? messages.map((message, i) => {
                      let isSentByCurrentUser = false

                      const trimmedName = name
                        ? name.trim().toLowerCase().split(' ')[0]
                        : null

                      if (message.user === trimmedName) {
                        isSentByCurrentUser = true
                      }
                      return isSentByCurrentUser ? (
                        <div
                          className={
                            style.message_menu_center_container + ' ' + style.JE
                          }
                          key={i}>
                          <p
                            className={
                              style.message_menu_center_container_sent
                            }>
                            {message.user}
                          </p>
                          <div
                            className={
                              style.message_menu_center_container_box +
                              ' ' +
                              style.back1
                            }>
                            <p
                              className={
                                style.message_menu_center_container_box_text
                              }>
                              {message.text}
                            </p>
                          </div>
                        </div>
                      ) : (
                        <div
                          className={style.message_menu_center_container}
                          key={i}>
                          <div
                            className={
                              style.message_menu_center_container_box +
                              ' ' +
                              style.back2
                            }>
                            <p
                              className={
                                style.message_menu_center_container_box_text
                              }>
                              {message.text}
                            </p>
                          </div>
                          <p
                            className={
                              style.message_menu_center_container_sent
                            }>
                            {message.user}
                          </p>
                        </div>
                      )
                    })
                  : null}
              </ScrollToBottom>
              <div className={style.message_menu_bottom}>
                <div className={style.message_menu_bottom_input}>
                  <input
                    type='text'
                    className='browser-default'
                    placeholder='Type a message...'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) =>
                      e.key === 'Enter' ? sendMessage(e) : null
                    }
                  />
                </div>
                <div className={style.message_menu_bottom_btn}>
                  <button onClick={(e) => sendMessage(e)}>Send</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

message.getInitialProps = async ({ res, req, query }) => {
  if (req) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/user`,
      {
        headers: new Headers({
          'weirdo-get-user': 'weirdo-get-user',
          cookie: req.headers.cookie,
        }),
      }
    )
    if (response.status === 200) {
      return { id: query.id }
    } else {
      res.writeHead(302, {
        Location: '/login',
      })
      res.end()
    }
  } else {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/user`,
      {
        headers: new Headers({
          'weirdo-get-user': 'weirdo-get-user',
        }),
        credentials: 'include',
      }
    )
    if (response.status === 200) {
      return { id: query.id }
    } else {
      Router.push('/login')
      return {}
    }
  }
}

const mapStateToProps = ({ getUser, getMessage }) => ({
  getUser,
  getMessage,
})

const mapDispatchToProps = (dispatch) => ({
  getMessageAction: () => dispatch(getMessageAction()),
})

export default connect(mapStateToProps, mapDispatchToProps)(message)
