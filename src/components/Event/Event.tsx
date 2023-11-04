import React, {FC} from "react";
import {EventItem} from "../../api/events/getEvents";
import * as S from "./styledEvent"
import {VkButton} from "./styledEvent"
import {VK} from "../svg_components/VK";
import {ArrowTo} from "../svg_components/ArrowTo";


export type EventProps = {
    event: EventItem,
    onClick: () => void;
    buttonText: string,
}


const Event: FC<EventProps> = ({
                                   event,
                                   onClick,
                                   buttonText,
                               }) => {

    return (
        <S.Event>
            <S.LeftColumn>
                <S.LocationWrapper>
                    <S.EventType>Онлайн</S.EventType>
                    <S.EventLocation>Москва</S.EventLocation>
                </S.LocationWrapper>
                <S.DateWrapper>
                    <S.EventDate>{event.date} </S.EventDate>
                    <S.EventTime>{event.time} </S.EventTime>
                </S.DateWrapper>
                <S.ImageWrapper userPickUrl={event.image}/>
                {buttonText === 'none' && (
                    <VkButton
                        target="_blank"
                        href={event.meta?.links.vk ?? undefined}
                        whileTap={{scale: .9,}}>
                        <VK width={'17'} height={'10'} color={'white'}/>
                        <ArrowTo color={'white'}/>
                    </VkButton>)}
            </S.LeftColumn>
            <S.RightColumn>
                <S.EventTitle>{event.title}</S.EventTitle>
                <S.EventDescription>{event.description}</S.EventDescription>
                <S.RegButton
                    hide={buttonText === 'none'}
                    href={event?.link}
                    target="_blank"
                    onClick={onClick}
                    whileHover={S.hoverStyle}
                    whileTap={{scale: .9,}}>
                    {buttonText}
                </S.RegButton>
            </S.RightColumn>

        </S.Event>

    );
};

export default Event