import React from 'react';
import {Header} from "../../styledPage";
import {SectionTitle} from "../../../ui/Typography";
import SectionUser from "../../../components/SectionUser/SectionUser";
import {useStore} from "../../../helpers/ioc";
import {observer} from "mobx-react-lite";
import {UserStore} from "../../../stores/UserStore";
import SectionTabs from "../../../components/SectionTabs/SectionTabs";
import TabEducational from "../../../components/SectionTabs/TabEducational/TabEducational";
import TabResults from "../../../components/SectionTabs/TabResults/TabResults";

const UserProfile = observer(() => {

    const {user, education, updateUser, updateEducation} = useStore(UserStore);

    const tabs = [
        {
            label: `Учебное заведение`,
            key: 'edu',
            tabContent: <TabEducational onUpdate={updateEducation} education={education}/>,
        },
        {
            label: `Сертификаты`,
            key: 'docs',
            tabContent: <TabResults results={user?.documents || []}/>,
        }
    ]

    if (!user) {
        return null;
    }

    return (
        <>
            <Header>
                <SectionTitle>Личный кабинет</SectionTitle>
            </Header>
            <SectionUser user={user} onUpdate={updateUser}/>
            <SectionTabs tabs={tabs}/>
        </>
    );
});

export default UserProfile;