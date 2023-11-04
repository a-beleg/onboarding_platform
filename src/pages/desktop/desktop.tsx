import React, {FC, useState} from "react";
import {LayoutWithSidebar} from "../../components/LayoutWithSidebar";
import {SectionTitle} from "../../ui/Typography";
import TabPrograms from "../../components/SectionTabs/TabPrograms/TabPrograms";
import {useStore} from "../../helpers/ioc";
import {UserStore} from "../../stores/UserStore";
import {observer} from "mobx-react-lite";
import SectionUpcomingEvents from "../../components/SectionUpcomingEvents/SectionUpcomingEvents";
import {BannersContainer} from "../../components/Banners/BannersContainer/BannersContainer";
import {AnimatePresence} from "framer-motion";
import BannerModal from "../../components/Banners/BannerModal/BannerModal";


const Programs: FC = observer(() => {
  const {programs, events, regUserToEvent} = useStore(UserStore);
  const [modal, setModal] = useState(false);

  const handleClick = () => {
    setModal(true);
  }

  return (
    <LayoutWithSidebar>
      <BannersContainer handleClick={handleClick}/>
      <SectionTitle>Программы</SectionTitle>
      <TabPrograms programs={programs}/>
      <SectionUpcomingEvents events={events} handleReg={regUserToEvent}/>
      <AnimatePresence>
        {modal &&
            <BannerModal close={() => setModal(false)}/>}
      </AnimatePresence>
    </LayoutWithSidebar>
  );
});

export default Programs;