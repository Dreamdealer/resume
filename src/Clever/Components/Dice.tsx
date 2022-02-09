import { FC } from 'react';
import styled from 'styled-components';
import { CleverColors, DiceType } from '../Clever';

type PropsType = {
    dice: DiceType;
}

const Dice: FC<PropsType> = ({dice}) => {
    return (
        <StyledDice color={dice.color as string}>{ dice.amount ?? dice.amount }</StyledDice>
    );
};

export default Dice;

const StyledDice = styled.div<{color: string}>`
    width: 100%;
    height: 100%;
    font-size: 2.6em;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    background: ${({color}) => color ? CleverColors[color.toLowerCase()] : '#FFF'} ;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    border: 3px solid #FFF;
    box-shadow: 0 0 5px #FFF inset;
    box-sizing: border-box;
`;