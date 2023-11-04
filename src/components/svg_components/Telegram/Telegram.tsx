import React, {FC} from "react";

type Props = {
    width: string;
    height: string;
    color?: string;
};

const Telegram: FC<Props> = ({ width, height, color }) => {
    return (
            <svg
                fill={color || "none"}
                width={width}
                height={height}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
            >
                <path
                    d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0Zm2.76 11.26c.15-.45.84-4.95.92-5.84.03-.27-.06-.44-.22-.52-.2-.1-.5-.05-.85.07-.47.17-6.53 2.75-6.88 2.9-.33.13-.64.29-.64.51 0 .16.09.25.35.34.26.1.93.3 1.33.4.38.11.81.02 1.06-.13.26-.16 3.23-2.16 3.45-2.33.21-.18.38.05.2.22-.17.18-2.21 2.16-2.48 2.44-.33.33-.1.68.12.81.25.16 2.06 1.37 2.33 1.57.27.2.55.28.8.28s.38-.33.51-.72Z"
                    fill={color || "currentColor"}
                />
            </svg>
    );
};

export { Telegram };
