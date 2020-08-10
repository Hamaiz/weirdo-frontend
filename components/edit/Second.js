const Second = ({ style, setStep, setState, state, postFormData }) => {
  // States Props
  const { setFile, setImages, setFileSrc, setImagesSrc } = setState
  const { fileSrc, imagesSrc, alreadySrc, alreadyImages } = state

  // Funcitons
  const readUrl = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      if (file.type.match('image')) {
        const reader = new FileReader()
        reader.addEventListener('load', (e) => setFileSrc(e.target.result))
        reader.readAsDataURL(file)
      }
    }
  }
  const readUrlImages = (e) => {
    if (e.target.files && e.target.files[0]) {
      const { files } = e.target
      for (let file of files) {
        if (!file.type.match('image')) continue
        const reader = new FileReader()
        reader.addEventListener('load', (e) =>
          setImagesSrc((image) => [...image, e.target.result])
        )
        reader.readAsDataURL(file)
      }
    }
  }

  return (
    <div className={style.add_container}>
      <div className={style.add_container_head}>Add Images</div>
      <div className='row'>
        <div className='col s12'>
          <div className={style.add_container_form1}>
            <label htmlFor='image'>Add Image + </label>
            <br />
            <input
              type='file'
              id='image'
              className='browser-default'
              placeholder='Weirdo'
              onChange={(e) => {
                setFile(e.target.files[0])
                readUrl(e)
              }}
            />
            <div className={style.add_container_form1_img}>
              {fileSrc ? (
                <img src={fileSrc} alt='' id='imgPreview' loading='lazy' />
              ) : (
                ''
              )}
            </div>
            <div className={style.add_container_form1_img}>
              <img src={alreadySrc} alt='' />
            </div>
          </div>
        </div>

        <div className='col s12'>
          <div className={style.add_container_line}></div>
        </div>

        <div className='col s12'>
          <div className={style.add_container_form1}>
            <label htmlFor='multiple'>Add multiple Image + </label>
            <br />
            <input
              type='file'
              id='multiple'
              className='browser-default'
              placeholder='Weirdo'
              multiple
              onChange={(e) => {
                const { files } = e.target
                for (const file of files) {
                  setImages((image) => [...image, file])
                }
                readUrlImages(e)
              }}
            />
            <div id='imagePreview' className={style.add_container_form1_images}>
              {imagesSrc
                ? imagesSrc.map((image, i) => <img src={image} key={i} />)
                : null}
            </div>

            <div id='imagePreview' className={style.add_container_form1_images}>
              {alreadyImages
                ? alreadyImages.map((image, i) => (
                    <img src={image} key={i} loading='lazy' />
                  ))
                : null}
            </div>
          </div>
        </div>

        <div className='col s12'>
          <div className='center'>
            <div
              className={style.add_container_form_btn2}
              onClick={() => setStep(1)}>
              Previous
            </div>
            <div
              className={style.add_container_form_btn}
              onClick={postFormData}
              id='btn'>
              Save
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Second
