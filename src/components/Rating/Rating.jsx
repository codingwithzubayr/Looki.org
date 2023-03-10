import React, { useState } from "react";

const Rating = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleRatingClick = (value) => {
    setRating(value);
  };

  const handleMouseEnter = (value) => {
    setHoverRating(value);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const getStarClassName = (value) => {
    if (value <= (hoverRating || rating)) {
      return "filled";
    }
    return "";
  };

  const getRatingMessage = () => {
    switch (rating) {
      case 1:
        return "Poor";
      case 2:
        return "Fair";
      case 3:
        return "Average";
      case 4:
        return "Good";
      case 5:
        return "Excellent";
      default:
        return "";
    }
  };

  return (
    <div>
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <label className="rating_stars" key={index}>
            <input
              className="input-rate"
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => handleRatingClick(ratingValue)}
            />
            <span
              className={getStarClassName(ratingValue)}
              onMouseEnter={() => handleMouseEnter(ratingValue)}
              onMouseLeave={() => handleMouseLeave()}
            >
              &#9733;
            </span>
          </label>
        );
      })}
      <div className="rating-message">
        {getRatingMessage() ? getRatingMessage() : "Match Stars"}
      </div>
    </div>
  );
};

export default Rating;
