import React, { useState } from "react";
export const ReviewForm = ({ pushReview }) => {
  const [review, setReview] = useState("");
  const handleReview = (e) => {
    setReview(e.target.value);
  };
  const ratingHandler = (star) => {
    setRating(star);
  };
  const [rating, setRating] = useState(0);
  return (
    <div className="flex flex-col  w-full">
      <textarea
        placeholder="add your review"
        onChange={handleReview}
        value={review}
        className="w-96 h-40 border-2 border-border-color rounded-lg p-2"
      />
      <div className="flex items-center">
        <span>Rate us: </span>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`text-black text-2xl cursor-pointer ${
              star <= rating ? "text-Primary-button" : ""
            }`}
            onClick={() => {
              ratingHandler(star);
            }}
          >
            ★
          </span>
        ))}
      </div>

      <button
        disabled={review === "" || rating === 0}
        onClick={() => {
          pushReview(review, rating);
          setRating(0);
          setReview("");
        }}
        className="bg-Primary-button hover:bg-Primary-button-hover text-white font-semibold rounded-lg p-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        Submit
      </button>
    </div>
  );
};
