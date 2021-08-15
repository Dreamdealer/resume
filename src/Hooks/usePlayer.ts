import { useCallback, useState } from 'react';
import { checkCollision, StageType } from '../gameHelpers';
import { tetrisConfig } from '../Config/tetrisConfig';
import { randomTetromino, TETROMINOS, TetrominoShapeType } from '../Config/tetrominos';

export type PositionType = {
    x: number;
    y: number;
};

export type PlayerStateType = {
    pos: PositionType;
    tetromino: TetrominoShapeType;
    collided: boolean;
};

export type PlayerPositionType = PositionType & { collided: boolean };

const playerStartingState: PlayerStateType = {
    pos: {
        x: 0,
        y: 0,
    },
    tetromino: TETROMINOS[0].shape,
    collided: false,
};

export const usePlayer = () => {
    const [player, setPlayer] = useState(playerStartingState);
    const [nextTetromino, setNextTetromino] = useState(randomTetromino());

    const rotate = (matrix: TetrominoShapeType, direction: number) => {
        const rotatedTetromino = matrix.map((_, index) => matrix.map(col => col[index]));

        if (direction > 0) return rotatedTetromino.map(row => row.reverse());

        return rotatedTetromino.reverse();
    };

    const playerRotate = (stage: StageType, direction: number) => {
        const clonedPlayer = JSON.parse(JSON.stringify(player));
        clonedPlayer.tetromino = rotate(clonedPlayer.tetromino, direction);

        const pos = clonedPlayer.pos.x;
        let offset = 1;
        while (checkCollision(clonedPlayer, stage, { x: 0, y: 0 })) {
            clonedPlayer.pos.x += offset;
            offset = -(offset + (offset > 0 ? 1 : -1));
            if (offset > clonedPlayer.tetromino[0].length) {
                rotate(clonedPlayer.tetromino, -direction);
                clonedPlayer.pos.x = pos;
                return;
            }
        }
        setPlayer(clonedPlayer);
    };

    const updatePlayerPosition = ({ x, y, collided }: PlayerPositionType) => {
        setPlayer(prev => ({
            ...prev,
            pos: {
                x: (prev.pos.x += x),
                y: (prev.pos.y += y),
            },
            collided,
        }));
    };

    const resetPlayer = useCallback(() => {
        setPlayer({
            pos: {
                x: tetrisConfig.stage.width / 2 - 2,
                y: 0,
            },
            tetromino: nextTetromino.shape,
            collided: false,
        });

        setNextTetromino(randomTetromino());
    }, [nextTetromino]);

    return [player, updatePlayerPosition, resetPlayer, playerRotate, nextTetromino] as const;
};
