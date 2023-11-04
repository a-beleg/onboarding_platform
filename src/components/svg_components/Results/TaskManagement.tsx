import {SVGProps} from "react"

const TaskManagement = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={60}
        height={61}
        fill="none"
        {...props}
    >
      <path
          stroke="#7927E1"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.5}
          d="M22.847 12.675h-5.128a5.128 5.128 0 0 0-5.127 5.127v30.766a5.128 5.128 0 0 0 5.127 5.127h25.638a5.128 5.128 0 0 0 5.128-5.127V17.802a5.128 5.128 0 0 0-5.128-5.127H38.23m-15.383 0a5.128 5.128 0 0 0 5.128 5.127h5.127a5.127 5.127 0 0 0 5.128-5.127m-15.383 0a5.128 5.128 0 0 1 5.128-5.128h5.127a5.127 5.127 0 0 1 5.128 5.128M30.538 30.62h7.692m-7.692 10.255h7.692M22.847 30.621h.026m-.026 10.255h.026"
      />
    </svg>
)
export default TaskManagement
