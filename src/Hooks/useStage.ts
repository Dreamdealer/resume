import { useState, useEffect } from 'react';
import { createStage, StageType } from '../gameHelpers';
import { PlayerStateType } from './usePlayer';

export const useStage = (player: PlayerStateType) => {
    const [ stage, setStage ] = useState<StageType>(createStage());

    useEffect(() => {
        const updateStage = (prevStage: StageType) => {
            // flush stage
            // eslint-disable-next-line array-callback-return
            const newStage = prevStage.map(row => {
                row.map(cell => { return cell[1] === 'clear' ? [0, 'clear'] : cell })
            })

            // draw the current tetromino
            player.tetromino.forEach((row, y: number) => {
                row.forEach((value: 0 | string, x: number) => {
                    if (value !== 0) {
                        // const newY = y + player.pos.x;
                        // const newX = x + player.pos.x;

                        // newStage[newY][newX] = [
                        //     value,
                        //     player.collided ? 'merged' : 'clear',
                        // ];
                    }
                });
            });

            return newStage;
        }

        //setStage(prev => updateStage(prev));

    }, [player.collided, player.pos.x, player.tetromino]);

    return [ stage, setStage ];
};