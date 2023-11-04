import {FC} from "react";
import styled from "styled-components";


const Conventus: FC = () => {

    const Description = styled.p`
      font-family: 'Roboto', serif;
      font-style: normal;
      font-weight: 400;
      font-size: 17px;
      line-height: 135%;
      text-align: left;
      color: #7927E1;
    `
    return (
        <>
            <Description>
                После прохождения курса «Банковское дело» студенты получат доступ к профтесту на основе ИИ!
            </Description>
        </>
    );
};

export {Conventus};
