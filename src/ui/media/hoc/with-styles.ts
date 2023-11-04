import { ComponentType } from 'react';
import styled from 'styled-components';

export function withStyles<T>(
    WrappedComponent: ComponentType<T>
) {
    return styled(WrappedComponent)`` as unknown as ComponentType<T>;
}
