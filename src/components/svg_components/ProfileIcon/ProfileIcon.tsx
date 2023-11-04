type Props = {
    className?: string;
}

const ProfileIcon = ({className}: Props) => {
    return (
        <svg width={81} height={80} viewBox="0 0 81 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <circle cx="40.5239" cy={40} r={40} fill="white" />
            <g clipPath="url(#clip0_1887_40994)">
                <circle cx="41.0013" cy="32.3333" r="7.33333" stroke="#DED6D9" strokeWidth={2} />
                <path d="M28 46.666C28 45.0092 29.3431 43.666 31 43.666H51C52.6569 43.666 54 45.0092 54 46.666V50.666C54 52.3229 52.6569 53.666 51 53.666H31C29.3431 53.666 28 52.3229 28 50.666V46.666Z" stroke="#DED6D9" strokeWidth={2} />
            </g>
            <defs>
                <clipPath id="clip0_1887_40994">
                    <rect x={17} y={16} width={48} height={48} rx={4} fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};

export { ProfileIcon };
