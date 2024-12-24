import React from 'react'
import { Link } from 'react-router-dom'


const Hero = () => {
  return (
    <section className='hero-section d-flex align-items-center justify-content-center mb-5'>
        <Link to='/products' type='button' className='btn btn-orange-hover fw-bold fs-5 px-5 py-3'>
            Order Now
        </Link>
    </section>
  )
}

export default Hero