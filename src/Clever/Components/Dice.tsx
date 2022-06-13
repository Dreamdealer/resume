import { FC } from 'react';
import styled from 'styled-components';
import { ThrownDiceType } from '../Types';
import { CleverColors } from '../valuesAndHelpers';

type PropsType = {
    thrownDice: ThrownDiceType;
    onClick?(): void;
};

const Dice: FC<PropsType> = ({ thrownDice, onClick }) => {
    return (
        <StyledDice
            color={thrownDice.dice.color as string}
            dotColor={thrownDice.dice.dotColor}
            onClick={() => {
                if (onClick) {
                    onClick();
                }
            }}
        >
            {thrownDice.amount ?? thrownDice.amount}
        </StyledDice>
    );
};

export default Dice;

const StyledDice = styled.div<{ color: string; dotColor: string; onClick(): void }>`
    width: 3rem;
    height: 3rem;
    font-size: 2.6rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    background: ${({ color }) => (color ? CleverColors[color.toLowerCase()] : '#FFF')};
    color: ${({ dotColor }) => dotColor};
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    border: 3px solid #fff;
    box-shadow: 0 0 5px ${({ dotColor }) => dotColor} inset;
    box-sizing: border-box;
    cursor: pointer;
`;
