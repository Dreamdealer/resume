import React, { useState } from 'react';
import Stage from './Stage';
import { usePlayer } from '../Hooks/usePlayer';
import { useStage } from '../Hooks/useStage';
import useInterval from '../Hooks/useInterval';
import styled from 'styled-components';
import { createStage, checkCollision } from '../gameHelpers';
import { useGameStatus } from '../Hooks/useGameStatus';
import Display from './Display';
import { tetrisConfig } from '../Config/tetrisConfig';
import Button from './Button';
import GameOver from './GameOver';

const StyledTetrisContainer = styled.div<{ gameOver: boolean; tilt: number }>`
    min-height: 100%;
    outline: none;
    display: flex;
    flex-flow: row nowrap;
    transform-style: preserve-3d;
    transform: rotateX(${({ tilt }) => `${tilt}deg`}) rotateY(0deg) translateZ(0px);
    filter: ${({ gameOver }) => (gameOver ? 'blur(5px)' : 'none')};
    font-family: 'Press Start 2P', cursive;
`;

const StyledControlsContainer = styled.div`
    width: 300px;
    margin-right: 20px;
    display: flex;
    flex-flow: column wrap;
    justify-content: flex-start;
    align-items: stretch;
`;

const StyledSlider = styled.input`
    width: 100%;
`;

const Tetris = () => {
    const [tilt, setTilt] = useState(0);
    const [dropTime, setDropTime] = useState<null | number>(null);
    const [gameOver, setGameOver] = useState(false);
    const [gamePaused, setGamePaused] = useState(false);
    const [gameStarted, setGameStarted] = useState(false);
    const [player, updatePlayerPosition, resetPlayer, playerRotate] = usePlayer();
    const [stage, setStage, rowsCleared, activeColumns] = useStage(player, resetPlayer);
    const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(rowsCleared);

    const movePlayer = (dir: number) => {
        continueGame();
        if (!checkCollision(player, stage, { x: dir, y: 0 })) {
            updatePlayerPosition({ x: dir, y: 0, collided: false });
        }
    };

    const startGame = () => {
        setStage(createStage());
        setDropTime(1000);
        resetPlayer();
        setScore(0);
        setLevel(0);
        setRows(0);
        setGameOver(false);
        setGameStarted(true);
    };

    const moveTetrominoDown = (y: number) => {
        // Increase level and speed when player has cleared 10 rows
        if (rows > (level + 1) * 10) {
            setLevel(prev => prev + 1);
            setDropTime(1000 / (level + 1) + 200);
        }

        // Check how far we can move without colliding
        let canMoveTo = 0;

        for (let tryToMoveTo = 1; tryToMoveTo <= y; tryToMoveTo += 1) {
            if (checkCollision(player, stage, { x: 0, y: tryToMoveTo })) {
                break;
            } else {
                canMoveTo = tryToMoveTo;
            }
        }

        // debug collision detection
        //console.log(`want to move to: ${y}, canMove to ${canMoveTo}, collidesAt ${collideAt}.`);

        if (canMoveTo === y) {
            updatePlayerPosition({ x: 0, y: y, collided: false });
        } else {
            if (player.pos.y < 1) {
                setGameStarted(false);
                setGameOver(true);
                setDropTime(null);
            }
            updatePlayerPosition({ x: 0, y: canMoveTo, collided: true });
        }
    };

    const pauseGame = () => {
        setGamePaused(true);
        setDropTime(null);
    };

    const continueGame = () => {
        setGamePaused(false);
        setDropTime(1000 / (level + 1));
    };

    const keyUp = ({ keyCode }: { keyCode: number }) => {
        if (!gameOver) {
            if (keyCode === 40 || keyCode === 34 || keyCode === 35) {
                continueGame();
            }
        }
    };

    const dropPlayer = () => {
        setDropTime(null);
        moveTetrominoDown(1);
    };

    const fullDropPlayer = () => {
        setDropTime(null);
        moveTetrominoDown(tetrisConfig.stage.height);
    };

    const move = (event: React.KeyboardEvent<HTMLDivElement>) => {
        let preventDefault = true;

        if (!gameOver) {
            switch (event.keyCode) {
                case 37: // LEFT
                    movePlayer(-1);
                    break;
                case 39: // RIGHT
                    movePlayer(1);
                    break;
                case 40: // DOWN
                    dropPlayer();
                    break;
                case 38: // UP
                    playerRotate(stage, 1);
                    break;
                case 80: // P
                    gamePaused ? continueGame() : pauseGame();
                    break;
                case 34: // Page Down
                case 35: // End
                    fullDropPlayer();
                    break;
                default:
                    console.log(`Unused keystroke: ${event.keyCode}`);
                    preventDefault = false;
                    break;
            }
        }

        if (preventDefault) {
            event.preventDefault();
        }
    };

    useInterval(() => {
        moveTetrominoDown(1);
    }, dropTime);

    return (
        <>
            {gameOver && (
                <GameOver>
                    <p>Game Over</p>
                    <Button
                        onClick={() => {
                            startGame();
                        }}
                    >
                        Restart Game
                    </Button>
                </GameOver>
            )}
            <StyledTetrisContainer
                tilt={tilt}
                gameOver={gameOver}
                role="button"
                tabIndex={0}
                onKeyUp={keyUp}
                onKeyDown={event => {
                    move(event);
                }}
            >
                <StyledControlsContainer>
                    {!gameStarted ? (
                        <Button
                            onClick={() => {
                                startGame();
                            }}
                        >
                            Start Game
                        </Button>
                    ) : (
                        <Button
                            onClick={() => {
                                gamePaused ? continueGame() : pauseGame();
                            }}
                        >
                            {gamePaused ? 'Continue Game' : 'Pause Game'}
                        </Button>
                    )}
                    <Display>Score: {score}</Display>
                    <Display>Rows: {rows}</Display>
                    <Display>Level: {level}</Display>
                    <Display>
                        Tilt:
                        <StyledSlider
                            type="range"
                            name="volume"
                            value={tilt}
                            min="0"
                            max="45"
                            onChange={({ target }) => {
                                setTilt(parseInt(target.value));
                            }}
                        />
                    </Display>
                </StyledControlsContainer>
                <Stage
                    paused={gamePaused}
                    stage={stage}
                    showInstructions={!gameStarted}
                    activeColumns={activeColumns}
                />
            </StyledTetrisContainer>
        </>
    );
};

export default Tetris;
