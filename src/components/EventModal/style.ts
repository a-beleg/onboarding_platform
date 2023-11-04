import styled from "styled-components";
import {theme} from "../../styles/theme";
import {Button} from "../../ui/Button/Button";
import {Overlay} from "../Modal/Overlay";

export const StyledOverlay = styled(Overlay)`
  z-index: 3;
  overflow-y: auto;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 460px;
  max-width: calc(100vw - 60px);
  position: fixed;
  top: 62px;
  right: 105px;
  background-color: ${theme.colors.CommonSecondary60};
  border-radius: 20px;
  padding: 32px;

  @media (max-width: ${theme.breakpoints.lg}px) {
    right: 68px;
  }

  @media (max-width: ${theme.breakpoints.md}px) {
    top: 30px;
    right: 30px;
  }

  @media (max-width: ${theme.breakpoints.sm}px) {
    top: 87px;
    right: 16px;
    max-width: calc(100vw - 32px);
    padding: 16px;
  }
`;


export const Image = styled.div`
  width: 200px;
  height: 130px;
  background-position: center;
  background-image: url("data:image/svg+xml,%3Csvg width='200' height='131' viewBox='0 0 200 131' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M77.6001 20.5564L89.7001 12.8564L90.9001 26.5564L77.6001 20.5564Z' fill='white'/%3E%3Cpath d='M91.7 27.7564L76 20.6564L90.4 11.5564L91.7 27.7564ZM79.1 20.4564L90 25.3564L89.1 14.1564L79.1 20.4564Z' fill='url(%23paint0_linear_30_12580)'/%3E%3Cpath d='M105.3 25.1564C105 25.1564 104.8 25.0564 104.7 24.7564C104.5 24.3564 104.6 23.9564 104.9 23.7564L115.9 17.0564C116.3 16.8564 116.7 16.9564 116.9 17.2564C117.1 17.6564 117 18.0564 116.7 18.2564L105.7 24.9564C105.5 25.1564 105.4 25.1564 105.3 25.1564Z' fill='url(%23paint1_linear_30_12580)'/%3E%3Cpath d='M106 113.356C105.9 113.356 105.8 113.356 105.7 113.256C105.3 113.056 105.2 112.656 105.4 112.256L110 103.356C110.2 102.956 110.6 102.856 111 103.056C111.4 103.256 111.5 103.656 111.3 104.056L106.7 112.956C106.6 113.156 106.3 113.356 106 113.356Z' fill='url(%23paint2_linear_30_12580)'/%3E%3Cpath d='M133.9 124.956C133.6 124.956 133.3 124.756 133.2 124.456L128.4 112.856C128.2 112.456 128.4 112.056 128.8 111.856C129.2 111.656 129.6 111.856 129.8 112.256L134.6 123.856C134.8 124.256 134.6 124.656 134.2 124.856C134.1 124.856 134 124.956 133.9 124.956Z' fill='url(%23paint3_linear_30_12580)'/%3E%3Cpath d='M98.8001 13.0564C98.5001 13.0564 98.3001 12.9564 98.1001 12.6564L94.7001 6.65637C94.5001 6.25637 94.6001 5.85637 95.0001 5.65637C95.4001 5.45637 95.8001 5.55636 96.0001 5.95636L99.4001 11.9564C99.6001 12.3564 99.5001 12.7564 99.1001 12.9564C99.1001 13.0564 98.9001 13.0564 98.8001 13.0564Z' fill='url(%23paint4_linear_30_12580)'/%3E%3Cpath d='M101.4 96.2564L37.9 108.056L29.8 64.8564L26 44.5564L48.1 40.4564L89.5 32.7564L92.6 49.3564C84.7 50.8564 79.3 56.9564 81 66.2564C82.5 74.1564 90.1 79.3564 97.9 77.8564L101.4 96.2564Z' fill='%237927E1'/%3E%3Cpath d='M97.5001 94.3564C97.4001 94.3564 97.2001 94.3564 97.1001 94.2564L29.5001 47.8564C29.2001 47.6564 29.1001 47.1564 29.3001 46.8564C29.5001 46.5564 30.0001 46.4564 30.3001 46.6564L97.9001 93.0564C98.2001 93.2564 98.3001 93.7564 98.1001 94.0564C98.0001 94.2564 97.8001 94.3564 97.5001 94.3564Z' fill='white'/%3E%3Cpath d='M40.4999 104.956C40.3999 104.956 40.1999 104.956 40.0999 104.856C39.7999 104.656 39.7 104.156 39.9 103.856L86.3 36.2564C86.5 35.9564 87 35.8564 87.3 36.0564C87.6 36.2564 87.6999 36.7564 87.4999 37.0564L41.0999 104.656C40.9999 104.856 40.6999 104.956 40.4999 104.956Z' fill='white'/%3E%3Cpath d='M26.8999 45.1564L47.2999 41.3564C47.0999 51.7564 40.1999 60.8564 30.2999 63.8564L26.8999 45.1564Z' fill='white'/%3E%3Cpath d='M46.6 42.2564C46 51.6564 39.9 59.7564 31 62.8564L27.8 45.7564L46.6 42.2564ZM48.1 40.4564L26 44.5564L29.8 64.8564C40.3 61.9564 48.1 52.3564 48.1 40.8564C48.1 40.7564 48.1 40.5564 48.1 40.4564Z' fill='url(%23paint5_linear_30_12580)'/%3E%3Cpath d='M152.597 20.3267L164.931 83.7385L101.519 96.0716L97.9487 77.7156C90.0959 79.2429 82.4745 74.1034 80.9471 66.2506C79.1525 57.0235 84.5593 50.7764 92.4122 49.249L89.1857 32.6599L152.597 20.3267Z' fill='white'/%3E%3Cpath d='M165.137 83.9612L101.12 96.412L97.5981 78.3014C89.678 79.4398 82.1208 74.1753 80.5951 66.3306C78.9187 57.7111 83.4057 50.8077 91.8718 48.8595L88.6696 32.3953L152.686 19.9445L165.137 83.9612ZM102.291 94.6768L163.402 82.791L151.516 21.6798L90.4049 33.5655L93.5883 49.9329L92.8135 50.0835C84.6782 51.6658 80.4656 57.9128 82.0478 66.048C83.4794 73.4085 90.6518 78.2452 98.0123 76.8137L98.7871 76.663L98.9378 77.4378L102.291 94.6768Z' fill='url(%23paint6_linear_30_12580)'/%3E%3Cpath d='M134.817 50.7547C141.079 59.7985 138.063 68.0901 130.745 73.1564C123.428 78.2227 113.41 76.4017 108.344 69.0845C103.277 61.7672 105.098 51.749 112.416 46.6827C119.733 41.6164 129.751 43.4374 134.817 50.7547Z' fill='white'/%3E%3Cpath d='M131.201 73.8142C123.555 79.1082 113.062 77.1291 107.825 69.5651C102.588 62.0012 104.51 51.4265 112.074 46.1894C119.638 40.9523 130.213 42.8745 135.45 50.4384C141.313 58.9067 139.751 67.894 131.201 73.8142ZM112.871 47.3404C105.883 52.179 104.22 61.7229 109.001 68.6291C113.783 75.5353 123.384 77.2804 130.29 72.4987C138.183 67.0339 139.624 59.1028 134.16 51.2101C129.378 44.3039 119.777 42.5587 112.871 47.3404Z' fill='url(%23paint7_linear_30_12580)'/%3E%3Cpath d='M121.852 69.0965L113.332 61.0078C113.023 60.7359 113.042 60.2362 113.313 59.9263C113.585 59.6164 114.085 59.6354 114.395 59.9073L121.194 66.3897L126.689 50.7867C126.822 50.4515 127.233 50.1669 127.626 50.3819C127.961 50.5147 128.245 50.9258 128.03 51.3179L121.852 69.0965Z' fill='url(%23paint8_linear_30_12580)'/%3E%3Cpath d='M144.197 22.3719C143.274 25.0788 141.459 27.5518 138.91 29.3165C132.99 33.4151 125.066 32.3339 120.423 27.0342L144.197 22.3719Z' fill='white'/%3E%3Cpath d='M139.308 29.892C133.142 34.1614 124.775 33.1435 119.904 27.5149L119 26.5599L145.316 21.3536L144.867 22.6375C143.836 25.5405 141.857 28.1273 139.308 29.892ZM121.903 27.5907C126.387 31.7836 133.332 32.3272 138.429 28.7979C140.402 27.4317 141.952 25.6291 142.913 23.504L121.903 27.5907Z' fill='url(%23paint9_linear_30_12580)'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_30_12580' x1='76' y1='22.1153' x2='91.9924' y2='22.0228' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%236AC5F5'/%3E%3Cstop offset='0.17641' stop-color='%236F86E2'/%3E%3Cstop offset='0.43166' stop-color='%234E51D2'/%3E%3Cstop offset='0.681055' stop-color='%23773DCB'/%3E%3Cstop offset='1' stop-color='%23A32AC5'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint1_linear_30_12580' x1='104.596' y1='22.2996' x2='117.234' y2='22.1855' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%236AC5F5'/%3E%3Cstop offset='0.17641' stop-color='%236F86E2'/%3E%3Cstop offset='0.43166' stop-color='%234E51D2'/%3E%3Cstop offset='0.681055' stop-color='%23773DCB'/%3E%3Cstop offset='1' stop-color='%23A32AC5'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint2_linear_30_12580' x1='105.3' y1='109.735' x2='111.514' y2='109.713' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%236AC5F5'/%3E%3Cstop offset='0.17641' stop-color='%236F86E2'/%3E%3Cstop offset='0.43166' stop-color='%234E51D2'/%3E%3Cstop offset='0.681055' stop-color='%23773DCB'/%3E%3Cstop offset='1' stop-color='%23A32AC5'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint3_linear_30_12580' x1='128.322' y1='120.367' x2='134.797' y2='120.349' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%236AC5F5'/%3E%3Cstop offset='0.17641' stop-color='%236F86E2'/%3E%3Cstop offset='0.43166' stop-color='%234E51D2'/%3E%3Cstop offset='0.681055' stop-color='%23773DCB'/%3E%3Cstop offset='1' stop-color='%23A32AC5'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint4_linear_30_12580' x1='94.6001' y1='10.4448' x2='99.5914' y2='10.4253' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%236AC5F5'/%3E%3Cstop offset='0.17641' stop-color='%236F86E2'/%3E%3Cstop offset='0.43166' stop-color='%234E51D2'/%3E%3Cstop offset='0.681055' stop-color='%23773DCB'/%3E%3Cstop offset='1' stop-color='%23A32AC5'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint5_linear_30_12580' x1='26' y1='56.3599' x2='48.5116' y2='56.2383' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%236AC5F5'/%3E%3Cstop offset='0.17641' stop-color='%236F86E2'/%3E%3Cstop offset='0.43166' stop-color='%234E51D2'/%3E%3Cstop offset='0.681055' stop-color='%23773DCB'/%3E%3Cstop offset='1' stop-color='%23A32AC5'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint6_linear_30_12580' x1='82.6451' y1='76.8706' x2='162.143' y2='60.8069' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%236AC5F5'/%3E%3Cstop offset='0.17641' stop-color='%236F86E2'/%3E%3Cstop offset='0.43166' stop-color='%234E51D2'/%3E%3Cstop offset='0.681055' stop-color='%23773DCB'/%3E%3Cstop offset='1' stop-color='%23A32AC5'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint7_linear_30_12580' x1='110.728' y1='73.7582' x2='138.751' y2='54.1074' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%236AC5F5'/%3E%3Cstop offset='0.17641' stop-color='%236F86E2'/%3E%3Cstop offset='0.43166' stop-color='%234E51D2'/%3E%3Cstop offset='0.681055' stop-color='%23773DCB'/%3E%3Cstop offset='1' stop-color='%23A32AC5'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint8_linear_30_12580' x1='117.399' y1='66.9148' x2='132.342' y2='56.3769' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%236AC5F5'/%3E%3Cstop offset='0.17641' stop-color='%236F86E2'/%3E%3Cstop offset='0.43166' stop-color='%234E51D2'/%3E%3Cstop offset='0.681055' stop-color='%23773DCB'/%3E%3Cstop offset='1' stop-color='%23A32AC5'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint9_linear_30_12580' x1='124.306' y1='34.2229' x2='144.76' y2='19.7482' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%236AC5F5'/%3E%3Cstop offset='0.17641' stop-color='%236F86E2'/%3E%3Cstop offset='0.43166' stop-color='%234E51D2'/%3E%3Cstop offset='0.681055' stop-color='%23773DCB'/%3E%3Cstop offset='1' stop-color='%23A32AC5'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E%0A");
`;

export const Title = styled.p`
  width: 100%;
  font-family: 'Roboto',serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 135%;
  text-align: center;
  letter-spacing: -0.03em;
  color:${theme.colors.CommonPrimaryDark80};
`;

export const ButtonClose = styled(Button)`
  font-size: 0;
  padding: 0;
  width: 56px;
  height: 56px;
  border-radius: 28px;
  position: absolute;
  top: 32px;
  right: 32px;

  &::before, &::after {
    content: '';
    width: 24px;
    height: 1px;
    background-color: ${theme.colors.CommonPrimaryLight100};
    transform-origin: center;
    position: absolute;
    top: 50%;
    left: 50%;
  }

  &::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }

  @media (max-width: ${theme.breakpoints.sm}px) {
    top: 16px;
    right: 16px;
  }
`;

