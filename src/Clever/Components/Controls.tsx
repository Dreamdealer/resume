import { FC, useContext, useEffect } from 'react';
import { CounterContext } from '../Hooks/useGameContext';
import styled from 'styled-components';

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
                <b>Yellow total: {scoresPerColor.yellow}</b>
                <b>Blue total: {scoresPerColor.blue}</b>
                <b>Green total: {scoresPerColor.green}</b>
                <b>Orange total: {scoresPerColor.orange}</b>
                <b>Purple total: {scoresPerColor.purple}</b>
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
        display: flex;
        flex-direction: column;
        margin-bottom: 2em;
    }

    > button {
        padding: 1em;
        margin-bottom: 1em;
    }
`;
