import styled from 'styled-components';
import { CleverColors } from '../../values';

export const Points = styled.div<{ points: number; color: string }>`
    &:after {
        content: '${({ points }) => points}';
        width: 1.5em;
        height: 1.5em;
        background: ${props => CleverColors[props.color]};
        color: #fff;
        border: 2px solid #fff;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
