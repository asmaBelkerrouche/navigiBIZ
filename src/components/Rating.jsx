import { React, useState } from "react";
import { TiStarFullOutline } from "react-icons/ti";
import "../App.css";

const Rating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  return (
    <div className="flex">
      {[...Array(5)].map((star, i) => {
        const currentRating = i + 1;
        return (
          <label key={i} htmlFor="">
            <input
              type="radio"
              name="rating"
              value={currentRating}
              // onClick={() => setRating(currentRating)}
            />
            <TiStarFullOutline
              className="star"
              // size={10}
              onClick={() => setRating(currentRating)}
              color={currentRating <= (hover || rating) ? "#FAB101" : "white"}
              onMouseEnter={() => setHover(currentRating)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default Rating;
