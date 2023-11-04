import {SVGProps} from "react"

const Vision = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={47}
        height={52}
        fill="none"
        {...props}
    >
        <path
            stroke="#7927E1"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M26.172 1.504V20.62h19.116L20.71 50.66V31.544H1.594l24.578-30.04Z"
        />
    </svg>
)
export default Vision
