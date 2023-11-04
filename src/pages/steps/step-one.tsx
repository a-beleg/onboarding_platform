import {LayoutWithSidebar} from "../../components/LayoutWithSidebar";
import {SidebarStepOne} from "../../components/SidebarStepOne";
import {FC} from "react";
import {observer} from "mobx-react-lite";
import {useStore} from "../../helpers/ioc";
import {ProfileStore} from "../../stores/ProfileStore";
import {SidebarStepTwo} from "../../components/SidebarStepTwo";
import {SidebarStepThree} from "../../components/SidebarStepThree";


const StepOne: FC = observer(() => {

    const {university, contractStatus} = useStore(ProfileStore);

    return (
        <>
            <LayoutWithSidebar>
                {localStorage.getItem('cabinet') === '/lk' ?
                    <SidebarStepThree title={'Добро пожаловать'}/>
                    :
                    <>
                        {university && contractStatus === "" && <SidebarStepOne/>}
                        {university && contractStatus === "sign_process" && <SidebarStepTwo/>}
                        {university && contractStatus === "signed" && <SidebarStepThree title={'Договор подписан!'}/>}
                    </>
                }
            </LayoutWithSidebar>
        </>

    );
});

export default StepOne;
