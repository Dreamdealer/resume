import { FC } from 'react';
import styled from 'styled-components';
import ScoreField from './ScoreField';

const BlueField: FC = () => {
    return (
        <StyledBlueField>
            <ScoreField points>scores</ScoreField>
            <ScoreField symbol></ScoreField>
            <ScoreField>2</ScoreField>
            <ScoreField>3</ScoreField>
            <ScoreField>4</ScoreField>
            <ScoreField symbol>🟧</ScoreField>
            <ScoreField>5</ScoreField>
            <ScoreField checked>6</ScoreField>
            <ScoreField checked>7</ScoreField>
            <ScoreField>8</ScoreField>
            <ScoreField symbol>🟨</ScoreField>
            <ScoreField>9</ScoreField>
            <ScoreField>10</ScoreField>
            <ScoreField>11</ScoreField>
            <ScoreField>12</ScoreField>
            <ScoreField symbol>🦊</ScoreField>
            <ScoreField symbol>♻️</ScoreField>
            <ScoreField symbol>🟩</ScoreField>
            <ScoreField symbol>🟪</ScoreField>
            <ScoreField symbol>+1</ScoreField>
            <ScoreField symbol></ScoreField>
        </StyledBlueField>
    );
};

export default BlueField;

const StyledBlueField = styled.div`
    width: 100%;
    height: 100%;
    display: grid; 
    grid-auto-columns: 1fr; 
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr; 
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr; 
    gap: .7em; 
    grid-template-areas: 
        "score score score score score"
        ". . . . ."
        ". . . . ."
        ". . . . ."
        ". . . . ."; 
`;