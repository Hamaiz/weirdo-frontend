import { useEffect } from 'react'

// Style
import style from './seller.module.scss'

const Third = ({ setStep, postsellerActionState, sellerForm }) => {
  useEffect(() => {
    const { personalNumber, personalExp, personalAddress } = sellerForm
    if (
      personalNumber.match(/^(\+\d{1,3}[- ]?)?\d{10}$/) ||
      isNaN(personalExp) ||
      personalAddress.length < 1 ||
      !personalExp
    ) {
      document.getElementById('btn').classList.add(style.first_btn_disable)
    } else {
      document.getElementById('btn').classList.remove(style.first_btn_disable)
      document.getElementById('btn').classList.add(style.first_btn)
    }
  }, [sellerForm])

  return (
    <>
      <div className={style.first}>
        <div className={style.first_company}>
          <div className={style.first_company_head}>
            Your Personal Information
          </div>
          <div className={style.first_company_sub}>(Private)</div>
          <div className='row'>
            <div className='col s12 m6'>
              <div className={style.first_company_form}>
                <label htmlFor='personalNumber'>Phone Number *</label>
                <br />
                <input
                  type='text'
                  id='personalNumber'
                  className='browser-default'
                  value={sellerForm.personalNumber}
                  onChange={(e) =>
                    postsellerActionState({
                      name: e.target.id,
                      value: e.target.value,
                    })
                  }
                />
              </div>
            </div>

            <div className='col s12 m6'>
              <div className={style.first_company_form}>
                <label htmlFor='personalExp'>Previous Experience *</label>
                <br />
                <input
                  type='text'
                  id='personalExp'
                  className='browser-default'
                  placeholder='3'
                  value={sellerForm.personalExp}
                  onChange={(e) =>
                    postsellerActionState({
                      name: e.target.id,
                      value: e.target.value,
                    })
                  }
                />
              </div>
            </div>

            <div className='col s12 m12'>
              <div className={style.first_company_form}>
                <label htmlFor='personalAddress'>Your Address *</label>
                <br />
                <textarea
                  id='personalAddress'
                  value={sellerForm.personalAddress}
                  onChange={(e) =>
                    postsellerActionState({
                      name: e.target.id,
                      value: e.target.value,
                    })
                  }></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className='center'>
          <div className={style.first_btn2} onClick={() => setStep(2)}>
            Previous
          </div>
          <div className={style.first_btn} onClick={() => setStep(4)} id='btn'>
            Next
          </div>
        </div>
      </div>
    </>
  )
}

export default Third
