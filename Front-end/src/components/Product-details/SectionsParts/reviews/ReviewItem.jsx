import { BiUpvote } from "react-icons/bi";
import { BiDownvote } from "react-icons/bi";

export const ReviewItem = ({ review }) => {
  return (
    <div className="border-t w-full p-2  border-gray-200 py-4">
      <div className="flex items-center mb-2">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`text-lg ${
              i < review.rating ? "text-orange-500" : "text-gray-300"
            }`}
          >
            ★
          </span>
        ))}
        <span className="ml-2 text-sm">
          {review.author} • {review.timeAgo}
        </span>
      </div>
      <p className="text-black font-semibold mb-4">{review.text}</p>
      <div className="flex items-center text-sm text-gray-500">
        <button className="mr-4 text-green-500">
          <BiUpvote />
          {review.yesVotes}
        </button>
        <button className="mr-4 text-red-500">
          <BiDownvote /> {review.noVotes}
        </button>
        <button className="text-red-500">Report</button>
      </div>
    </div>
  );
};
