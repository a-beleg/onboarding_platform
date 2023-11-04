type Props = {
    width: string;
    height: string;
    color?: string;
};

const VK = ({ width, height, color }: Props) => {
    const fillColor = color || 'currentColor';

    return (
        <svg
            fill={fillColor}
            xmlns='http://www.w3.org/2000/svg'
            width={width}
            height={height}
            viewBox='0 0 18 10'
        >
            <path
                d='M17.9 9.03a9.15 9.15 0 0 0-1.85-2.13l-.02-.02-.01-.02H16c-.4-.37-.66-.62-.76-.74-.2-.25-.24-.5-.13-.74.07-.2.35-.6.84-1.2l.6-.77C17.66 2 18.13 1.1 17.98.72l-.05-.09c-.04-.05-.14-.1-.3-.15a1.51 1.51 0 0 0-.6-.02l-2.69.02a.36.36 0 0 0-.19 0l-.12.03-.05.02-.03.03a.41.41 0 0 0-.1.1.62.62 0 0 0-.1.15 14.72 14.72 0 0 1-1.64 3.04 4.74 4.74 0 0 1-.84.92c-.11.08-.2.12-.25.1a7 7 0 0 1-.16-.03.61.61 0 0 1-.2-.23.98.98 0 0 1-.12-.35 3.82 3.82 0 0 1-.02-.8v-.4a22.02 22.02 0 0 1 .04-1.39l.01-.5c0-.18 0-.32-.03-.42a1.4 1.4 0 0 0-.1-.29.5.5 0 0 0-.2-.22 1.1 1.1 0 0 0-.3-.12A6.4 6.4 0 0 0 8.65 0a6.3 6.3 0 0 0-2.24.22c-.13.07-.25.16-.36.27-.1.14-.12.21-.04.22.37.06.64.19.8.4l.05.1a4.13 4.13 0 0 1 .22 1.09 6.92 6.92 0 0 1-.22 2.31l-.11.2a.16.16 0 0 1-.05.05.72.72 0 0 1-.25.04.6.6 0 0 1-.32-.13c-.13-.08-.26-.2-.39-.35a4.7 4.7 0 0 1-.45-.62c-.17-.27-.35-.59-.53-.95l-.15-.27A22.52 22.52 0 0 1 3.81.9a.6.6 0 0 0-.23-.3L3.53.58a1.02 1.02 0 0 0-.37-.14L.6.46C.34.46.16.52.07.63L.03.7A.29.29 0 0 0 0 .83c0 .07.02.15.06.25a29.78 29.78 0 0 0 3.36 5.78 20.28 20.28 0 0 0 .93 1.1l.23.23a11.31 11.31 0 0 0 1.63 1.13 5.32 5.32 0 0 0 2.6.63h1.08a.76.76 0 0 0 .5-.2l.03-.05a.9.9 0 0 0 .1-.42c0-.26.02-.5.07-.7.04-.22.1-.37.15-.48a1.17 1.17 0 0 1 .37-.4.62.62 0 0 1 .07-.03c.15-.05.33 0 .53.14s.4.32.57.53l.64.7c.25.27.47.46.66.59l.19.1c.12.08.28.15.48.2.2.07.38.09.53.05l2.4-.03c.24 0 .42-.04.55-.12.13-.07.21-.16.24-.25.02-.09.02-.2 0-.3-.02-.12-.04-.2-.07-.25Z'
            />
        </svg>
    );
};

export { VK };
