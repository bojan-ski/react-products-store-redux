import React from 'react'
import { useLoaderData } from 'react-router-dom';
// components
import LimitedOfferSlider from './LimitedOfferSlider';


const SpecialOfferVehicle = () => {
    const { vehicle } = useLoaderData()

    return (
        <section className='vehicle-section mb-3'>
            <div className="container">

                <div className='box-shadow-custom p-3'>
                    <div className='text-center mb-3'>
                        <h5 className='mb-2'>
                            Check out this limited time collaboration we have with
                        </h5>
                        <h4 className='fw-bold'>
                            VEHICLE dealers
                        </h4>
                    </div>
                    <div>
                        <LimitedOfferSlider limitedOfferProducts={vehicle.products} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SpecialOfferVehicle