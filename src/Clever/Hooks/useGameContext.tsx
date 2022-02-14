import React, { FC, ReactNode, useState } from 'react';
import { BlueCross } from '../Components/Extras/BlueCross';
import { Fox } from '../Components/Extras/Fox';
import { GreenCross } from '../Components/Extras/GreenCross';
import { OrangeScore } from '../Components/Extras/OrangeScore';
import { PlusOne } from '../Components/Extras/PlusOne';
import { PurpleScore } from '../Components/Extras/PurpleScore';
import { Rethrow } from '../Components/Extras/Rethrow';
import { YellowCross } from '../Components/Extras/YellowCross';
import { ExtrasType, ThrownDiceType } from '../Types';
import { startDices } from '../values';

type ContextProps = {
    dices: ThrownDiceType[];
    turn: number;
    foxes: number;
    rethrows: ExtrasType;
    plusones: ExtrasType;
    scores: {
        yellow: number[];
        blue: number[];
        green: number[];
        orange: number[];
        purple: number[];
    };
    throwDices: () => void;
    chooseDice: (dice: ThrownDiceType) => void;
    nextTurn: () => void;
    addRethrow: () => void;
    addPlusOne: () => void;
    scoreModifiers: ScoreModifierType;
};

export type ScoreModifierType = {
    [key: string]: any;
};

const initialValues: ContextProps = {
    dices: startDices,
    turn: 1,
    foxes: 0,
    rethrows: { total: 7, available: 0, used: 0 },
    plusones: { total: 7, available: 0, used: 0 },
    scores: {
        yellow: [3.1, 4.2, 1.1, 1.2],
        blue: [2, 6, 7, 12],
        green: [],
        orange: [],
        purple: [],
    },
    throwDices: () => {},
    chooseDice: () => {},
    nextTurn: () => {},
    addRethrow: () => {},
    addPlusOne: () => {},
    scoreModifiers: {},
};

const CounterContext = React.createContext(initialValues);

const CounterProvider: FC = ({ children }) => {
    const [dices, setDices] = useState(initialValues.dices);
    const [rethrows, setRethrows] = useState(initialValues.rethrows);
    const [plusones, setPlusones] = useState(initialValues.plusones);
    const [scores, setScores] = useState({
        yellow: initialValues.scores.yellow,
        blue: initialValues.scores.blue,
        green: initialValues.scores.green,
        orange: initialValues.scores.orange,
        purple: initialValues.scores.purple,
    });
    const [turn, setTurn] = useState(initialValues.turn);
    const [foxes, setFoxes] = useState(initialValues.foxes);

    const scoreModifiers: ScoreModifierType = {
        orange: {
            '3': { method: () => addRethrow(), symbol: <Rethrow /> },
            '4': { method: () => multiplyLastScore(2), placeholder: 'x2' },
            '5': { method: () => addYellowScore(), symbol: <YellowCross /> },
            '6': { method: () => addPlusOne(), symbol: <PlusOne /> },
            '7': { method: () => multiplyLastScore(2), placeholder: 'x2' },
            '8': { method: () => addFox(), symbol: <Fox /> },
            '9': { method: () => multiplyLastScore(2), placeholder: 'x2' },
            '2': { method: () => addPurpleScore(), symbol: <PurpleScore score={6} /> },
            '10': { method: () => addPurpleScore(), symbol: <PurpleScore score={6} /> },
            '11': { method: () => multiplyLastScore(3), placeholder: 'x3' },
        },
        purple: {
            '2': { method: () => addOrangeScore(), symbol: <OrangeScore score={6} /> },
            '3': { method: () => addRethrow(), symbol: <Rethrow /> },
            '4': { method: () => addBlueScore(), symbol: <BlueCross /> },
            '5': { method: () => addPlusOne(), symbol: <PlusOne /> },
            '6': { method: () => addYellowScore(), symbol: <YellowCross /> },
            '7': { method: () => addFox(), symbol: <Fox /> },
            '8': { method: () => addRethrow(), symbol: <Rethrow /> },
            '9': { method: () => addGreenScore(), symbol: <GreenCross /> },
            '10': { method: () => addOrangeScore(), symbol: <OrangeScore score={6} /> },
        },
    };

    const throwDices = () => {
        setDices(scrambleDices(dices));
    };

    const addRethrow = () => {
        setRethrows({ ...rethrows, available: rethrows.available + 1 });
    };

    const addPlusOne = () => {
        setPlusones({ ...plusones, available: plusones.available + 1 });
    };

    const addOrangeScore = () => {
        return { orange: [...scores.orange, 6] };
    };

    const addPurpleScore = () => {
        return { purple: [...scores.purple, 6] };
    };

    const addYellowScore = () => {
        console.log('trigger choice of yellow score');
    };

    const addGreenScore = () => {
        console.log('trigger choice of green score');
    };

    const addFox = () => {
        console.log('add a fox 🎉');
    };

    const addBlueScore = () => {
        console.log('trigger choice of blue score');
    };

    const multiplyLastScore = (multiplyBy: number) => {
        const lastScore = scores.orange.at(-1);
        if (lastScore) {
            const newScores = [...scores.orange, lastScore * multiplyBy];
            return { orange: [...newScores] };
        }
    };

    const chooseDice = (clickedDice: ThrownDiceType) => {
        // make sure there's not more than three dices selected
        if (dices.filter(dice => !dice.available).length >= 3) {
            return;
        }

        // add selected dice score to the scoreboard
        switch (clickedDice.dice.color) {
            case 'ORANGE':
                const scoreChange = scoreModifiers.orange[scores.orange.length + 1]?.method?.();
                setScores({ ...scores, orange: [...scores.orange, clickedDice.amount], ...scoreChange });
                break;
            case 'PURPLE':
                const lastScore = scores.purple[scores.purple.length - 1];
                if (clickedDice.amount > lastScore || lastScore === 6 || !lastScore) {
                    const scoreChange = scoreModifiers.purple[scores.purple.length + 1]?.method?.();
                    setScores({ ...scores, purple: [...scores.purple, clickedDice.amount], ...scoreChange });
                } else {
                    return;
                }
                break;
        }

        // select clicked dice and scramble the rest
        // setDices(
        //     scrambleDices(
        //         dices
        //             .map(dice => {
        //                 if (clickedDice.dice === dice.dice) {
        //                     return { ...dice, available: false, turn };
        //                 }

        //                 return dice;
        //             })
        //             .sort((a, b) => b.turn - a.turn),
        //     ),
        // );
    };

    const nextTurn = () => {
        if (turn < 7) {
            setTurn(turn + 1);
        }
    };

    const contextValue = {
        dices,
        turn,
        foxes,
        rethrows,
        plusones,
        scores,
        throwDices,
        chooseDice,
        nextTurn,
        addRethrow,
        addPlusOne,
        scoreModifiers,
    };

    return <CounterContext.Provider value={contextValue}>{children}</CounterContext.Provider>;
};

const scrambleDices = (dices: ThrownDiceType[]) => {
    return dices.map(dice => {
        if (dice.available) {
            return { ...dice, amount: Math.floor(Math.random() * 6) + 1 };
        }

        return dice;
    });
};

export { CounterContext, CounterProvider };
