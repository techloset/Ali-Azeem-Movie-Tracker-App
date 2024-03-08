import React, { useState } from "react";
import { SeasonPosterProps } from "../../../types/types";

const SeasonPoster: React.FC<SeasonPosterProps> = ({
  imageUrl,
  name,
  rating,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div
        className="relative rounded-tl-lg rounded-tr-lg cursor-pointer overflow-hidden transition-transform transform-gpu duration-0 mb-5 hover:scale-105"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={`https://image.tmdb.org/t/p/original/${imageUrl}`}
          alt="Season Poster"
          className="rounded-[20px] shrink-0 w-[305px] h-[202px] "
        />

        <div
          className={`absolute top-0 left-0 rounded-[20px] flex items-center space-x-1 p-2 bg-black bg-opacity-75 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="text-white font-FONTSPRING-DEMO-Caros-Bold text-15px font-bold leading-9 letter-spacing-0 text-left ">
            ⭐ {Math.round(rating)}
          </span>
        </div>
        <h3 className="font-bold text-4l leading-9 mt-2">{name}</h3>
      </div>
    </>
  );
};

export default SeasonPoster;
