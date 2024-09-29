import React from 'react';

export default function MyIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 4C11.1716 4 10.5 4.67157 10.5 5.5C10.5 6.32843 11.1716 7 12 7C12.8284 7 13.5 6.32843 13.5 5.5C13.5 4.67157 12.8284 4 12 4ZM9.5 5.5C9.5 4.11929 10.6193 3 12 3C13.3807 3 14.5 4.11929 14.5 5.5C14.5 6.88071 13.3807 8 12 8C10.6193 8 9.5 6.88071 9.5 5.5Z"
        fill="#494949"
      />
      <mask
        id="mask0_13_925"
        style={{ maskType: 'luminance' }}
        maskUnits="userSpaceOnUse"
        x="2"
        y="3"
        width="20"
        height="17"
      >
        <path d="M22 3H2V20H22V3Z" fill="white" />
      </mask>
      <g mask="url(#mask0_13_925)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 9H20L15 22H9L4 9ZM5.45603 10L9.6868 21H14.3132L18.544 10H5.45603Z"
          fill="#494949"
        />
      </g>
    </svg>
  );
}
