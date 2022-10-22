import React from 'react'

const BtnBottom = () => {
  return (
    <div className='bottom-btn-group'>
        <div className='btn btn-primary bottom-btn'>
            <a  href='tel:07909126369"' >
            CALL NOW
            </a>
        </div>
        <div className='btn btn-primary bottom-btn'>
            <a  href='https://api.whatsapp.com/send?phone=447909126369'>
            WHATS APP
            </a>
        </div>
        <div className='btn btn-primary bottom-btn'>
            <a  href='mailto:info@komoving.co.uk'>
            EMAIL US
            </a>
        </div>
    </div>
  )
}

export default BtnBottom