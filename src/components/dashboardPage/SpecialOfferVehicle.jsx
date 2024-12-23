import React from 'react'
import { useLoaderData } from 'react-router-dom';
// components
import LimitedOfferSlider from './LimitedOfferSlider';


const SpecialOfferVehicle = () => {
    const { vehicle } = useLoaderData()

    return (
        <section className='vehicle-section mb-3'>
            <div className="container">
                <div className="row">

                    {/* row item 1 */}
                    <div className="col-12 col-md-6 d-flex align-items-center mb-3">
                        <div>
                            <h3 className='text-uppercase fw-bold mb-3'>
                                NO WAY!!!!!!!!!!
                            </h3>
                            <h5 className='mb-3'>
                                Check out this limited time collaboration we have with
                            </h5>
                            <h5 className='fw-bold fst-italic'>
                                VEHICLE dealers
                            </h5>
                        </div>
                    </div>

                    {/* row item 2 */}
                    <div className="col-12 col-md-6 box-shadow-custom text-center mb-3">
                        <LimitedOfferSlider limitedOfferProducts={vehicle.products} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SpecialOfferVehicle