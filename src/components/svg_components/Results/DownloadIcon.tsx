import React from "react";

interface DownloadIconProps {
    color: string;
}

const transitionStyle = {
    transition: "stroke 0.3s"
};

export const DownloadIcon: React.FC<DownloadIconProps> = ({ color }) => (

    <svg xmlns="http://www.w3.org/2000/svg" width={25} height={24} fill="none" >
        <g stroke={color} strokeLinecap="round" clipPath="url(#a)" style={transitionStyle} >
            <path d="M4.42 13.412V17.5a2.5 2.5 0 0 0 2.5 2.5h11a2.5 2.5 0 0 0 2.5-2.5v-4.088M12.449 16.677V4.5" style={transitionStyle} />
            <path strokeLinejoin="round" d="m16.42 13.484-4 3.693-4-3.693" style={transitionStyle} />
        </g>
        <defs>
            <clipPath id="a">
                <rect width={24} height={24} x={0.419} fill={color} rx={4} style={transitionStyle} />
            </clipPath>
        </defs>
    </svg>
);

export default DownloadIcon;
