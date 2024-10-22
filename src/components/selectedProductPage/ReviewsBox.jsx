import { useLoaderData } from "react-router-dom"
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";

const ReviewsBox = () => {
    const { reviews } = useLoaderData()

    return (
        <>
            <h5 className="text-center fw-bold mb-3">
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
                        <p key={key} className="capitalize mb-2">
                            <span className="fw-bold">{key}</span>: {value}
                        </p>
                    ))}
                </SwiperSlide>
                )}
            </Swiper>
        </>
    )
}

export default ReviewsBox


