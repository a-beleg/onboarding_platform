import {SVGProps} from "react"

const ArrowBack = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={25}
        fill="none"
        {...props}
    >
        <g stroke="#7927E1" strokeLinecap="round" clipPath="url(#a)">
            <path d="M6.323 12.965H18.5"/>
            <path strokeLinejoin="round" d="m10 7.994-4.615 5 4.615 5"/>
        </g>
        <defs>
            <clipPath id="a">
                <rect
                    width={24}
                    height={24}
                    x={24}
                    y={24.994}
                    fill="#fff"
                    rx={4}
                    transform="rotate(-180 24 24.994)"
                />
            </clipPath>
        </defs>
    </svg>
)

export {ArrowBack};
