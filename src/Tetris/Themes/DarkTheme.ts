import { ThemeType } from './ThemeTypes';

export const darkTheme: ThemeType = {
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
        background: 'linear-gradient(to bottom, #0f2027, #203a43, #2c5364)',
        color: '#FFF',
        borderColor: '#FFF',
        borderWidth: '1px',
        fontSize: '20px',
    },
    modal: {
        overlay: 'rgba(255, 255, 255, 0.6)',
        background: '#000',
        color: '#FFF',
    },
    stage: {
        background: '#000',
        lines: '#777',
        guide: 'rgba(255,255,255,0.2)',
    },
    buttonsAndDisplays: {
        background: '#0f2027',
        color: '#FFF',
    },
};
