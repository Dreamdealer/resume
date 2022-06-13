import styled from 'styled-components';
import { CleverColors } from '../../valuesAndHelpers';

export const PurpleScore = styled.div<{ score: number }>`
    &:after {
        content: '${props => props.score}';
        border-radius: 0.3em;
        background-color: ${CleverColors.purple};
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
