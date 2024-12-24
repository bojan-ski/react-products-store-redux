import React from 'react'
// data
import testimonials from '../../data/testimonials';
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";


const Testimonials = () => {
    return (
        <section className='testimonials bg-light py-4'>
            <div className="container">

                <h3 className="fw-bold text-center mb-3">
                    What our customers say
                </h3>

                <div className="testimonials-carousel">
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: true,
                            pauseOnMouseEnter: true
                        }}
                        speed={1000}
                        modules={[Autoplay]}
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            992: {
                                slidesPerView: 3,
                                spaceBetween: 10,
                            }
                        }}
                    >
                        {testimonials?.map(testimonial => {
                            return (
                                <SwiperSlide key={testimonial.userID} className="text-center">
                                    <div className="swiper-content p-2">
                                        <div className="swiper-content-testimonial rounded-4">
                                            <p className='fst-italic mb-0'>
                                                {testimonial.userTestimonial}
                                            </p>
                                        </div>
                                        <div className="swiper-content-author py-5">
                                            <h6 className='fw-bold mb-1'>
                                                {testimonial.userName}
                                            </h6>
                                            <p className='fw-bold text-muted mb-0'>
                                                {testimonial.userProfession}
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Testimonials