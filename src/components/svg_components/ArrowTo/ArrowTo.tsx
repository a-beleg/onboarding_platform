import {SVGProps} from "react"

type Props = JSX.IntrinsicAttributes & SVGProps<SVGSVGElement> & {
    color?: string;
};

const ArrowTo = ({ color = "#fff", ...props }: Props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <g stroke={color} strokeLinecap="round" clipPath="url(#a)">
            <path d="m15.995 7.707-8.289 8.92" />
            <path strokeLinejoin="round" d="M16.963 13.798V7.013l-7.325-.022" />
        </g>
        <defs>
            <clipPath id="a">
                <rect width={24} height={24} fill={color} rx={4} />
            </clipPath>
        </defs>
    </svg>
);

export { ArrowTo };
