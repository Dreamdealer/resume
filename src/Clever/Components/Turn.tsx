import { FC } from 'react';
import styled from 'styled-components';

type PropsType = {
    state: string;
    index: number;
};

const Turn: FC<PropsType> = props => {
    const getTurnTypeSymbol = (index: number) => {
        switch (index) {
            case 1:
            case 3:
                return '♻️';
                break;
            case 2:
                return '➕';
                break;
            case 4:
                return '❌|6️⃣';
                break;
            case 5:
                return '👤👤👤';
                break;
            case 6:
                return '👤|👤👤';
                break;
        }
    };

    return (
        <StyledTurn>
            <StyledNumber state={props.state}>{props.index}</StyledNumber>
            <StyledTurnType>{getTurnTypeSymbol(props.index)}</StyledTurnType>
        </StyledTurn>
    );
};

export default Turn;

const StyledTurn = styled.div`
    width: 100%;
    height: 100%;
    font-size: 1.3em;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    background: #fff;
    border-radius: 5px;
`;

const StyledNumber = styled.div<{ state?: string }>`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    position: relative;

    ${({ state }) =>
        state !== 'OPEN' &&
        `
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
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    font-size: 0.6em;
`;
