import React, {useState} from 'react';
import {Header} from "../../styledPage";
import {PageTitle} from "../../../ui/Typography";
import SectionVuz from "../../../components/SectionVuz";
import SectionDocs from "../../../components/SectionDocs/SectionDocs";
import SectionUsers from "../../../components/SectionUsers/SectionUsers";
import {AnimatePresence} from "framer-motion";
import ModalUser from "../../../components/ModalUser";
import {useStore} from "../../../helpers/ioc";
import {ProfileStore} from "../../../stores/ProfileStore";
import {observer} from "mobx-react-lite";
import {hoverStyle, RegButton as Button} from "../../../components/Event/styledEvent";

const VuzProfile = observer(() => {

    const {users, profile, university, fetchUsers, deleteUser} = useStore(ProfileStore);
    const [modal, setModal] = useState(false);

    if (!university) {
        return null;
    }

    return (<>
        <Header>
            <PageTitle>Профиль</PageTitle>
            <Button
                onClick={() => setModal(true)}
                whileHover={hoverStyle}
                whileTap={{scale: .9,}}>
                Добавить пользователя
            </Button>
        </Header>
        <SectionVuz data={university}/>
        <SectionDocs docs={university?.docs || []}/>
        <SectionUsers
            users={users || []}
            currentEmail={profile?.data.email}
            onUpdate={fetchUsers}
            onDelete={deleteUser}/>
        <AnimatePresence>
            {modal && <ModalUser
                close={() => setModal(false)}
                onSubmit={fetchUsers}/>}
        </AnimatePresence>
    </>);
});

export default VuzProfile;