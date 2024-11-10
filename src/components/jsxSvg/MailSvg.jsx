import React from "react";

function MailSvg(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill="CurrentColor"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 7l6.2 4.65a3 3 0 003.6 0L20 7"
      ></path>
      <rect
        width="18"
        height="14"
        x="3"
        y="5"
        strokeLinecap="round"
        strokeWidth="2"
        rx="2"
      ></rect>
    </svg>
  );
}

export default MailSvg;