import styled from "styled-components";
import {Colors} from "../../consts/colors";
import {Breakpoint} from "../../ui/media-queries";
import {motion} from "framer-motion";


export const PdfWrapper = styled.div`
  position: absolute;
  top: -9999px;
  left: -9999px;
  max-width:  1300px;
  overflow: hidden;
  transform-origin: center;
`;

export const pdfStyles = {
    page: {
        objectFit: 'contain',
        width: '100%',
        padding: '32px',
    }
};

export const TopWrapper = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 2em;

  @media (max-width: ${Breakpoint.sm}px) {
    grid-template-columns: 1fr;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-bottom: 30px;
`;

export const Conventus = styled.div`
  background-size: cover;
  background-position: center;
  background-image: url("data:image/svg+xml,%3Csvg width='119' height='12' viewBox='0 0 119 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_1298_37619)'%3E%3Cpath d='M5.08025 5.97131C5.08025 8.88787 5.08025 8.71777 5.08025 11.5248C2.27451 11.5248 0 9.16049 0 6.24396C0 3.3274 2.27451 0.969604 5.08025 0.969604C5.08025 4.93782 5.08025 3.05478 5.08025 5.97131Z' fill='%23FF0014'/%3E%3Cpath d='M8.31817 11.4618C6.70401 8.05494 5.16013 4.60038 3.44336 1.24812C4.15705 0.997523 4.73072 0.981212 4.8789 0.973886C5.08887 0.956017 13.2861 0.976423 13.2861 0.976423L8.31817 11.4618Z' fill='%2300BF75'/%3E%3Cg style='mix-blend-mode:darken'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M4.92024 0.972365C4.95504 0.971578 5.00899 0.970884 5.08001 0.970276V4.56417C4.54727 3.45172 4.00455 2.34496 3.44336 1.24913C3.87007 1.09864 4.32228 1.00539 4.79151 0.978159C4.8166 0.97679 4.83817 0.975793 4.85595 0.974971C4.86427 0.974587 4.87176 0.974241 4.87839 0.973913C4.87864 0.973892 4.8789 0.973871 4.87917 0.97385C4.89285 0.973299 4.90654 0.972804 4.92024 0.972365Z' fill='%23000014'/%3E%3C/g%3E%3Cpath d='M22.9732 1.72653V3.39937C22.1802 2.7165 21.3596 2.37505 20.5116 2.37505C19.5772 2.37505 18.79 2.72053 18.15 3.41149C17.5062 4.09841 17.1842 4.93888 17.1842 5.93289C17.1842 6.91477 17.5062 7.74312 18.15 8.41792C18.7939 9.09271 19.5831 9.43009 20.5175 9.43009C21.0004 9.43009 21.4106 9.34929 21.7483 9.18769C21.9367 9.10683 22.1311 8.99774 22.3313 8.86035C22.5355 8.72297 22.7495 8.55734 22.9732 8.36337V10.0665C22.188 10.5231 21.3635 10.7514 20.4998 10.7514C19.2003 10.7514 18.0912 10.2847 17.1724 9.35133C16.2577 8.40981 15.8003 7.27437 15.8003 5.94501C15.8003 4.753 16.1831 3.6903 16.9486 2.7569C17.8909 1.61338 19.11 1.04163 20.6058 1.04163C21.4224 1.04163 22.2116 1.26992 22.9732 1.72653Z' fill='black'/%3E%3Cpath d='M26.731 5.86014C26.731 4.54287 27.2001 3.41147 28.1385 2.46595C29.0729 1.52043 30.1957 1.04767 31.507 1.04767C32.8027 1.04767 33.9137 1.52447 34.8403 2.47807C35.7708 3.43168 36.236 4.57721 36.236 5.91468C36.236 7.26023 35.7688 8.40174 34.8344 9.33917C33.896 10.2806 32.7634 10.7514 31.4364 10.7514C30.2624 10.7514 29.2083 10.3332 28.2739 9.49675C27.2453 8.57144 26.731 7.35923 26.731 5.86014ZM28.1149 5.87832C28.1149 6.91271 28.4525 7.76328 29.1278 8.43003C29.7992 9.09672 30.5746 9.43007 31.454 9.43007C32.4081 9.43007 33.2129 9.09065 33.8686 8.41183C34.5242 7.7249 34.852 6.8885 34.852 5.90257C34.852 4.90451 34.5282 4.06809 33.8803 3.39329C33.2365 2.71445 32.4395 2.37504 31.4894 2.37504C30.5432 2.37504 29.7442 2.71445 29.0925 3.39329C28.4408 4.06405 28.1149 4.89239 28.1149 5.87832Z' fill='black'/%3E%3Cpath d='M40.4941 10.5817V0.587036L47.1252 7.72695V1.22344H48.4974V11.1515L41.8663 4.02971V10.5817H40.4941Z' fill='black'/%3E%3Cpath d='M55.242 1.22345L57.7564 7.70875L60.3067 1.22345H61.8085L57.7272 11.2848L53.7402 1.22345H55.242Z' fill='black'/%3E%3Cpath d='M71.9436 2.55082H68.2981V4.79946H71.8373V6.12684H68.2981V9.25431H71.9436V10.5817H66.9258V1.22345H71.9436V2.55082Z' fill='black'/%3E%3Cpath d='M77.9668 10.5817V0.587036L84.5977 7.72695V1.22344H85.9701V11.1515L79.3386 4.02971V10.5817H77.9668Z' fill='black'/%3E%3Cpath d='M94.7639 2.55082V10.5817H93.3915V2.55082H91.3008V1.22345H96.8486V2.55082H94.7639Z' fill='black'/%3E%3Cpath d='M103.546 1.22345V6.86022C103.546 7.66429 103.674 8.25223 103.929 8.62396C104.31 9.16137 104.846 9.43008 105.537 9.43008C106.231 9.43008 106.77 9.16137 107.15 8.62396C107.405 8.26436 107.533 7.67643 107.533 6.86022V1.22345H108.905V7.24811C108.905 8.23403 108.607 9.04621 108.01 9.68467C107.339 10.3958 106.514 10.7514 105.537 10.7514C104.559 10.7514 103.737 10.3958 103.069 9.68467C102.472 9.04621 102.174 8.23403 102.174 7.24811V1.22345H103.546Z' fill='black'/%3E%3Cpath d='M118.765 2.6175L117.652 3.29633C117.443 2.92459 117.246 2.68215 117.057 2.56901C116.861 2.4397 116.608 2.37505 116.298 2.37505C115.916 2.37505 115.601 2.48617 115.349 2.70841C115.098 2.92661 114.972 3.20138 114.972 3.53271C114.972 3.98931 115.302 4.35702 115.961 4.63583L116.868 5.01767C117.607 5.32476 118.146 5.70055 118.488 6.14502C118.83 6.58545 119 7.12689 119 7.76937C119 8.63003 118.722 9.34123 118.164 9.90286C117.603 10.4686 116.906 10.7514 116.073 10.7514C115.284 10.7514 114.633 10.511 114.118 10.0302C113.612 9.54933 113.296 8.87249 113.17 7.99969L114.56 7.68454C114.623 8.23403 114.733 8.61387 114.89 8.82401C115.173 9.22806 115.585 9.43009 116.127 9.43009C116.554 9.43009 116.91 9.28261 117.192 8.98765C117.475 8.69269 117.616 8.31892 117.616 7.86638C117.616 7.68454 117.591 7.51886 117.54 7.36934C117.493 7.2158 117.416 7.07643 117.31 6.95112C117.208 6.82184 117.075 6.70265 116.91 6.59356C116.745 6.48038 116.549 6.37333 116.321 6.27229L115.444 5.89652C114.199 5.35507 113.577 4.56309 113.577 3.52059C113.577 2.81751 113.838 2.22959 114.36 1.75683C114.882 1.28003 115.532 1.04163 116.309 1.04163C117.358 1.04163 118.176 1.56692 118.765 2.6175Z' fill='black'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_1298_37619'%3E%3Crect width='119' height='11' fill='white' transform='translate(0 0.540894)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A");
  `;

export const PdfTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PdfCompetentions = styled.p`
  font-family: 'Roboto',serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 100%;
  letter-spacing: -0.03em;
  color: #7927E1;
  `;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const GridItem = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TopTitle = styled.h3`
  margin: 0;
  font-family: "Caveat", cursive;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 135%;
  letter-spacing: -0.03em;
  color: ${(props) => props.color || Colors.TextPrimaryDark80};
  white-space: nowrap;
`;

export const TopParagraph = styled.p`
  margin-bottom: 16px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 135%;
  color: ${Colors.TextDisableDark};
  white-space: pre-line;

`;

export const DownloadButton = styled(motion.a)<{ width?: string }>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 24px 12px;
  gap: 10px;
  width: ${({width}) => (width ? width : "372px")};
  height: 46px;
  background: ${Colors.TextPrimaryDark80};
  border-radius: 40px;
  flex: none;
  order: 0;
  flex-grow: 0;
  color: ${Colors.TextPrimaryLight100};
  text-decoration: none;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out,
    width 0.3s ease-in-out, height 0.3s ease-in-out;

  &:hover {
    border: 1px solid ${Colors.TextPrimaryDark80};
    background-color: ${Colors.TextPrimaryLight100};
    color: ${Colors.TextPrimaryDark80};
  }
}`;

export const Section = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  gap: 30px;
  align-items: flex-start;
  padding: 0 0 16px;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: calc(2% + 10px); 
    width: calc(95% - 10px); 
    height: 100%;
    border-bottom: 0.5px solid #b5adc2;
  }
`;

export const Quote = styled.p`
  font-family: 'Roboto',serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 135%;
  color: #7927E1;
  flex: none;
  order: 0;
  flex-grow: 0;
  text-align: justify;;
`;

export const PdfQoute = styled(Quote)`
  margin: 0;
  font-size: 21px;
`;


export const TabWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  border-radius: 16px;
  padding: 16px 0;
  background: #FBF9F9;
  margin-bottom: 1.3em;
`;

export const SectionLeft = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  align-items: flex-start;
  padding: 0 30px;
  gap: 12px;
`;

export const SectionTitle = styled.h3`
  margin: 0;
  font-family: 'Roboto', serif;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 130%;
  display: flex;
  color: #5000B6;
`;


export const SectionIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SectionRight = styled.div`
  margin: 0;
  display: grid;
  width: 100%;
`;

export const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const SkillTitle = styled.h3`
  margin: 0;
  font-family: 'Roboto',serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 130%;
  display: flex;
  align-items: center;
  color: #4d3b6d;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const SkillDescription = styled.p`
  margin-top: 4px;
  margin-bottom: 20px;
  font-family: 'Roboto',serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #705C8A;
  flex: none;
  order: 1;
  flex-grow: 0;
`;
