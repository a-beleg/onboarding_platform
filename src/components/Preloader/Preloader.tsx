import {FC, useEffect, useState} from "react";
import styled from "styled-components";

type Props = {
    textToShow: string;
}

const TextWrapper = styled.div`
  color: #7a27e0;
  font-size: xxx-large;
  cursor: pointer;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const textToShow = `<.../>`;


const Preloader: FC<Props> = ({textToShow}) => {
    const [typedText, setTypedText] = useState<string>("");
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    useEffect(() => {
        const typingInterval = setInterval(() => {
            if (currentIndex < textToShow.length) {
                setTypedText((prevText) => prevText + textToShow[currentIndex]);
                setCurrentIndex((prevIndex) => prevIndex + 1);
            } else {
                setTypedText('');
                setCurrentIndex(0);
            }
        }, 10);

        return () => {
            clearInterval(typingInterval);
        };
    }, [textToShow, currentIndex]);

    return (
        <TextWrapper>
            <div dangerouslySetInnerHTML={{__html: typedText}}/>
        </TextWrapper>
    );
};

export default Preloader;
