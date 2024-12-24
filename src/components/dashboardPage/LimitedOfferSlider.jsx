import React from 'react'
import { Link } from 'react-router-dom';
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';


const LimitedOfferSlider = ({ limitedOfferProducts }) => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: true,
                    pauseOnMouseEnter: true
                }}
                speed={4000}
                modules={[Autoplay, Pagination]}
                navigation={true}
                pagination={{
                    dynamicBullets: true,
                }}
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                }}

                className='images-gallery'
            >
                {limitedOfferProducts.map(product => {
                    const { id, brand, price, thumbnail, title } = product

                    return <SwiperSlide key={id} className='text-center bg-light rounded-4'>
                        <div className='py-3'>
                            <div>
                                <img src={thumbnail} alt={title} className="img-fluid" />
                            </div>
                            <div>
                                <p className="mb-0 fst-italic">
                                    {brand}
                                </p>
                                <p className="fw-bold mb-1 fs-5">
                                    {title}
                                </p>
                                <p className="fw-bold">
                                    ${price}
                                </p>
                            </div>
                            <div>
                                <Link to={`${id}`} className="btn btn-orange-hover fw-bold">
                                    See details
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                })}
            </Swiper>
        </>
    )
}

export default LimitedOfferSlider