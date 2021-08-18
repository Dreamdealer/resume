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

const emptyHighscoreEntry: HighscoreType = {
    name: '-----',
    score: 0,
    date: '0',
};

const SingleTetromino: FC<PropsType> = props => {
    const highscores = props.highscores
        .sort((a, b) => (a.score > b.score ? -1 : b.score > a.score ? 1 : 0))
        .slice(0, 3);

    // add three items, to make sure there's always three entries showing in the list
    const populatedHighscores: HighscoreType[] = [
        ...highscores,
        emptyHighscoreEntry,
        emptyHighscoreEntry,
        emptyHighscoreEntry,
    ];

    return (
        <Box direction="column" grow={1} width="100%">
            {populatedHighscores.slice(0, 3).map((player: HighscoreType) => (
                <Box grow={1} justifyContent="space-between">
                    <Box>{player.name.toUpperCase()}</Box>
                    <Box>{player.score}</Box>
                </Box>
            ))}
        </Box>
    );
};

export default SingleTetromino;
