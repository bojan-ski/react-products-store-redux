import React from 'react'
import { useLoaderData } from 'react-router-dom';
// components
import LimitedOfferSlider from './LimitedOfferSlider';


const SpecialOfferMotorcycle = () => {
    const { motorcycle } = useLoaderData()

    return (
        <section className='motorcycle-section mb-3'>
            <div className="container">
                <div className="row">

                    {/* row item 1 */}
                    <div className="col-12 col-md-6 order-2 order-md-1 box-shadow-custom text-center mb-3">
                        <LimitedOfferSlider limitedOfferProducts={motorcycle.products} />
                    </div>

                    {/* row item 2 */}
                    <div className="col-12 col-md-6 order-1 order-md-2 d-flex align-items-center mb-3">
                        <div className='ms-5'>
                            <h5 className='mb-3'>
                                Or you are more a two tires person,
                            </h5>
                            <h3 className='text-uppercase fw-bold mb-3'>
                                no problem
                            </h3>
                            <h5 className='mb-3'>
                                Check this limited time collaboration with
                            </h5>
                            <h5 className='fw-bold fst-italic'>
                                MOTO dealers
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SpecialOfferMotorcycle