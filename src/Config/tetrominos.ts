export type TetrominoShapeType = Array<Array<string | number>>;

export type TetrominoKeyType = 0 | 'I' | 'J' | 'L' | 'O' | 'S' | 'T' | 'Z';

export type TetrominoType = {
    shape: TetrominoShapeType;
};

export type TetrominosType = {
    [key in TetrominoKeyType]: TetrominoType;
};

export const TETROMINOS: TetrominosType = {
    0: { shape: [[0]] },
    I: {
        shape: [
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
        ],
    },
    J: {
        shape: [
            [0, 'J', 0],
            [0, 'J', 0],
            ['J', 'J', 0],
        ],
    },
    L: {
        shape: [
            [0, 'L', 0],
            [0, 'L', 0],
            [0, 'L', 'L'],
        ],
    },
    O: {
        shape: [
            ['O', 'O'],
            ['O', 'O'],
        ],
    },
    S: {
        shape: [
            [0, 'S', 'S'],
            ['S', 'S', 0],
            [0, 0, 0],
        ],
    },
    T: {
        shape: [
            [0, 0, 0],
            ['T', 'T', 'T'],
            [0, 'T', 0],
        ],
    },
    Z: {
        shape: [
            ['Z', 'Z', 0],
            [0, 'Z', 'Z'],
            [0, 0, 0],
        ],
    },
};

export const randomTetromino = () => {
    const tetrominos = 'IJLOSTZ';
    const randTetromino = tetrominos[Math.floor(Math.random() * tetrominos.length)];
    return TETROMINOS[randTetromino as keyof TetrominosType];
};
