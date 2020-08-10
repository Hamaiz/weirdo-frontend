import { useEffect } from 'react'

const First = ({ style, setStep, setState, state }) => {
  const {
    setTitle,
    setPrice,
    setDimensions,
    setAvailable,
    setWeight,
    setDescription,
  } = setState
  const { title, price, dimensions, available, weight, description } = state

  useEffect(() => {
    if (
      !title ||
      Number.isInteger(price) ||
      !dimensions.match(/(^\d+ ?x ?\d+ ?x ?\d+)/g) ||
      Number.isInteger(weight) ||
      description.length < 50
    ) {
      document
        .getElementById('btn')
        .classList.add(style.add_container_form_btn_disable)
    } else {
      document
        .getElementById('btn')
        .classList.remove(style.add_container_form_btn_disable)
      document.getElementById('btn').classList.add(style.add_container_form_btn)
    }
  }, [state])

  return (
    <div className={style.add_container}>
      <div className={style.add_container_head}>Add Product</div>
      <div className='row'>
        <div className='col s12'>
          <div className={style.add_container_form}>
            <label htmlFor='title'>Title * </label>
            <br />
            <input
              type='text'
              id='title'
              className='browser-default'
              placeholder='Weirdo'
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </div>
        </div>
        <div className='col s12 m6'>
          <div className={style.add_container_form}>
            <label htmlFor='price'>Price * </label>
            <br />
            <input
              type='text'
              id='price'
              className='browser-default'
              placeholder='30'
              onChange={(e) => setPrice(e.target.value)}
              value={price}
            />
          </div>
        </div>
        <div className='col s12 m6'>
          <div className={style.add_container_form}>
            <label htmlFor='dimension'>Dimensions * </label>
            <br />
            <input
              type='text'
              id='dimension'
              className='browser-default'
              placeholder='30 x 30 x30'
              onChange={(e) => setDimensions(e.target.value)}
              value={dimensions}
            />
          </div>
        </div>
        <div className='col s12 m6'>
          <div className={style.add_container_form}>
            <label htmlFor='available'>Availability * </label>
            <br />
            <div className='switch mt-3'>
              <label>
                No
                <input
                  type='checkbox'
                  id='available'
                  checked={available}
                  onChange={(e) => setAvailable(e.target.value)}
                />
                <span className='lever'></span>
                Yes
              </label>
            </div>
          </div>
        </div>
        <div className='col s12 m6'>
          <div className={style.add_container_form}>
            <label htmlFor='weight'>Weight * </label>
            <br />
            <input
              type='text'
              id='weight'
              className='browser-default'
              placeholder='30'
              onChange={(e) => setWeight(e.target.value)}
              value={weight}
            />
          </div>
        </div>
        <div className='col s12'>
          <div className={style.add_container_form}>
            <label htmlFor='description'>Description * </label>
            <br />
            <textarea
              id='description'
              onChange={(e) => setDescription(e.target.value)}
              value={description}></textarea>
          </div>
        </div>
        <div className='col s12'>
          <div className='center'>
            <div
              className={style.add_container_form_btn}
              onClick={() => setStep(2)}
              id='btn'>
              Next
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default First
