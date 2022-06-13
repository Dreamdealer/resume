import { ReactNode } from "react";

export type TurnTypes = 'DONE' | 'ACTIVE' | 'OPEN';
export type ColorTypes = 'YELLOW' | 'BLUE' | 'GREEN' | 'ORANGE' | 'PURPLE' | 'WHITE';

export type CleverColorsType = {
    [key: string]: string;
};

export type DiceType = {
    color: ColorTypes | null;
    dotColor: 'white' | 'black';
};

export type DicesType = {
    [key: string]: DiceType;
};

export type ThrownDiceType = {
    dice: DiceType;
    amount: number;
    available?: boolean;
    discarded?: boolean;
    turn: number;
};

export type ExtrasType = {
    total: number;
    available: number;
    used: number;
};

export type ModifiersType = {
    fieldIndex: number;
    points?: number;
    placeholder?: string;
    symbol?: string | ReactNode;
    modifier?(score: number): number;
}