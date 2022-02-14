import { FC, useContext } from 'react';
import styled from 'styled-components';
import { CounterContext } from '../Hooks/useGameContext';
import Dice from './Dice';

const DiceTray: FC = () => {
    const { dices, chooseDice } = useContext(CounterContext);

    return (
        <StyledDiceTray>
            <StyledDiceContainer>
                {dices
                    .filter(dice => dice.available)
                    .map((thrownDice, index) => (
                        <Dice
                            key={index}
                            thrownDice={thrownDice}
                            onClick={() => {
                                chooseDice(thrownDice);
                            }}
                        />
                    ))}
            </StyledDiceContainer>
        </StyledDiceTray>
    );
};

export default DiceTray;

const StyledDiceTray = styled.div`
    background-color: #006000;
    border: 3em solid #004000;
    box-sizing: border-box;
    border-radius: 50%;
    width: 30em;
    height: 30em;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledDiceContainer = styled.div`
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-columns: 4em 4em 4em;
    grid-template-rows: 4em 4em;
    gap: 1em 1em;
    grid-template-areas:
        '...'
        '...';
`;
