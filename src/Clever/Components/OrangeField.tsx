import { FC } from 'react';
import styled from 'styled-components';
import ScoreField from './ScoreField';

const OrangeField: FC = () => {
    return (
        <StyledOrangeField>
            <ScoreField score={3}></ScoreField>
            <ScoreField score={4}></ScoreField>
            <ScoreField></ScoreField>
            <ScoreField placeholder="x2"></ScoreField>
            <ScoreField></ScoreField>
            <ScoreField></ScoreField>
            <ScoreField placeholder="x2"></ScoreField>
            <ScoreField></ScoreField>
            <ScoreField placeholder="x2"></ScoreField>
            <ScoreField></ScoreField>
            <ScoreField placeholder="x3"></ScoreField>
            <ScoreField symbol></ScoreField>
            <ScoreField symbol></ScoreField>
            <ScoreField symbol>♻️</ScoreField>
            <ScoreField symbol></ScoreField>
            <ScoreField symbol>🟨</ScoreField>
            <ScoreField symbol>+1</ScoreField>
            <ScoreField symbol></ScoreField>
            <ScoreField symbol>🦊</ScoreField>
            <ScoreField symbol></ScoreField>
            <ScoreField symbol>🟪</ScoreField>
            <ScoreField symbol></ScoreField>
        </StyledOrangeField>
    );
};

export default OrangeField;

const StyledOrangeField = styled.div`
    width: 100%;
    display: grid; 
    grid-auto-columns: 1fr; 
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr; 
    grid-template-rows: 3em 1em; 
    gap: 0 .7em; 
    grid-template-areas: 
        ". . . . . . . . . . ."
        ". . . . . . . . . . .";
`;

