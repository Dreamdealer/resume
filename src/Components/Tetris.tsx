import React, { useState } from 'react';
import Stage from './Stage';
import { usePlayer } from '../Hooks/usePlayer';
import { useStage } from '../Hooks/useStage';
import useInterval from '../Hooks/useInterval';
import styled from 'styled-components';
import { createStage, checkCollision } from '../gameHelpers';

const StyledTetrisContainer = styled.div`
    height: 100vh;
    outline: none;
`;

const Tetris = () => {
    const [ dropTime, setDropTime ] = useState<null | number>(null);
    const [ gameOver, setGameOver ] = useState(false);
    const [ player, updatePlayerPosition, resetPlayer, playerRotate ] = usePlayer();
    const [ stage, setStage ] = useStage(player, resetPlayer);
    
    const movePlayer = (dir: number) => {
        if (!checkCollision(player, stage, { x: dir, y: 0 })) {
            updatePlayerPosition({ x: dir, y: 0, collided: false });
        }
    }

    const startGame = () => {
        setStage(createStage());
        setDropTime(1000);
        resetPlayer();
        setGameOver(false);
    }

    const drop = () => {
        if (!checkCollision(player, stage, { x: 0, y: 1 })) {
            updatePlayerPosition({ x: 0, y: 1, collided: false });
        } else {
            if (player.pos.y < 1) {
                console.log('GAME OVER');
                setGameOver(true);
                setDropTime(null);
            }
            updatePlayerPosition({ x: 0, y: 0, collided: true });
        }
    }

    const keyUp = ({ keyCode }: { keyCode: number}) => {
        if (!gameOver && keyCode === 40) {
            setDropTime(1000);
        }
    }

    const dropPlayer = () => {
        setDropTime(null);
        drop(); 
    }

    const move = ({ keyCode } : { keyCode: number}) => {
        if (!gameOver) {
            switch (keyCode) {
                case 37: movePlayer(-1); break;
                case 39: movePlayer(1); break;
                case 40: dropPlayer(); break;
                case 38: playerRotate(stage, 1); break;
            }
        }
    }

    useInterval(() => {
        drop();
    }, dropTime);

    return (
        <StyledTetrisContainer role="button" tabIndex={0} onKeyUp={keyUp} onKeyDown={event => { 
            move(event); 
            event.preventDefault(); 
        }}>
            <button onClick={() => { startGame(); }}>Start Game</button>
            <Stage stage={stage} />
        </StyledTetrisContainer>
    )
}

export default Tetris;
