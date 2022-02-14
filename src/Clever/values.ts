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

const addRethrow = () => {
    console.log('add rethrow');
}
const changeLastScore = (score:number) => {
    console.log('change last score');
}
