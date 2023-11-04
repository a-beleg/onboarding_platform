import {withStyles} from "../media/hoc/with-styles";
import React from 'react';

import { ContainerBlock } from './style';

type ContainerProps = React.HTMLAttributes<HTMLElement>;

const ContainerComponent: React.FC<ContainerProps> = ({ children, ...otherProps }) => (
    <ContainerBlock {...otherProps}>{children}</ContainerBlock>
);

export const Container = withStyles(ContainerComponent);
