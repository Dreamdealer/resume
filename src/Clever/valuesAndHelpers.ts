import { ScoreBoardColorType } from "./Hooks/useGameContext";
import { CleverColorsType, DicesType, ThrownDiceType } from "./Types";

export const CleverColors: CleverColorsType = {
    grey: '#AAA',
    white: '#FFFFFF',
    yellow: '#ffe100',
    blue: '#0083d5',
    green: '#00b815',
    orange: '#e89300',
    purple: '#6800a9',
};

export const DICES: DicesType = {
    white: { color: 'WHITE', dotColor: 'black' },
    yellow: { color: 'YELLOW', dotColor: 'black' },
    blue: { color: 'BLUE', dotColor: 'white' },
    green: { color: 'GREEN', dotColor: 'white' },
    orange: { color: 'ORANGE', dotColor: 'black' },
    purple: { color: 'PURPLE', dotColor: 'white' },
};

export const startDices: ThrownDiceType[] = [
    { dice: DICES.yellow, amount: 1, available: true, turn: 0 },
    { dice: DICES.blue, amount: 1, available: true, turn: 0 },
    { dice: DICES.white, amount: 1, available: true, turn: 0 },
    { dice: DICES.green, amount: 1, available: true, turn: 0 },
    { dice: DICES.orange, amount: 1, available: true, turn: 0 },
    { dice: DICES.purple, amount: 1, available: true, turn: 0 },
];

export const hasHighlightedScorefields = (scorefields: ScoreBoardColorType) => {
    for (const [_, field] of Object.entries(scorefields)) {
        if (field.highlighted) return true;
    }

    return false;
}

export const convertBlueScoresToPoints = (score: number):number => {
    switch (score) {
        case 1: return 1;
        case 2: return 2;
        case 3: return 4;
        case 4: return 7;
        case 5: return 11;
        case 6: return 16;
        case 7: return 22;
        case 8: return 29;
        case 9: return 37;
        case 10: return 46;
        case 11: return 56;
        default: return 0;
    }
}