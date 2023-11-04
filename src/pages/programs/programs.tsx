import React, {FC} from "react";
import {LayoutWithSidebar} from "../../components/LayoutWithSidebar";
import {Header} from "../styledPage";
import {SectionTitle} from "../../ui/Typography";
import {useStore} from "../../helpers/ioc";
import {UserStore} from "../../stores/UserStore";
import {observer} from "mobx-react-lite";
import TabPrograms from "../../components/SectionTabs/TabPrograms/TabPrograms";

const Programs: FC = observer(() => {
    let {programs} = useStore(UserStore);

    return (
        <LayoutWithSidebar>
            <Header>
                <SectionTitle>Программы</SectionTitle>
            </Header>
            <TabPrograms programs={programs} />
        </LayoutWithSidebar>

    );
});

export default Programs;