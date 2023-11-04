import {FC, useMemo} from "react";
import {BannerSlider} from "../BannerSlider/BannerSlider";
import {BannerProps} from "../Banner/Banner";
import {observer} from "mobx-react-lite";
import {useStore} from "../../../helpers/ioc";
import {UserStore} from "../../../stores/UserStore";

type BannersContainerProps = {
  handleClick?: () => void
}
export const BannersContainer: FC<BannersContainerProps> = observer((handleClick) => {

  const {banners} = useStore(UserStore);

  const getBanners = useMemo<BannerProps[]>(() => {
    return banners.map((banner, index) => {
      return {
        title: banner.title,
        description: banner.description,
        image: banner.image,
        buttonText: banner.buttonText,
      }
    })
  }, [banners]);

  if (!getBanners.length) return (<div style={{height: 50}}/>)

  return (
    <BannerSlider handleClick={handleClick?.handleClick} slides={getBanners}/>
  )
})