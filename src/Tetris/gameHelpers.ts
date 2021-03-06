import { PlayerStateType } from './Hooks/usePlayer';
import { tetrisConfig } from './Config/tetrisConfig';
import { TetrominoShapeType } from './Config/tetrominos';

export type StageCellType = [TetrominoShapeType];

export type StageType = Array<Array<any>>;

export const createStage = (): StageType => {
    const emptyStage = Array.from(Array(tetrisConfig.stage.height), () =>
        new Array(tetrisConfig.stage.width).fill([0, 'clear']),
    );

    return emptyStage;
};

export const checkCollision = (
    player: PlayerStateType,
    stage: StageType,
    { x: moveX, y: moveY }: { x: number; y: number },
) => {
    for (let y = 0; y < player.tetromino.length; y += 1) {
        for (let x = 0; x < player.tetromino[y].length; x += 1) {
            // 1. Check that we're on an actual Tetromino cell
            if (player.tetromino[y][x] !== 0) {
                if (
                    // 2. Check that our move is inside the game areas height (y)
                    // We shouldn't go through the bottom of the play area
                    !stage[y + player.pos.y + moveY] ||
                    // 3. Check that our move is inside the game areas width (x)
                    !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
                    // 4. Check that the cell wer'e moving to isn't set to clear
                    stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !== 'clear'
                ) {
                    return true;
                }
            }
        }
    }
};
