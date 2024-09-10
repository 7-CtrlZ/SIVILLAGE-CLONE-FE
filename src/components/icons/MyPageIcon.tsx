import React from "react";

interface IconProps {
  className?: string;
}

function MyPageIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      width="78"
      height="55"
      viewBox="0 0 78 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M39 15.5C40.1046 15.5 41 14.6046 41 13.5C41 12.3954 40.1046 11.5 39 11.5C37.8954 11.5 37 12.3954 37 13.5C37 14.6046 37.8954 15.5 39 15.5Z"
        stroke="#494949"
      />
      <mask
        id="mask0_2_68"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="29"
        y="11"
        width="20"
        height="17"
      >
        <path d="M49 11H29V28H49V11Z" fill="white" />
      </mask>
      <g mask="url(#mask0_2_68)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M46.272 17.5L41.6566 29.5H36.3434L31.728 17.5H46.272Z"
          stroke="#494949"
        />
      </g>
      <path
        d="M33.1022 41.58V34.87H34.2822L36.2222 40.54H36.2422L38.1722 34.87H39.3422V41.58H38.5422V35.91H38.5122L36.5522 41.58H35.8122L33.8722 35.91H33.8422V41.58H33.1022ZM42.5912 41.58V38.94L40.3812 34.87H41.2212L43.0112 38.2H43.0312L44.8112 34.87H45.5712L43.3712 38.94V41.58H42.5912Z"
        fill="#929292"
      />
    </svg>
  );
}

export default MyPageIcon;
