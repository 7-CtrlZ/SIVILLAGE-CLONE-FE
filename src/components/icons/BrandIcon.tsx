import React from 'react';

interface IconProps {
  className?: string;
}

function BrandIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2034_3963)">
        <path d="M7 10.5H18L11.6316 19.5H20.7409" stroke="#494949" />
        <path d="M4.5 16L9.25 5L14 16" stroke="#494949" />
      </g>
      <defs>
        <clipPath id="clip0_2034_3963">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default BrandIcon;
