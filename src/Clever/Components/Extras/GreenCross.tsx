import styled from 'styled-components';
import { CleverColors } from '../../valuesAndHelpers';

export const GreenCross = styled.div`
    &:after {
        content: 'X';
        border-radius: 0.3em;
        background-color: ${CleverColors.green};
        border: 2px solid #fff;
        color: #fff;
        width: 1em;
        height: 1em;
        font-size: 1.5em;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0.1em 0.1em 0.3em 0.2em rgba(0, 0, 0, 0.3);
    }
`;
