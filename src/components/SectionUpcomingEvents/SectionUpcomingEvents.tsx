import React, {FC, useState} from 'react';
import moment from 'moment/moment';
import {AnimatePresence} from 'framer-motion';
import {Header} from '../../pages/styledPage';
import {SectionTitle} from '../../ui/Typography';
import Event from '../Event/Event';
import EventModal from '../EventModal/EventModal';
import {EventsProps} from '../SectionTabs/TabEvents/TabEvents';
import {EventItem} from "../../api/events/getEvents";

const SectionUpcomingEvents: FC<EventsProps> = ({events, handleReg}) => {
    const [modal, setModal] = useState(false);

    const onReg = async (id: string, noClickFunction?: boolean) => {
        if (noClickFunction || !handleReg) {
            return;
        }

        try {
            await handleReg(id);
            setModal(true);
        } catch (reason) {
            return;
        }
    };


    const filteredEvents = (userEvents: EventItem[], text: string): JSX.Element[] =>
        userEvents
            .filter((event) => moment(event.date_time).isAfter())
            .slice(0, 3)
            .map((event) => (
                <Event
                    key={event.id}
                    event={{...event}}
                    onClick={() => onReg(event.id)}
                    buttonText={text}
                />
            ));

    // Предстоящие
    const futureEvents = filteredEvents(events, 'Регистрация');

    return futureEvents.length === 0 ? null : (
        <>
            <Header>
                <SectionTitle>Ближайшие мероприятия</SectionTitle>
            </Header>
            {futureEvents}
            <AnimatePresence>{modal && <EventModal close={() => setModal(false)}/>}</AnimatePresence>
        </>
    );
};

export default SectionUpcomingEvents;
