export type TetrominoShapeType = Array<Array<string | number>>;

export type TetrominoKeyType = 0 | "I" | "J" | "L" | "O" | "S" | "T" | "Z";

export type TetrominoType = {
    shape: TetrominoShapeType;
    color: string;
}

export type TetrominosType = {
    [key in TetrominoKeyType]: TetrominoType;
};

export const TETROMINOS: TetrominosType = {
    0: { shape: [[0]], color: '0, 0, 0' },
    I: {
        shape: [[0, 'I', 0, 0], [0, 'I', 0, 0], [0, 'I', 0, 0], [0, 'I', 0, 0]],
        color: '#9cdaff',
    },
    J: {
        shape: [[0, 'J', 0], [0, 'J', 0], ['J', 'J', 0]],
        color: '#c568a5',
    },
    L: {
        shape: [[0, 'L', 0], [0, 'L', 0], [0, 'L', 'L']],
        color: '#ffd265',
    },
    O: {
        shape: [['O', 'O'], ['O', 'O']],
        color: '#bcff7c',
    },
    S: {
        shape: [[0, 'S', 'S'], ['S', 'S', 0], [0, 0, 0]],
        color: '#cd94ff',
    },
    T: {
        shape: [[0, 0, 0], ['T', 'T', 'T'], [0, 'T', 0]],
        color: '#8aedeb',
    },
    Z: {
        shape: [['Z', 'Z', 0], [0, 'Z', 'Z'], [0, 0, 0]],
        color: '#dea6ec',
    },
};
  
export const randomTetromino = () => {
    const tetrominos = 'IJLOSTZ';
    const randTetromino = tetrominos[Math.floor(Math.random() * tetrominos.length)];
    return TETROMINOS[randTetromino as keyof TetrominosType];
};