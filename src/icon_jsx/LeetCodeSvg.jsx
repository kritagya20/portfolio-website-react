import React from "react";

function LeetCodeSvg(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* Left chevron */}
      <path d="M13.2 3L5 11.2a1.2 1.2 0 000 1.7L9.1 17" />

      {/* Horizontal bar */}
      <path d="M9.2 12h11.3" />

      {/* Bottom slash (moved closer) */}
      <path d="M13.2 21l3.2-3.2" />
    </svg>
  );
}

export default LeetCodeSvg;