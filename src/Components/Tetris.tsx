import React, { useEffect, useRef, useState } from 'react';
import Stage from './Stage';
import { usePlayer } from '../Hooks/usePlayer';
import { useStage } from '../Hooks/useStage';
import useInterval from '../Hooks/useInterval';
import { createStage, checkCollision } from '../gameHelpers';
import { useGameStatus } from '../Hooks/useGameStatus';
import Display from './Display';
import { tetrisConfig } from '../Config/tetrisConfig';
import Button from './Button';
import GameOver from './GameOver';
import { StyledTetrisContainer, StyledDisplaysContainer, StyledDisplays } from './Styles';
import OnScreenControls from './OnScreenControls';
import Settings from './Settings';
import Box from './Box';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './Themes';
import { ReactComponent as Slider } from '../Assets/slider.svg';

type PlayerMovementType = 'LEFT' | 'RIGHT' | 'ROTATE' | 'DOWN' | 'FULLDOWN' | 'TOGGLE_PAUSE' | 'UNPAUSE';

export type LocalSettingsType = {
    tilt: number;
    theme: 'light' | 'dark';
};

const Tetris = () => {
    const [localSettings, setLocalSettings] = useState<LocalSettingsType>({
        tilt: 0,
        theme: 'light',
    });
    const [dropTime, setDropTime] = useState<null | number>(null);
    const [showSettings, setShowSettings] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const [gamePaused, setGamePaused] = useState(false);
    const [gameStarted, setGameStarted] = useState(false);
    const [player, updatePlayerPosition, resetPlayer, playerRotate] = usePlayer();
    const [stage, setStage, rowsCleared, activeColumns] = useStage(player, resetPlayer);
    const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(rowsCleared);
    const gameRef = useRef<HTMLDivElement>(null);

    const movePlayer = (dir: number) => {
        playerMovement('UNPAUSE');
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

    const keyUp = ({ keyCode }: { keyCode: number }) => {
        if (!gameOver) {
            if (keyCode === 40 || keyCode === 34 || keyCode === 35) {
                playerMovement('UNPAUSE');
            }
        }
    };

    const playerMovement = (action: PlayerMovementType) => {
        switch (action) {
            case 'LEFT':
                movePlayer(-1);
                break;
            case 'RIGHT':
                movePlayer(1);
                break;
            case 'DOWN':
                setDropTime(null);
                moveTetrominoDown(1);
                break;
            case 'FULLDOWN':
                setDropTime(null);
                moveTetrominoDown(tetrisConfig.stage.height);
                break;
            case 'ROTATE':
                playerRotate(stage, 1);
                break;
            case 'TOGGLE_PAUSE':
                if (gamePaused) {
                    setGamePaused(false);
                    setDropTime(1000 / (level + 1));
                } else {
                    setGamePaused(true);
                    setDropTime(null);
                }
                break;
            case 'UNPAUSE':
                setGamePaused(false);
                setDropTime(1000 / (level + 1));
                break;
        }
    };

    const move = (event: React.KeyboardEvent<HTMLDivElement>) => {
        let preventDefault = true;

        if (!gameOver) {
            switch (event.keyCode) {
                case 37: // LEFT
                    playerMovement('LEFT');
                    break;
                case 39: // RIGHT
                    playerMovement('RIGHT');
                    break;
                case 40: // DOWN
                    playerMovement('DOWN');
                    break;
                case 38: // UP
                    playerMovement('ROTATE');
                    break;
                case 80: // P
                    playerMovement('TOGGLE_PAUSE');
                    break;
                case 34: // Page Down
                case 35: // End
                    playerMovement('FULLDOWN');
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

    useEffect(() => {
        const localStorageSettings = localStorage.getItem('TetrisSettings');

        if (localStorageSettings) {
            setLocalSettings(JSON.parse(localStorageSettings));
        }
    }, []);

    return (
        <ThemeProvider theme={localSettings.theme === 'light' ? lightTheme : darkTheme}>
            {showSettings && (
                <Settings
                    localSettings={localSettings}
                    onLocalSettingsChange={settingsObject => {
                        setLocalSettings(settingsObject);
                        localStorage.setItem('TetrisSettings', JSON.stringify(settingsObject));
                    }}
                    onCloseSettings={() => {
                        setShowSettings(false);
                    }}
                />
            )}
            {gameOver && (
                <GameOver>
                    <p>Game Over</p>
                    <Button
                        onClick={() => {
                            startGame();
                            gameRef?.current?.focus();
                        }}
                    >
                        Restart Game
                    </Button>
                </GameOver>
            )}
            <OnScreenControls
                onPushLeft={() => {
                    playerMovement('LEFT');
                }}
                onPushRotate={() => {
                    playerMovement('ROTATE');
                }}
                onPushRight={() => {
                    playerMovement('RIGHT');
                }}
                onPushDown={() => {
                    playerMovement('DOWN');
                    playerMovement('UNPAUSE');
                }}
            />
            <StyledTetrisContainer
                ref={gameRef}
                tilt={localSettings.tilt}
                gameOver={gameOver}
                role="button"
                tabIndex={0}
                onKeyUp={keyUp}
                onKeyDown={event => {
                    move(event);
                }}
            >
                <StyledDisplaysContainer>
                    <Box>
                        {!gameStarted ? (
                            <Button
                                onClick={() => {
                                    startGame();
                                }}
                            >
                                Start
                            </Button>
                        ) : (
                            <Button
                                onClick={() => {
                                    playerMovement('TOGGLE_PAUSE');
                                }}
                            >
                                {gamePaused ? 'Continue' : 'Pause'}
                            </Button>
                        )}
                        <Button
                            onClick={() => {
                                if (!gamePaused) {
                                    playerMovement('TOGGLE_PAUSE');
                                }
                                setShowSettings(true);
                            }}
                            style={{ marginLeft: '10px' }}
                        >
                            <Slider style={{ height: '30px' }} />
                        </Button>
                    </Box>
                    <StyledDisplays>
                        <Display>Score: {score}</Display>
                        <Display>Rows: {rows}</Display>
                        <Display>Level: {level}</Display>
                    </StyledDisplays>
                </StyledDisplaysContainer>
                <Stage
                    paused={gamePaused}
                    stage={stage}
                    showInstructions={!gameStarted}
                    activeColumns={activeColumns}
                />
            </StyledTetrisContainer>
        </ThemeProvider>
    );
};

export default Tetris;
