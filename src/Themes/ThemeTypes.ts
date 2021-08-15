import { TetrominoKeyType } from '../Config/tetrominos';

export type ThemeType = {
    tetrominos: {
        [key in TetrominoKeyType & '?']: {
            color: string;
        };
    };
    main: {
        background: string;
        color: string;
        borderColor: string;
        borderWidth: string;
        fontSize: string;
    };
    modal: {
        overlay: string;
        background: string;
        color: string;
    };
    stage: {
        background: string;
        lines: string;
        guide: string;
    };
    buttonsAndDisplays: {
        background: string;
        color: string;
    };
};
