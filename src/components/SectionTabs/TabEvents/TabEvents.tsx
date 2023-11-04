import React, {FC, useState} from 'react';
import {EventItem} from "../../../api/events/getEvents";
import Event from "../../Event/Event";
import {AlertWrapper} from "../../../pages/styledPage";
import {EventTitle} from "../../Event/styledEvent";
import SectionTabs from "../SectionTabs";
import moment from "moment";
import {TMonth, TYear} from "../../EventFilters/EventFilters";
import EventModal from "../../EventModal/EventModal";
import {AnimatePresence} from "framer-motion";


export type EventsProps = {
    events: EventItem[];
    userEvents?: EventItem[];
    handleReg?: (event_id: string) => Promise<void>;
}

const TabEvents: FC<EventsProps> = ({events, userEvents, handleReg}) => {

        const [filterMonths] = useState<TMonth[]>([])
    const monthsValues = filterMonths.map(month => month.value)

    const [filterYears] = useState<TYear[]>([])
    const yearsValues = filterYears.map(year => year.value)
        const [modal, setModal] = useState(false);

        const onReg = async (id: string, noClickFunction?: boolean) => {
            if (noClickFunction) {
                return
            }
            if (!handleReg) {
                return
            }
            try {
                await handleReg(id)
            } catch (reason) {
                return
            }
            setModal(true)
        }

        const filteredEvents = (userEvents: EventItem[], text: string, isFutureEvent: boolean, months: number[], years: number[], noClickFunction?: boolean, vkButton?: JSX.Element,): JSX.Element[] => {
            return userEvents
                .filter(event => {
                    const beforeOrAfter = isFutureEvent ? moment(event.date_time).isAfter() : moment(event.date_time).isBefore();
                    const monthFilter = months.length === 0 ? true : months?.indexOf(moment(event.date_time).month()) !== -1;
                    const yearFilter = years.length === 0 ? true : years?.indexOf(moment(event.date_time).year()) !== -1;
                    return beforeOrAfter && monthFilter && yearFilter
                })
                .map((event, index) => {
                    return (
                        <Event key={event.id}
                               event={{...event}}
                               onClick={() => onReg(event.id, noClickFunction)}
                               buttonText={text}
                        />
                    );
                });
        }
        // Предстоящие
        const futureEvents = filteredEvents(events, 'Регистрация', true, monthsValues, yearsValues);
        // Запланированные
        const plannedEvents = filteredEvents(userEvents || [], 'Смотреть', true, monthsValues, yearsValues, true);
        // Прошедшие
        const pastEvents = filteredEvents(events.concat(userEvents || []), 'none', false, monthsValues, yearsValues)


        const tabs = [
            {
                label: `Предстоящие`,
                key: 'future',
                tabContent: futureEvents.length === 0 ?
                    <AlertWrapper>
                        <EventTitle>
                            Нет доступных к регистрации мероприятий
                        </EventTitle>
                    </AlertWrapper>
                    :
                    futureEvents,
            },
            {
                label: `Запланированные`,
                key: 'planned',
                tabContent: plannedEvents.length === 0 ?
                    <AlertWrapper>
                        <EventTitle>
                            Зарегестрируйтесь на мероприятия
                        </EventTitle>
                    </AlertWrapper>
                    :
                    plannedEvents,
            },
            {
                label: `Прошедшие`,
                key: 'past',
                tabContent: pastEvents.length === 0 ?
                    <AlertWrapper>
                        <EventTitle>
                            Нет прошедших мероприятий
                        </EventTitle>
                    </AlertWrapper>
                    :
                    pastEvents,
            },
        ]

        return (
            <>
                <SectionTabs
                    key={'tabs'}
                    tabs={tabs}
                    margin={'unset'}
                    padding={'unset'}
                    // filters={<EventFilters handleChangeMonth={setMonths} handleChangeYear={setYears}/>}
                />
                <AnimatePresence>
                    {modal &&
                        <EventModal close={() => setModal(false)}/>}
                </AnimatePresence>
            </>
        );
    }
;

export default TabEvents;