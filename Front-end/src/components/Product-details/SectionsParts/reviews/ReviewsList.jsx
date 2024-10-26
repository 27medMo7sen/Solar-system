import { ReviewItem } from "./ReviewItem";
export const ReviewList = ({ reviews }) => {
  console.log(reviews);
  return (
    <div className="flex flex-col">
      <div className="flex justify-between p-2 items-center mb-4 bg-Secondary-button/20">
        <span className="text-sm text-black font-semibold">
          1-8 of 12 Reviews
        </span>
        <select className="rounded p-1 text-sm">
          <option>Sort by</option>
          <option>Most Recent</option>
          <option>Highest Rated</option>
          <option>Lowest Rated</option>
        </select>
      </div>

      {reviews.map((review, index) => (
        <ReviewItem key={index} review={review} />
      ))}

      <div className="mt-4">
        <button className="mr-4">Previous</button>
        <button>Next</button>
      </div>
    </div>
  );
};
