import { useEffect } from 'react'
import { connect } from 'react-redux'

// Import

// Style
import style from './seller.module.scss'

const First = ({ setStep, postsellerActionState, sellerForm }) => {
  useEffect(() => {
    const { companyName, companyAbbr } = sellerForm
    if (companyName.length < 3 || companyAbbr.length < 2) {
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
          <div className={style.first_company_head}>Company</div>
          <div className='row'>
            <div className='col s12 m6'>
              <div className={style.first_company_form}>
                <label htmlFor='companyName'>Name *</label>
                <br />
                <input
                  type='text'
                  id='companyName'
                  className='browser-default'
                  placeholder='Weirdo'
                  value={sellerForm.companyName}
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
                <label htmlFor='companyAbbr'>Abbreviation *</label>
                <br />
                <input
                  type='text'
                  id='companyAbbr'
                  className='browser-default'
                  placeholder='WD'
                  value={sellerForm.companyAbbr}
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
                <label htmlFor='comapnyLinkedin'>Companies Linkedin</label>
                <br />
                <input
                  type='text'
                  id='comapnyLinkedin'
                  className='browser-default'
                  value={sellerForm.comapnyLinkedin}
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
                <label htmlFor='companyFacebook'>Companies Facebook</label>
                <br />
                <input
                  type='text'
                  id='companyFacebook'
                  className='browser-default'
                  value={sellerForm.companyFacebook}
                  onChange={(e) =>
                    postsellerActionState({
                      name: e.target.id,
                      value: e.target.value,
                    })
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div className='center'>
          <div className={style.first_btn} onClick={() => setStep(2)} id='btn'>
            Next
          </div>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = ({}) => ({})

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(First)
