import { FC } from 'react';
import styled from 'styled-components';
import ScoreField from './ScoreField';

const PurpleField: FC = () => {
    return (
        <StyledPurpleField>
            <ScoreField score={4} rightSymbol="<"></ScoreField>
            <ScoreField rightSymbol="<"></ScoreField>
            <ScoreField rightSymbol="<"></ScoreField>
            <ScoreField rightSymbol="<"></ScoreField>
            <ScoreField rightSymbol="<"></ScoreField>
            <ScoreField rightSymbol="<"></ScoreField>
            <ScoreField rightSymbol="<"></ScoreField>
            <ScoreField rightSymbol="<"></ScoreField>
            <ScoreField rightSymbol="<"></ScoreField>
            <ScoreField rightSymbol="<"></ScoreField>
            <ScoreField></ScoreField>
            <ScoreField symbol></ScoreField>
            <ScoreField symbol></ScoreField>
            <ScoreField symbol>♻️</ScoreField>
            <ScoreField symbol>🟦</ScoreField>
            <ScoreField symbol>+1</ScoreField>
            <ScoreField symbol>🟨</ScoreField>
            <ScoreField symbol>🦊</ScoreField>
            <ScoreField symbol>♻️</ScoreField>
            <ScoreField symbol>🟩</ScoreField>
            <ScoreField symbol>🟧</ScoreField>
            <ScoreField symbol>+1</ScoreField>
        </StyledPurpleField>
    );
};

export default PurpleField;

const StyledPurpleField = styled.div`
    width: 100%;
    display: grid; 
    color: inherit;
    grid-auto-columns: 1fr; 
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr; 
    grid-template-rows: 3em 1em;  
    gap: 0 .7em; 
    grid-template-areas: 
        ". . . . . . . . . . ."
        ". . . . . . . . . . .";
`;

