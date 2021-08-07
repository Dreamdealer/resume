import React, { useState } from 'react';
import Stage from './Stage';
import { usePlayer } from '../Hooks/usePlayer';
import { useStage } from '../Hooks/useStage';
import useInterval from '../Hooks/useInterval';
import styled from 'styled-components';
import { createStage, checkCollision } from '../gameHelpers';
import { useGameStatus } from '../Hooks/useGameStatus';
import Display from './Display';

const StyledTetrisContainer = styled.div<{ gameOver: boolean }>`
    height: 100vh;
    outline: none;
    display: flex;
    flex-flow: row nowrap;
    transform-style: preserve-3d;
    transform: rotateX(35deg) rotateY(0deg) translateZ(100px);
    filter: ${({ gameOver }) => gameOver ? 'blur(5px)' : 'none'};
`;

const StyledControlsContainer = styled.div`
    width: 300px;
    margin-right: 20px;
    display: flex;
    flex-flow: column wrap;
    justify-content: flex-start;
    align-items: stretch;
`;

const StyledGameOverContainer = styled.div`
    position: fixed;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    z-index: 99;
    font-family: 'Press Start 2P', cursive;
    color: #000;
    font-size: 60px;
    font-size: 8vw;
    display: flex;
    flex-flow: column wrap;
`;

const StyledButton = styled.button`
    outline: none;
    border: 2px solid #000;
    border-radius: 8px;
    line-height: 50px;
    font-size: 20px;
    background: #FFF;
    font-family: 'Press Start 2P', cursive;

    &:hover {
        cursor: pointer;
        box-shadow: 0 0 20px rgba(0,0,0,.2);
    }
`;

const Tetris = () => {
    const [ dropTime, setDropTime ] = useState<null | number>(null);
    const [ gameOver, setGameOver ] = useState(false);
    const [ gamePaused, setGamePaused ] = useState(false);
    const [ gameStarted, setGameStarted ] = useState(false);
    const [ player, updatePlayerPosition, resetPlayer, playerRotate ] = usePlayer();
    const [ stage, setStage, rowsCleared ] = useStage(player, resetPlayer);
    const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(rowsCleared);
    
    const movePlayer = (dir: number) => {
        if (!checkCollision(player, stage, { x: dir, y: 0 })) {
            updatePlayerPosition({ x: dir, y: 0, collided: false });
        }
    }

    const startGame = () => {
        setStage(createStage());
        setDropTime(1000);
        resetPlayer();
        setScore(0);
        setLevel(0);
        setRows(0);
        setGameOver(false);
        setGameStarted(true);
    }

    const drop = () => {
        // Increase level and speed when player has cleared 10 rows
        if (rows > (level + 1) * 10) {
            setLevel(prev => prev + 1);
            setDropTime(1000 / (level + 1) + 200);
        }

        if (!checkCollision(player, stage, { x: 0, y: 1 })) {
            updatePlayerPosition({ x: 0, y: 1, collided: false });
        } else {
            if (player.pos.y < 1) {
                console.log('GAME OVER');
                setGameStarted(false);
                setGameOver(true);
                setDropTime(null);
            }
            updatePlayerPosition({ x: 0, y: 0, collided: true });
        }
    }

    const pauseGame = () => {
        setGamePaused(true);
        setDropTime(null);
    }

    const continueGame = () => {
        setGamePaused(false);
        setDropTime(1000 / (level + 1));
    };

    const keyUp = ({ keyCode }: { keyCode: number}) => {
        if (!gameOver && keyCode === 40) {
            setDropTime(1000 / (level + 1));
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
        <>
            {gameOver && (
                <StyledGameOverContainer>
                    <p>Game Over</p>
                    <StyledButton onClick={() => { startGame(); }}>Restart Game</StyledButton>
                </StyledGameOverContainer>
            )}
            <StyledTetrisContainer 
                gameOver={gameOver}
                role="button" 
                tabIndex={0} 
                onKeyUp={keyUp} 
                onKeyDown={event => { 
                    move(event); 
                    event.preventDefault(); 
                }}
            >
                <StyledControlsContainer>
                    {!gameStarted ? (
                        <StyledButton onClick={() => { startGame(); }}>Start Game</StyledButton>
                    ) : (
                        <StyledButton onClick={() => { gamePaused ? continueGame() : pauseGame() }}>
                            {gamePaused ? 'Continue Game' : 'Pause Game'}
                        </StyledButton>
                    )}
                    <Display text={`Score: ${score}`} />
                    <Display text={`Rows: ${rows}`} />
                    <Display text={`Level: ${level}`} />
                </StyledControlsContainer>
                <Stage stage={stage} />
            </StyledTetrisContainer>
        </>
    )
}

export default Tetris;
