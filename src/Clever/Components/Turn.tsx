import { FC } from 'react';
import styled from 'styled-components';

type PropsType = {
    state: string;
    index: number;
}

const Dice: FC<PropsType> = props => {
    const getTurnTypeSymbol = (index:number) => {
        switch(index) {
            case 1: 
            case 3:
                return '♻️'; break;
            case 2: 
                return '➕'; break;
            case 4: 
                return '❌|6️⃣'; break;
            case 5: 
                return '👤👤👤'; break;
            case 6: 
                return '👤|👤👤'; break;
        }
    }

    return (
        <StyledTurn>
            <StyledNumber state={props.state}>{props.index}</StyledNumber>
            <StyledTurnType>
                {getTurnTypeSymbol(props.index)}
            </StyledTurnType>
        </StyledTurn>
    );
};

export default Dice;

const StyledTurn = styled.div`
    width: 100%;
    height: 100%;
    font-size: 1.5em;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`;
    
const StyledNumber = styled.div<{ state?: string}>`
    display: flex;
    background: #FFF;
    border: 4px solid ${({state}) => state === 'ACTIVE' ? '#F00' : '#FFF'};
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    flex-grow: 1;

    ${({state}) => state !== 'OPEN' && `
        &:after { 
            content: 'X';
            font-size: 1.5em;
            position: absolute;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            text-shadow: 1px 1px 0 #000, 1px -1px 0 #000;
    }`};
`;

const StyledTurnType = styled.div`
    display: flex;
    border-radius: 3px;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    font-size: .5em;
    margin-top: 5px;
`;