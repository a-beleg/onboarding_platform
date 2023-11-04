import React from 'react';
import {LayoutWithSidebar} from "../../components/LayoutWithSidebar";
import {AlertWrapper, Header} from "../styledPage";
import {SectionTitle} from "../../ui/Typography";
import {useStore} from "../../helpers/ioc";
import {UserStore} from "../../stores/UserStore";
import {observer} from "mobx-react-lite";
import {EventTitle} from "../../components/Event/styledEvent";
import TabEvents from "../../components/SectionTabs/TabEvents/TabEvents";

const Events = observer(() => {
    const {events, userEvents, regUserToEvent} = useStore(UserStore);

    return (
        <LayoutWithSidebar>
            <Header>
                <SectionTitle>Мероприятия</SectionTitle>
            </Header>
            {events && events.length !== 0 ? (
                <TabEvents
                    events={events}
                    userEvents={userEvents}
                    handleReg={regUserToEvent}
                />
            ) : (
                <AlertWrapper>
                    <EventTitle>
                        Нет мероприятий доступных для регистрации
                    </EventTitle>
                </AlertWrapper>
            )}

        </LayoutWithSidebar>
    );
})

export default Events;
