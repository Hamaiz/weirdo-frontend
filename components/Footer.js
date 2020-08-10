import React from 'react'

const FooterOne = () => {
  // Icons
  const facebookIcon = (
    <svg role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
      <title>Facebook</title>
      <path d='M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z' />
    </svg>
  )
  const twitterIcon = (
    <svg role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
      <title>Twitter</title>
      <path d='M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z' />
    </svg>
  )

  const googleIcon = (
    <svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
      <path d='m12 24c6.624 0 12-5.376 12-12s-5.376-12-12-12-12 5.376-12 12 5.376 12 12 12zm4.283-12.857h1.718v-1.717h1.718v1.718h1.703v1.718h-1.703v1.718h-1.718v-1.718h-1.718zm-3.687-3.581-1.626 1.578c-2.08-2.033-6.127-.552-6.127 2.855 0 4.621 6.559 4.937 7.128 1.2h-3.392v-2.061h5.657c.642 3.356-1.525 6.866-5.657 6.866v.001c-3.329 0-6.001-2.686-6.001-6.001.001-5.338 6.333-7.861 10.018-4.438z' />
    </svg>
  )

  const instagramIcon = (
    <svg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'>
      <path d='m305 256c0 27.0625-21.9375 49-49 49s-49-21.9375-49-49 21.9375-49 49-49 49 21.9375 49 49zm0 0' />
      <path d='m370.59375 169.304688c-2.355469-6.382813-6.113281-12.160157-10.996094-16.902344-4.742187-4.882813-10.515625-8.640625-16.902344-10.996094-5.179687-2.011719-12.960937-4.40625-27.292968-5.058594-15.503906-.707031-20.152344-.859375-59.402344-.859375-39.253906 0-43.902344.148438-59.402344.855469-14.332031.65625-22.117187 3.050781-27.292968 5.0625-6.386719 2.355469-12.164063 6.113281-16.902344 10.996094-4.882813 4.742187-8.640625 10.515625-11 16.902344-2.011719 5.179687-4.40625 12.964843-5.058594 27.296874-.707031 15.5-.859375 20.148438-.859375 59.402344 0 39.25.152344 43.898438.859375 59.402344.652344 14.332031 3.046875 22.113281 5.058594 27.292969 2.359375 6.386719 6.113281 12.160156 10.996094 16.902343 4.742187 4.882813 10.515624 8.640626 16.902343 10.996094 5.179688 2.015625 12.964844 4.410156 27.296875 5.0625 15.5.707032 20.144532.855469 59.398438.855469 39.257812 0 43.90625-.148437 59.402344-.855469 14.332031-.652344 22.117187-3.046875 27.296874-5.0625 12.820313-4.945312 22.953126-15.078125 27.898438-27.898437 2.011719-5.179688 4.40625-12.960938 5.0625-27.292969.707031-15.503906.855469-20.152344.855469-59.402344 0-39.253906-.148438-43.902344-.855469-59.402344-.652344-14.332031-3.046875-22.117187-5.0625-27.296874zm-114.59375 162.179687c-41.691406 0-75.488281-33.792969-75.488281-75.484375s33.796875-75.484375 75.488281-75.484375c41.6875 0 75.484375 33.792969 75.484375 75.484375s-33.796875 75.484375-75.484375 75.484375zm78.46875-136.3125c-9.742188 0-17.640625-7.898437-17.640625-17.640625s7.898437-17.640625 17.640625-17.640625 17.640625 7.898437 17.640625 17.640625c-.003906 9.742188-7.898437 17.640625-17.640625 17.640625zm0 0' />
      <path d='m256 0c-141.363281 0-256 114.636719-256 256s114.636719 256 256 256 256-114.636719 256-256-114.636719-256-256-256zm146.113281 316.605469c-.710937 15.648437-3.199219 26.332031-6.832031 35.683593-7.636719 19.746094-23.246094 35.355469-42.992188 42.992188-9.347656 3.632812-20.035156 6.117188-35.679687 6.832031-15.675781.714844-20.683594.886719-60.605469.886719-39.925781 0-44.929687-.171875-60.609375-.886719-15.644531-.714843-26.332031-3.199219-35.679687-6.832031-9.8125-3.691406-18.695313-9.476562-26.039063-16.957031-7.476562-7.339844-13.261719-16.226563-16.953125-26.035157-3.632812-9.347656-6.121094-20.035156-6.832031-35.679687-.722656-15.679687-.890625-20.6875-.890625-60.609375s.167969-44.929688.886719-60.605469c.710937-15.648437 3.195312-26.332031 6.828125-35.683593 3.691406-9.808594 9.480468-18.695313 16.960937-26.035157 7.339844-7.480469 16.226563-13.265625 26.035157-16.957031 9.351562-3.632812 20.035156-6.117188 35.683593-6.832031 15.675781-.714844 20.683594-.886719 60.605469-.886719s44.929688.171875 60.605469.890625c15.648437.710937 26.332031 3.195313 35.683593 6.824219 9.808594 3.691406 18.695313 9.480468 26.039063 16.960937 7.476563 7.34375 13.265625 16.226563 16.953125 26.035157 3.636719 9.351562 6.121094 20.035156 6.835938 35.683593.714843 15.675781.882812 20.683594.882812 60.605469s-.167969 44.929688-.886719 60.605469zm0 0' />
    </svg>
  )

  const getYear = new Date().getFullYear()

  return (
    <div className='footer'>
      <div className='footer_black'>
        <div className='container'>
          <div className='row'>
            <div className='col m5'>
              <div className='footer_black_name'>Weirdo</div>
            </div>
            <div className='col m3'>
              <ul>
                <li className='footer_black_heading'>Customer Care</li>
                <li className='footer_black_list'>Help Center</li>
                <li className='footer_black_list'>How to Buy</li>
                <li className='footer_black_list'>Contact Us</li>
                <li className='footer_black_list'>Returns & Refunds</li>
              </ul>
            </div>
            <div className='col m3 offset-m1'>
              <ul>
                <li className='footer_black_heading'>About Weirdo</li>
                <li className='footer_black_list'>Privacy Policy</li>
                <li className='footer_black_list'>Terms & Conditions</li>
                <li className='footer_black_list'>Carrers</li>
                <li className='footer_black_list'>Weirdo Blog</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='footer_options'>
        <div className='container'>
          <div className='row'>
            <div className='col m6 s12'>
              <div className='footer_options_heading'>
                <div>Payment Options</div>
              </div>
              <div className='footer_options_container'>
                <span className='footer_options_list'>
                  <div>Cash on delivery</div>
                </span>
                <span className='footer_options_list '>
                  <div>Visa</div>
                </span>
                <span className='footer_options_list'>
                  <div>Master Card</div>
                </span>
                <span className='footer_options_list'>
                  <div>Union pay</div>
                </span>
              </div>
            </div>
            <div className='col m4 offset-m2 s12'>
              <div className='footer_options_heading'>Follow Us</div>

              <ul>
                <li className='footer_options_icons'>{facebookIcon}</li>
                <li className='footer_options_icons'>{googleIcon}</li>
                <li className='footer_options_icons'>{twitterIcon}</li>
                <li className='footer_options_icons'>{instagramIcon}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='footer_bottom'>
        <div className='container'>
          <div className='footer_bottom_heading'>
            How are we better than others
          </div>
          <div className='footer_bottom_desc'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum cum,
            delectus minus, saepe repellendus tenetur vel soluta tempore
            repudiandae autem ratione quod dicta optio quibusdam officiis,
            corrupti totam. Ducimus voluptates recusandae, amet vero itaque quae
            temporibus libero animi assumenda ipsum distinctio exercitationem
            nemo delectus. Distinctio at vel alias, necessitatibus modi
            officiis. Sed, numquam at rerum quisquam alias veritatis explicabo
            eaque ipsa voluptates beatae amet enim veniam accusamus qui neque
            incidunt excepturi.
          </div>
          <div className='footer_bottom_line'></div>
          <div className='footer_bottom_copy'>
            Copyright &copy; {getYear} | Weirdo all rights reserved
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterOne
