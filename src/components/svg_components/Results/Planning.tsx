import {SVGProps} from "react"

const Planning = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
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
            d="M27.275 14.227H14.079a5.278 5.278 0 0 0-5.278 5.278v29.03a5.279 5.279 0 0 0 5.278 5.279h29.03a5.279 5.279 0 0 0 5.279-5.278V35.34m-3.732-24.845a5.277 5.277 0 1 1 7.464 7.464l-22.66 22.66h-7.463v-7.464l22.66-22.66Z"
        />
    </svg>
)
export default Planning
