import { ReviewForm } from "./ReviewForm";
import { ReviewVisual } from "./ReviewsVisual";
const reviews = [
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
  // Add more reviews here...
];
const reviewsNumbers = {
  total: 400,
  5: 200,
  4: 100,
  3: 50,
  2: 30,
  1: 20,
};
export const MainReviews = () => {
  const pushReview = (review, rating) => {
    reviews.push(review);
    reviewsNumbers.total++;
    reviewsNumbers[rating]++;
    console.log(reviewsNumbers);
  };
  return (
    <div className="flex flex-col gap-5 px-4 border">
      <div className="flex justify-between items-start mt-3 ">
        <ReviewVisual reviewNumber={reviewsNumbers} />
        <ReviewForm pushReview={pushReview} />
      </div>
    </div>
  );
};
