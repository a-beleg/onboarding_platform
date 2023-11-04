import * as S from './styledProfile'
import {ProfileDropdown} from "./ProfileDropdown";
import {useRef, useState} from "react";

const Profile = () => {
  const [isDropdown, setDropdown] = useState(false)
  const button = useRef(null)

  function showDropdown() {
    setDropdown((prevState) => !prevState)
  }

  return (
    <>
      <S.Profile onClick={showDropdown} ref={button}>
        {/*<S.Avatar/>*/}
      </S.Profile>
      {isDropdown && <ProfileDropdown setDropdown={setDropdown} exceptions={button}/>}
    </>
  );
};

export {Profile};
