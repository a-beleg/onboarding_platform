import {SVGProps} from "react"

const Communication = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={100}
    height={100}
    fill="none"
    {...props}
  >
    <path
        stroke="#7927E1"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M30.252 47.806v10.971m0-10.971V21.475a6.583 6.583 0 0 1 13.165 0m-13.166 26.33a6.583 6.583 0 1 0-13.165 0v8.778a32.914 32.914 0 0 0 65.828 0V34.64a6.583 6.583 0 1 0-13.166 0M43.417 21.475V45.61m0-24.136v-4.389a6.583 6.583 0 0 1 13.166 0v4.389M69.748 34.64V21.475a6.583 6.583 0 1 0-13.166 0M69.749 34.64v10.971M56.582 21.476V45.61"
    />
  </svg>
)
export default Communication
