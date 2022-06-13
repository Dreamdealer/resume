import { FC } from 'react';
import styled from 'styled-components';
import Controls from './Components/Controls';
import DiceTray from './Components/DiceTray';
import Board from './Components/Board';
import { CounterProvider } from './Hooks/useGameContext';

const Clever: FC = () => {
    return (
        <CounterProvider>
            <Game>
                <LeftBar>
                    <Controls />
                    <DiceTray />
                </LeftBar>
                <RightBar>
                    <Board />
                </RightBar>
            </Game>
        </CounterProvider>
    );
};

export default Clever;

const Game = styled.div`
    display: flex;
    font-size: 14px;
    font-family: 'Sriracha', cursive;
    width: 100%;
    height: 100vh;
    background: #333;
    color: #fff;
`;

const LeftBar = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
`;

const RightBar = styled.div`
    display: flex;
    flex-grow: 1;
    justify-content: flex-start;
    align-items: center;
`;
