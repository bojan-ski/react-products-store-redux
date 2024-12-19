import React from "react";
import { useLoaderData } from "react-router-dom"
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";


const ReviewsBox = () => {
    const { reviews } = useLoaderData()

    return (
        <div className="product-reviews rounded-4 p-3 h-100">
            <h5 className="text-center fw-bold mb-3 border-bottom pb-2">
                Reviews:
            </h5>

            <Swiper
                spaceBetween={10}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    // delay: 1000,
                    disableOnInteraction: true,
                    pauseOnMouseEnter: true
                }}
                speed={5000}
                modules={[Autoplay]} 
            >
                {reviews.map((review, idx) => <SwiperSlide key={idx}>
                    {Object.entries(review).map(([key, value]) => (
                        <p key={key} className="text-capitalize mb-2">
                            <span className="fw-bold">{key}</span>:
                            <span className="ms-2">{value}</span>
                        </p>
                    ))}
                </SwiperSlide>
                )}
            </Swiper>
        </div>
    )
}

export default ReviewsBox


