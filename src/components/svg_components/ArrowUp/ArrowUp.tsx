import {FC} from "react";

type imageProps = {
  width: number;
  height: number;
}

const ArrowUp: FC<imageProps> = ({width, height}) => {
  return (
    <svg fill='none' width={width} height={height} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
      <path d='m7 14 5-5 5 5' stroke='#6D37D1' strokeLinecap='round' strokeLinejoin='round'/>
    </svg>
  );
};

export {ArrowUp};
