import {useState} from "react";
import {Colors} from "../consts/colors";

const useButtonHoover = () => {
    const [iconColor, setIconColor] = useState<string>(Colors.CommonPrimaryLight100);

    const handleButtonHover = () => {
        setIconColor(Colors.CommonPrimaryDark80);
    };

    const handleButtonLeave = () => {
        setIconColor(Colors.CommonPrimaryLight100);
    };

    return {iconColor, handleButtonHover, handleButtonLeave};
};

export default useButtonHoover;
