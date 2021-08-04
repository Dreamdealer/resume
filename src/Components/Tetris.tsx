import React, { useState } from 'react';
import Stage from './Stage';
import { PlayerStateType, usePlayer } from '../Hooks/usePlayer';
import { useStage } from '../Hooks/useStage';
import styled from 'styled-components';
import { createStage } from '../gameHelpers';

const StyledTetrisContainer = styled.div`
    border: 1px solid red;
`;

const Tetris = () => {
    // const [ dropTime, setDropTime ] = useState(null);
    const [ gameOver, setGameOver ] = useState(false);
    const [ player, updatePlayerPosition, resetPlayer ] = usePlayer();
    const [ stage, setStage ] = useStage(player as PlayerStateType);
    
    console.log('re-render');

    const movePlayer = (dir: number) => {
        //updatePlayerPosition({ x: dir, y: 0, collided: false });
    }

    const startGame = () => {
        // reset everything
        //setStage(createStage());
        //resetPlayer();
    }

    const drop = () => {
        //updatePlayerPosition({ x: 0, y: 0, collided: false });
    }

    const dropPlayer = () => {
        drop(); 
    }

    const move = ({ keyCode } : { keyCode: number}) => {
        if (!gameOver) {
            switch (keyCode) {
                case 37: movePlayer(-1); break;
                case 39: movePlayer(1); break;
                case 40: dropPlayer(); break;
            }
        }
    }

    return (
        <StyledTetrisContainer role="button" tabIndex={0} onKeyDown={e => move(e)}>
            <button onClick={() => {
                startGame();
            }}>Start Game</button>
            <Stage stage={stage} />
        </StyledTetrisContainer>
    )
}

export default Tetris;