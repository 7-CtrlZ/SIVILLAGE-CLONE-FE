import React from 'react';

export default function FaceBookIcon({
  size = 24,
  color = '#131922',
}: {
  size?: number;
  color?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_305_25)">
        <path
          d="M17.5427 13.398L18.2039 9.08737H14.0679V6.29002C14.0679 5.11069 14.6457 3.96117 16.4982 3.96117H18.3787V0.291281C18.3787 0.291281 16.672 0 15.0405 0C11.6341 0 9.40776 2.06447 9.40776 5.80195V9.08737H5.62134V13.398H9.40776V23.8188C10.167 23.938 10.9452 24 11.7379 24C12.5306 24 13.3087 23.938 14.0679 23.8188V13.398H17.5427Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_305_25">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
