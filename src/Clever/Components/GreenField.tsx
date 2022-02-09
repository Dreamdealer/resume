import { FC } from 'react';
import styled from 'styled-components';
import ScoreField from './ScoreField';

const GreenField: FC = () => {
    return (
        <StyledGreenField>
            <ScoreField symbol>1</ScoreField>
            <ScoreField symbol>3</ScoreField>
            <ScoreField symbol>6</ScoreField>
            <ScoreField symbol>10</ScoreField>
            <ScoreField symbol>15</ScoreField>
            <ScoreField symbol>21</ScoreField>
            <ScoreField symbol>28</ScoreField>
            <ScoreField symbol>36</ScoreField>
            <ScoreField symbol>45</ScoreField>
            <ScoreField symbol>55</ScoreField>
            <ScoreField symbol>66</ScoreField>
            <ScoreField checked>≥1</ScoreField>
            <ScoreField checked>≥2</ScoreField>
            <ScoreField checked>≥3</ScoreField>
            <ScoreField>≥4</ScoreField>
            <ScoreField>≥5</ScoreField>
            <ScoreField>≥1</ScoreField>
            <ScoreField>≥2</ScoreField>
            <ScoreField>≥3</ScoreField>
            <ScoreField>≥4</ScoreField>
            <ScoreField>≥5</ScoreField>
            <ScoreField>≥6</ScoreField>
            <ScoreField symbol></ScoreField>
            <ScoreField symbol></ScoreField>
            <ScoreField symbol></ScoreField>
            <ScoreField symbol>+1</ScoreField>
            <ScoreField symbol></ScoreField>
            <ScoreField symbol>🟦</ScoreField>
            <ScoreField symbol>🦊</ScoreField>
            <ScoreField symbol></ScoreField>
            <ScoreField symbol>🟪</ScoreField>
            <ScoreField symbol>♻️</ScoreField>
            <ScoreField symbol></ScoreField>
        </StyledGreenField>
    );
};

export default GreenField;

const StyledGreenField = styled.div`
    width: 100%;
    display: grid; 
    grid-auto-columns: 1fr; 
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr; 
    grid-template-rows: 1.5em 3em 1em; 
    gap: 0 .7em; 
    grid-template-areas: 
        ". . . . . . . . . . ."
        ". . . . . . . . . . ."
        ". . . . . . . . . . ."; 
`;
