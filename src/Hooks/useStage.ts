import { useState, useEffect } from 'react';
import { createStage, StageType } from '../gameHelpers';
import { PlayerStateType } from './usePlayer';

export const useStage = (player: PlayerStateType, resetPlayer: any) => {
    const [ stage, setStage ] = useState(createStage());
    const [ rowsCleared, setRowsCleared ] = useState(0);

    useEffect(() => {
        //setRowsCleared(0);

        const sweepRows = (newStage: StageType) => (
            newStage.reduce((accumulator, row) => {
                if (row.findIndex(cell => cell[0] === 0) === -1) {
                    setRowsCleared(prev => prev + 1);
                    accumulator.unshift(new Array(newStage[0].length).fill([0, 'clear']));

                    return accumulator;
                }

                accumulator.push(row);

                return accumulator;
            }, [])
        )

        const updateStage = (prevStage: StageType): StageType => {
            const newStage = prevStage.map(row => {
                return row.map(cell => { return cell[1] === 'clear' ? [0, 'clear'] : cell })
            });

            // draw the current tetromino
            player.tetromino.forEach((row, y: number) => {
                row.forEach((value: number | string, x: number) => {
                    if (value !== 0) {
                        const newY = y + player.pos.y;
                        const newX = x + player.pos.x;

                        newStage[newY][newX] = [
                            value,
                            player.collided ? 'merged' : 'clear',
                        ];
                    }
                });
            });

            // check collisions
            if (player.collided) {
                resetPlayer();

                return sweepRows(newStage);
            }

            return newStage;
        }

        setStage(prevState => updateStage(prevState));

    }, [player, resetPlayer]);

    return [ stage, setStage, rowsCleared ] as const;
};