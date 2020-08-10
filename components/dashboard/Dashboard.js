import { useState, useEffect } from 'react'
import Cropper from 'react-easy-crop'
import getCroppedImg from './cropImage'
import { connect } from 'react-redux'

// Import
import { postUploadImage } from '../../store/actions/customer/postCustomer'
import { getUserReducers } from '../../store/actions/authenticationReducers/getUserReducers'

// Style
import style from './dashboard.module.scss'

const Dashboard = ({
  setLoading,
  getUserReducers,
  postUploadImage,
  postCustomerReducer,
  getUser,
}) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [src, setSrc] = useState(null)
  const [zoom, setZoom] = useState(1)
  const [file, setFile] = useState('')
  const [croppedAreaPixel, setCroppedAreaPixel] = useState(null)

  // postUploadImage({})
  useEffect(() => {
    if (postCustomerReducer.isUploaded) {
      getUserReducers()
      setSrc(null)
      setCroppedAreaPixel(null)
      setFile('')
      setLoading(false)
    }
  }, [postCustomerReducer.isUploaded])

  const showResult = async () => {
    const croppedImage = await getCroppedImg(src, croppedAreaPixel)
    setLoading(true)
    await postUploadImage({ image: croppedImage })
  }

  // Function
  const readUrl = async (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      const reader = new FileReader()
      reader.addEventListener('load', (e) => setSrc(e.target.result))
      reader.readAsDataURL(file)
    }
  }

  return (
    <>
      <div id='modalimg' className='modal modal-fixed-footer'>
        <div className='modal-content bg-color overflowHidden'>
          <div className={style.dashboard_uploading}>
            <div className={style.dashboard_uploading_button}>
              <label htmlFor='upload'>Upload Image +</label>
              <input
                type='file'
                id='upload'
                onChange={(e) => {
                  setFile(e.target.files[0])
                  readUrl(e)
                }}
              />
            </div>
            {file ? (
              <div className={style.dashboard_uploading_edit}>
                <div className={style.dashboard_uploading_edit_container}>
                  <Cropper
                    image={src}
                    crop={crop}
                    zoom={zoom}
                    aspect={4 / 3}
                    onCropChange={setCrop}
                    onCropComplete={(croppedArea, croppedAreaPixels) => {
                      setCroppedAreaPixel(croppedAreaPixels)
                    }}
                    onZoomChange={setZoom}
                  />
                </div>
                <p className='range-field'>
                  <input
                    type='range'
                    min={1}
                    max={3}
                    step={0.1}
                    value={zoom}
                    onChange={(e) => setZoom(e.target.value)}
                  />
                </p>

                <div className={style.dashboard_uploading_edit_btns}>
                  <div
                    className={style.dashboard_uploading_edit_btnC}
                    onClick={() => {
                      setFile('')
                      setSrc(null)
                      setCroppedAreaPixel(null)
                    }}>
                    Cancel
                  </div>
                  <div
                    className={style.dashboard_uploading_edit_btn}
                    onClick={showResult}>
                    Save
                  </div>
                </div>
              </div>
            ) : null}
          </div>
          <div className={style.dashboard_uploading}>
            <div className={style.dashboard_uploading_heading}>
              Uploaded Image
            </div>
            <div className='row center'>
              <div className='col m12 s12'>
                <div className={style.dashboard_uploading_img}>
                  <img src={getUser.image} alt='Profile-Photo' loading='lazy' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='modal-footer'>
          <div className='modal-close waves-effect waves-green btn-flat grey darken-4 white-text mr-1'>
            Close
          </div>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = ({ postCustomerReducer, getUser }) => ({
  postCustomerReducer: postCustomerReducer,
  getUser,
})

const mapDispatchToProps = (dispatch) => ({
  postUploadImage: (data) => dispatch(postUploadImage(data)),
  getUserReducers: () => dispatch(getUserReducers()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
