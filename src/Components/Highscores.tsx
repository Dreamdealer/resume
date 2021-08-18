import React, { FC } from 'react';
import Box from './Box';

export type HighscoreType = {
    name: string;
    score: number;
    date: string;
};

type PropsType = {
    highscores: HighscoreType[];
};

const SingleTetromino: FC<PropsType> = props => {
    return (
        <Box direction="column" grow={1} width="100%">
            {props.highscores
                .sort((a, b) => (a.score > b.score ? -1 : b.score > a.score ? 1 : 0))
                .slice(0, 3)
                .map((player: HighscoreType) => (
                    <Box grow={1} justifyContent="space-between">
                        <Box>{player.name.toUpperCase()}</Box>
                        <Box>{player.score}</Box>
                    </Box>
                ))}
        </Box>
    );
};

export default SingleTetromino;
