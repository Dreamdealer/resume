import { ThemeType } from './ThemeTypes';

export const lightTheme: ThemeType = {
    tetrominos: {
        0: { color: '#000' },
        I: { color: '#9cdaff' },
        J: { color: '#c568a5' },
        L: { color: '#ffd265' },
        O: { color: '#bcff7c' },
        S: { color: '#cd94ff' },
        T: { color: '#8aedeb' },
        Z: { color: '#dea6ec' },
        '?': { color: '#ece7a6' },
    },
    main: {
        background: 'linear-gradient(to top, #ffefba, #ffffff)',
        color: '#000',
        borderColor: '#000',
        borderWidth: '1px',
        fontSize: '20px',
    },
    modal: {
        overlay: 'rgba(0, 0, 0, 0.6)',
        background: '#FFF',
        color: '#000',
    },
    stage: {
        background: '#FFF',
        lines: '#BBB',
        guide: 'rgba(0,0,0,0.05)',
    },
    buttonsAndDisplays: {
        background: '#FFF',
        color: '#000',
    },
};
