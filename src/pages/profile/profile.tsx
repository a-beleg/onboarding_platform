import React, {FC} from "react";
import {LayoutWithSidebar} from "../../components/LayoutWithSidebar";
import VuzProfile from "./vuzProfile/vuzProfile";
import UserProfile from "./userProfile/userProfile";

const Profile: FC = () => {
    return (
        <LayoutWithSidebar>
            {localStorage.getItem('cabinet') === '/lk' ? <UserProfile/> : <VuzProfile/>}
        </LayoutWithSidebar>
    );
};

export default Profile;