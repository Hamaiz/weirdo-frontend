// Style
import style from './seller.module.scss'

const Fourth = ({ setStep, postFormData, setLoading }) => {
  return (
    <>
      <div className={style.first}>
        <div className={style.first_company}>
          <div className={style.first_company_head}>You are all done</div>
          <div className={style.first_company_head3}>
            Click Submit to Proceed
          </div>
        </div>
        <div className='center'>
          <div className={style.first_btn2} onClick={() => setStep(3)}>
            Previous
          </div>
          <div
            className={style.first_btn}
            onClick={() => {
              postFormData()
              setLoading(true)
            }}>
            Submit
          </div>
        </div>
      </div>
    </>
  )
}

export default Fourth
