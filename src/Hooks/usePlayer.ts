import { useCallback, useState } from 'react';
import { tetrisConfig } from '../tetrisConfig';
import { randomTetromino, TetrominoShapeType } from '../tetrominos';

export type PositionType = { 
    x: number; 
    y: number;
}

export type PlayerStateType = {
    pos: PositionType;
    tetromino: TetrominoShapeType;
    collided: boolean;
}

export type PlayerPositionType = PositionType & { collided: boolean; }

const playerStartingState: PlayerStateType = {
    pos: { 
        x: 0, 
        y: 0 
    },
    tetromino: randomTetromino().shape,
    collided: false,
};

export const usePlayer = () => {
    const [ player, setPlayer ] = useState(playerStartingState);

    const updatePlayerPosition = ({ x, y, collided} : PlayerPositionType) => {
        setPlayer(prev => ({
            ...prev,
            pos: { 
                x: prev.pos.x += x, 
                y: prev.pos.y += y 
            },
            collided,
        }))
    }

    const resetPlayer = useCallback(() => {
        setPlayer({
            pos: { 
                x: (tetrisConfig.stage.width / 2) - 2, 
                y: 0 
            },
            tetromino: randomTetromino().shape,
            collided: false, 
        })
    }, []);

    return [ player, updatePlayerPosition, resetPlayer ];
}