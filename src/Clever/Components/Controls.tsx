import { FC, useContext } from 'react';
import { CounterContext } from '../Hooks/useGameContext';
import styled from 'styled-components';

const Controls: FC = () => {
    const { throwDices, turn } = useContext(CounterContext);

    return (
        <StyledControls>
            <h1>Current Turn: {turn}</h1>
            <button onClick={() => throwDices()}>Throw Dices</button>
        </StyledControls>
    );
};

export default Controls;

const StyledControls = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > button {
        padding: 1em;
        margin-bottom: 1em;
    }
`;
