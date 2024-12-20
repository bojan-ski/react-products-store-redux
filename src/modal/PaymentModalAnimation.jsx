import React from 'react'
// asset
import animation from '../assets/animation.gif'


const PaymentModalAnimation = () => {    
    return (
        <div className="animation-modal">
            <div className="animation-modal-content rounded-5 p-5">

                <h5 className='text-dark fw-bold'>
                    Payment process running in the background
                </h5>

                <div className="animation-modal-img">
                    <img src={animation} alt='animation-payment-process' />
                </div>
            </div>
        </div>
    )
}

export default PaymentModalAnimation