import { FC } from 'react';
import styled from 'styled-components';
import ScoreField from './ScoreField';

const YellowField: FC = () => {
    return (
        <StyledYellowField>
            <ScoreField checked>3</ScoreField>
            <ScoreField>6</ScoreField>
            <ScoreField>5</ScoreField>
            <ScoreField checked></ScoreField>
            <ScoreField symbol>🟦</ScoreField>
            <ScoreField>2</ScoreField>
            <ScoreField>1</ScoreField>
            <ScoreField checked></ScoreField>
            <ScoreField>5</ScoreField>
            <ScoreField symbol>4️⃣</ScoreField>
            <ScoreField>1</ScoreField>
            <ScoreField checked></ScoreField>
            <ScoreField>2</ScoreField>
            <ScoreField checked>4</ScoreField>
            <ScoreField symbol>🟩</ScoreField>
            <ScoreField checked></ScoreField>
            <ScoreField>3</ScoreField>
            <ScoreField>4</ScoreField>
            <ScoreField>6</ScoreField>
            <ScoreField symbol>🦊</ScoreField>
            <ScoreField symbol>10</ScoreField>
            <ScoreField symbol>14</ScoreField>
            <ScoreField symbol>16</ScoreField>
            <ScoreField symbol>20</ScoreField>
            <ScoreField symbol>+1</ScoreField>
        </StyledYellowField>
    );
};

export default YellowField;

const StyledYellowField = styled.div`
    width: 100%;
    height: 100%;
    display: grid; 
    grid-auto-columns: 1fr; 
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr; 
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr; 
    gap: .7em; 
    grid-template-areas: 
        ". . . . ."
        ". . . . ."
        ". . . . ."
        ". . . . ."
        ". . . . ."; 
`;
