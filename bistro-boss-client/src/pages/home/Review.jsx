import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



const Review = () => {
    const [reviews, setReview] = useState([]);
    useEffect(() => {
        fetch('/reviews.json')
            .then(res => res.json())
            .then(data => setReview(data))
    }, []);

    return (
        <section className="my-10">
            <SectionTitle subHeading={'What Our Client Say'} heading={'testimonials'}></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div className="px-20 text-center">
                            <img className="mx-auto" src="https://img.icons8.com/?size=100&id=38968&format=png&color=000000" alt="" />
                            <p>{review.details}</p>
                            <h3 className=" text-3xl text-orange-500">{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }

            </Swiper>

        </section>
    );
};

export default Review;