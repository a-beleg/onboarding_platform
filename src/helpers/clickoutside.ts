import {useEffect} from "react";

export function useOutsideAlerter(ref: any, setter: Function, exceptions?: any) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (event.target !== exceptions?.current) {
        if (ref?.current && !ref?.current?.contains(event.target)) {
          setter(false)
        }
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref]);
}
