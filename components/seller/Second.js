import { useEffect } from 'react'
// Style
import style from './seller.module.scss'

const Second = ({ setStep, postsellerActionState, sellerForm, name }) => {
  useEffect(() => {
    const { yourName, yourAge, yourDescripiton } = sellerForm
    if (
      yourName.length < 1 ||
      yourAge.length < 1 ||
      yourDescripiton.length < 1
    ) {
      document.getElementById('btn').classList.add(style.first_btn_disable)
    } else {
      document.getElementById('btn').classList.remove(style.first_btn_disable)
      document.getElementById('btn').classList.add(style.first_btn)
    }
  }, [sellerForm])

  useEffect(() => {
    postsellerActionState({
      name: 'yourName',
      value: name,
    })
  }, [])

  return (
    <>
      <div className={style.first}>
        <div className={style.first_company}>
          <div className={style.first_company_head}>Your Information</div>
          <div className='row'>
            <div className='col s12 m6'>
              <div className={style.first_company_form}>
                <label htmlFor='yourName'>Name *</label>
                <br />
                <input
                  type='text'
                  id='yourName'
                  className='browser-default'
                  value={!sellerForm.yourName ? name : sellerForm.yourName}
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
                <label htmlFor='yourAge'>Age *</label>
                <br />
                <input
                  type='text'
                  id='yourAge'
                  className='browser-default'
                  value={sellerForm.yourAge}
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
                <label htmlFor='yourLinkedin'>Your Linkedin</label>
                <br />
                <input
                  type='text'
                  id='yourLinkedin'
                  className='browser-default'
                  value={sellerForm.yourLinkedin}
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
                <label htmlFor='yourFacebook'>Your Facebook</label>
                <br />
                <input
                  type='text'
                  id='yourFacebook'
                  className='browser-default'
                  value={sellerForm.yourFacebook}
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
                <label htmlFor='yourDescripiton'>Your Description *</label>
                <br />
                <textarea
                  id='yourDescripiton'
                  value={sellerForm.yourDescripiton}
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
          <div className={style.first_btn2} onClick={() => setStep(1)}>
            Previous
          </div>
          <div className={style.first_btn} onClick={() => setStep(3)} id='btn'>
            Next
          </div>
        </div>
      </div>
    </>
  )
}

export default Second
