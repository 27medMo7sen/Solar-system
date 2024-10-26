import { ReviewForm } from "./ReviewForm";
import { ReviewList } from "./ReviewsList";
import { ReviewVisual } from "./ReviewsVisual";
import { useState } from "react";
const reviewsNumbers = {
  total: 400,
  5: 200,
  4: 100,
  3: 50,
  2: 30,
  1: 20,
};
export const MainReviews = () => {
  const [reviews, setReviews] = useState([
    {
      rating: 4,
      author: "Ahmed Ali",
      timeAgo: "9 months ago",
      text: "Lorem ipsum dolor sit amet...",
      yesVotes: 20,
      noVotes: 5,
    },
    {
      rating: 4,
      author: "Ahmed Ali",
      timeAgo: "9 months ago",
      text: "Lorem ipsum dolor sit amet...",
      yesVotes: 20,
      noVotes: 5,
    },
    {
      rating: 4,
      author: "Ahmed Ali",
      timeAgo: "9 months ago",
      text: "Lorem ipsum dolor sit amet...",
      yesVotes: 20,
      noVotes: 5,
    },
    {
      rating: 4,
      author: "Ahmed Ali",
      timeAgo: "9 months ago",
      text: "Lorem ipsum dolor sit amet...",
      yesVotes: 20,
      noVotes: 5,
    },
    {
      rating: 4,
      author: "Ahmed Ali",
      timeAgo: "9 months ago",
      text: "Lorem ipsum dolor sit amet...",
      yesVotes: 20,
      noVotes: 5,
    },
  ]);
  const pushReview = (review, rating) => {
    const newReview = {
      rating,
      text: review,
      yesVotes: 0,
      noVotes: 0,
      author: "Ahmed Ali",
      timeAgo: "now",
    };
    setReviews((prev) => [newReview, ...prev]);
    reviewsNumbers.total++;
    reviewsNumbers[rating]++;
    console.log(reviewsNumbers);
  };
  return (
    <div className="border-2 rounded-md  ">
      <div className="flex justify-around py-8 mx-md:flex-col mx-md:items-center mx-md:gap-3">
        <ReviewVisual reviewNumber={reviewsNumbers} />
        <ReviewForm pushReview={pushReview} />
      </div>
      <div className="">
        <ReviewList reviews={reviews} />
      </div>
    </div>
  );
};
