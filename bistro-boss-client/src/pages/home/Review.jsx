import { useEffect, useState } from "react";

const Review = () => {
    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch('/reviews.json')
            .then(res => res.json())
            .then(data => setReview(data))
    }, []);
    console.log(review);
    return (
        <div>

        </div>
    );
};

export default Review;