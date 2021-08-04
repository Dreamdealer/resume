export type TetrominoShapeType = Array<Array<any>>

export type TetrominoType = {
    shape: TetrominoShapeType;
    color: string;
}

export type TetrominosType = {
    0: TetrominoType;
    I: TetrominoType;
    J: TetrominoType;
    L: TetrominoType;
    O: TetrominoType;
    S: TetrominoType;
    T: TetrominoType;
    Z: TetrominoType;
}

export const TETROMINOS: TetrominosType = {
    0: { shape: [[0]], color: '0, 0, 0' },
    I: {
        shape: [[0, 'I', 0, 0], [0, 'I', 0, 0], [0, 'I', 0, 0], [0, 'I', 0, 0]],
        color: '#db7093',
    },
    J: {
        shape: [[0, 'J', 0], [0, 'J', 0], ['J', 'J', 0]],
        color: '#db7093',
    },
    L: {
        shape: [[0, 'L', 0], [0, 'L', 0], [0, 'L', 'L']],
        color: '#db7093',
    },
    O: {
        shape: [['O', 'O'], ['O', 'O']],
        color: '#db7093',
    },
    S: {
        shape: [[0, 'S', 'S'], ['S', 'S', 0], [0, 0, 0]],
        color: '#db7093',
    },
    T: {
        shape: [[0, 0, 0], ['T', 'T', 'T'], [0, 'T', 0]],
        color: '#db7093',
    },
    Z: {
        shape: [['Z', 'Z', 0], [0, 'Z', 'Z'], [0, 0, 0]],
        color: '#db7093',
    },
};
  
export const randomTetromino = () => {
    const tetrominos = 'IJLOSTZ';
    const randTetromino = tetrominos[Math.floor(Math.random() * tetrominos.length)];
    return TETROMINOS[randTetromino as keyof TetrominosType];
};