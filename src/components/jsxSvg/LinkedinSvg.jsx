import * as React from "react";
const LinkedinSvg = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <title>{"LinkedIn"}</title>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x={2} y={9} width={4} height={12} />
    <circle cx={4} cy={4} r={2} />
  </svg>
);
export default LinkedinSvg;
