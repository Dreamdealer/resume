import { FC, useContext, useEffect } from 'react';
import { CounterContext } from '../Hooks/useGameContext';
import styled from 'styled-components';
import { CleverColors } from '../valuesAndHelpers';

const Controls: FC = () => {
    const { throwDices, turn, foxes, scoresPerColor, recalculateTotalScores, scoreBoard } = useContext(CounterContext);

    useEffect(() => {
        recalculateTotalScores();
    }, [scoreBoard]);

    return (
        <StyledControls>
            <b>Current Turn: {turn}</b>
            <b>Amount of foxes: {foxes}</b>
            <div className="scores">
                <ScoreContainer color="yellow">{scoresPerColor.yellow}</ScoreContainer>
                <ScoreContainer color="blue">{scoresPerColor.blue}</ScoreContainer>
                <ScoreContainer color="green">{scoresPerColor.green}</ScoreContainer>
                <ScoreContainer color="orange">{scoresPerColor.orange}</ScoreContainer>
                <ScoreContainer color="purple">{scoresPerColor.purple}</ScoreContainer>
            </div>
            <button onClick={() => throwDices()}>Throw Dices</button>
        </StyledControls>
    );
};

export default Controls;

const StyledControls = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    font-size: 1.2em;
    line-height: 1.3em;

    .scores {
        display: grid;
        margin: 2em 0;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        gap: 1em;
    }

    > button {
        padding: 1em;
        margin-bottom: 1em;
    }
`;

const ScoreContainer = styled.div<{ color: string }>`
    background-color: ${props => CleverColors[props.color]};
    padding: 10px;
    border-radius: 50%;
    text-align: center;
    color: #000;
`;
