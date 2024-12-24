import React from 'react'
import { useLoaderData } from 'react-router-dom';
// components
import LimitedOfferSlider from './LimitedOfferSlider';


const SpecialOfferMotorcycle = () => {
    const { motorcycle } = useLoaderData()    

    return (
        <section className='motorcycle-section mb-5'>
            <div className="container">

                <div className='box-shadow-custom p-3'>
                    <div className='text-center mb-3'>
                        <h5 className='mb-2'>
                            You are more of a two-wheeler person?
                        </h5>
                        <h3 className='text-uppercase fw-bold mb-2'>
                            no problem
                        </h3>
                        <h5 className='mb-2'>
                            Check this limited time collaboration with
                        </h5>
                        <h4 className='fw-bold fst-italic'>
                            MOTO dealers
                        </h4>
                    </div>

                    <div className='text-center'>
                        <LimitedOfferSlider limitedOfferProducts={motorcycle.products} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SpecialOfferMotorcycle