import { FC, useContext } from 'react';
import styled from 'styled-components';
import { CounterContext } from '../Hooks/useGameContext';
import Dice from './Dice';

const DiceTray: FC = () => {
    const { dices, chooseDice } = useContext(CounterContext);

    return (
        <StyledContainer>
            <StyledDiceTray>
                <StyledDiceContainer>
                    {dices
                        .filter(dice => dice.available && !dice.discarded)
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

            <StyledSilverTray>
                <StyledDiceContainer>
                    {dices
                        .filter(dice => dice.discarded)
                        .map((thrownDice, index) => (
                            <Dice key={index} thrownDice={thrownDice} />
                        ))}
                </StyledDiceContainer>
            </StyledSilverTray>
        </StyledContainer>
    );
};

export default DiceTray;

const StyledContainer = styled.div`
    display: flex;
    gap: 1em;
`;
const StyledDiceTray = styled.div`
    background-color: #006000;
    border: 1em solid #000;
    box-sizing: border-box;
    border-radius: 50%;
    width: 20em;
    height: 20em;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledSilverTray = styled.div`
    background-color: #b8b8b8;
    border: 1em solid #000;
    box-sizing: border-box;
    border-radius: 50%;
    width: 20em;
    height: 20em;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const StyledDiceContainer = styled.div`
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-columns: 4em 4em 4em;
    grid-template-rows: 4em 4em;
    gap: 0.1em 0.1em;
    grid-template-areas:
        '...'
        '...';
`;
