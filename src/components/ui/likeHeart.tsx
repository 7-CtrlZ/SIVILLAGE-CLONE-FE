'use client';
import React, { useState } from 'react';

interface LikeHeartProps {
  isInitiallyLiked: boolean;
}

function likeHeart({ isInitiallyLiked }: LikeHeartProps) {
  const [isLiked, setIsLiked] = useState(isInitiallyLiked);

  const handleLikeClick = () => {
    setIsLiked((prev) => !prev);
  };

  return (
    <div onClick={handleLikeClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="16"
        viewBox="0 0 20 16"
        className={`transition-colors duration-200 ease-in-out ${
          isLiked ? 'black' : 'none'
        }`}
      >
        <g opacity="0.85">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.2691 1C16.2391 1 17.2091 1.37 17.9491 2.11C18.6891 2.85 19.0601 3.821 19.0601 4.791C19.0601 5.761 18.6901 6.732 17.9501 7.473L15.9001 9.521L10.1851 15.237L2.42106 7.473C1.68106 6.733 1.31006 5.762 1.31006 4.791C1.31006 3.821 1.68006 2.851 2.42006 2.111C3.16206 1.37 4.13306 1 5.10306 1C6.07306 1 7.04306 1.37 7.78306 2.11L10.1851 4.513L12.5871 2.111C13.3271 1.37 14.2981 1 15.2691 1Z"
            stroke="#131922"
            fill={`${isLiked ? 'black' : 'none'}`}
          />
        </g>
      </svg>
    </div>
  );
}

export default likeHeart;
