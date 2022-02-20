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
    selectFieldMode: boolean;
    scoreBoard: ScoreBoardType;
    scoresPerColor: {
        yellow: number;
        blue: number;
        green: number;
        orange: number;
        purple: number;
    };
    throwDices: () => void;
    chooseDice: (dice: ThrownDiceType) => void;
    nextTurn: () => void;
    addRethrow: () => void;
    addPlusOne: () => void;
    clickToSelectScore: (color: string, placeholder?: string) => void;
    recalculateTotalScores: () => void;
};

const initialValues: ContextProps = {
    dices: startDices,
    turn: 1,
    foxes: 0,
    rethrows: { total: 7, available: 0, used: 0 },
    plusones: { total: 7, available: 0, used: 0 },
    selectFieldMode: false,
    scoreBoard: {},
    scoresPerColor: {
        yellow: 0,
        blue: 0,
        green: 0,
        orange: 0,
        purple: 0,
    },
    throwDices: () => {},
    chooseDice: () => {},
    nextTurn: () => {},
    addRethrow: () => {},
    addPlusOne: () => {},
    clickToSelectScore: () => {},
    recalculateTotalScores: () => {},
};

export type ScoreBoardFieldType = {
    score: null | number;
    placeholder?: string;
    symbol?: ReactNode;
    points?: number;
    highlighted?: boolean;
    validator?(score: number, prevScore?: number | null): boolean;
    callback?(): void;
};

export type ScoreBoardColorType = {
    [key: number]: ScoreBoardFieldType;
};

export type ScoreBoardType = {
    [key: string]: ScoreBoardColorType;
};

const CounterContext = React.createContext(initialValues);

const CounterProvider: FC = ({ children }) => {
    const [dices, setDices] = useState(initialValues.dices);
    const [rethrows, setRethrows] = useState(initialValues.rethrows);
    const [plusones, setPlusones] = useState(initialValues.plusones);
    const [turn, setTurn] = useState(initialValues.turn);
    const [foxes, setFoxes] = useState(initialValues.foxes);
    const [selectFieldMode, setSelectFieldMode] = useState(initialValues.selectFieldMode);
    const [selectFieldScore, setSelectFieldScore] = useState(0);
    const [scoresPerColor, setScoresPerColor] = useState(initialValues.scoresPerColor);

    const [scoreBoard, setScoreBoard] = useState<ScoreBoardType>({
        yellow: {
            1: {
                score: null,
                placeholder: '3.1',
                validator: (score: number) => score == 3.1,
                callback: () => {
                    console.log('Yellow field 3.1 checked!');
                    console.log('Check first vertical column in yellow grid!');
                    console.log('Check first horizontal row in yellow grid!');
                },
            },
            2: {
                score: null,
                placeholder: '6.1',
                validator: (score: number) => score == 6.1,
                callback: () => {
                    console.log('Yellow field 6.1 checked!');
                    console.log('Check second vertical column in yellow grid!');
                    console.log('Check first horizontal row in yellow grid!');
                },
            },
            3: {
                score: null,
                placeholder: '5.1',
                validator: (score: number) => score == 5.1,
                callback: () => {
                    console.log('Yellow field 5.1 checked!');
                    console.log('Check third vertical column in yellow grid!');
                    console.log('Check first horizontal row in yellow grid!');
                },
            },
            4: { score: null, placeholder: 'X' },
            6: { score: null, placeholder: '2.1', validator: (score: number) => score == 2.1 },
            7: { score: null, placeholder: '1.1', validator: (score: number) => score == 1.1 },
            8: { score: null, placeholder: 'X' },
            9: { score: null, placeholder: '5.2', validator: (score: number) => score == 5.2 },
            11: { score: null, placeholder: '1.2', validator: (score: number) => score == 1.2 },
            12: { score: null, placeholder: 'X' },
            13: { score: null, placeholder: '2.2', validator: (score: number) => score == 2.2 },
            14: { score: null, placeholder: '4.1', validator: (score: number) => score == 4.1 },
            16: { score: null, placeholder: 'X' },
            17: { score: null, placeholder: '3.2', validator: (score: number) => score == 3.2 },
            18: { score: null, placeholder: '4.2', validator: (score: number) => score == 4.2 },
            19: { score: null, placeholder: '6.2', validator: (score: number) => score == 6.2 },
        },
        blue: {
            1: { score: null, placeholder: '2', validator: (score: number) => score == 2 },
            2: { score: null, placeholder: '3', validator: (score: number) => score == 3 },
            3: { score: null, placeholder: '4', validator: (score: number) => score == 4 },
            5: { score: null, placeholder: '5', validator: (score: number) => score == 5 },
            6: { score: null, placeholder: '6', validator: (score: number) => score == 6 },
            7: { score: null, placeholder: '7', validator: (score: number) => score == 7 },
            8: { score: null, placeholder: '8', validator: (score: number) => score == 8 },
            10: { score: null, placeholder: '9', validator: (score: number) => score == 9 },
            11: { score: null, placeholder: '10', validator: (score: number) => score == 10 },
            12: { score: null, placeholder: '11', validator: (score: number) => score == 11 },
            13: { score: null, placeholder: '12', validator: (score: number) => score == 12 },
        },
        green: {
            1: {
                score: null,
                points: 1,
                placeholder: '≥1',
                validator: (score: number, prevScore: number) => score >= 1 && prevScore !== null,
            },
            2: {
                score: null,
                points: 3,
                placeholder: '≥2',
                validator: (score: number, prevScore: number) => score >= 2 && prevScore !== null,
            },
            3: {
                score: null,
                points: 6,
                placeholder: '≥3',
                validator: (score: number, prevScore: number) => score >= 3 && prevScore !== null,
            },
            4: {
                score: null,
                points: 10,
                placeholder: '≥4',
                validator: (score: number, prevScore: number) => score >= 4 && prevScore !== null,
                callback: () => addPlusOne(),
                symbol: <PlusOne />,
            },
            5: {
                score: null,
                points: 15,
                placeholder: '≥5',
                validator: (score: number, prevScore: number) => score >= 5 && prevScore !== null,
            },
            6: {
                score: null,
                points: 21,
                placeholder: '≥1',
                validator: (score: number, prevScore: number) => score >= 1 && prevScore !== null,
                callback: () => clickToSelectScore('blue'),
                symbol: <BlueCross />,
            },
            7: {
                score: null,
                points: 28,
                placeholder: '≥2',
                validator: (score: number, prevScore: number) => score >= 2 && prevScore !== null,
                callback: () => addFox(),
                symbol: <Fox />,
            },
            8: {
                score: null,
                points: 36,
                placeholder: '≥3',
                validator: (score: number, prevScore: number) => score >= 3 && prevScore !== null,
            },
            9: {
                score: null,
                points: 45,
                placeholder: '≥4',
                validator: (score: number, prevScore: number) => score >= 4 && prevScore !== null,
                callback: () => addDiceScore('purple', 6),
                symbol: <PurpleScore score={6} />,
            },
            10: {
                score: null,
                points: 55,
                placeholder: '≥5',
                validator: (score: number, prevScore: number) => score >= 5 && prevScore !== null,
                callback: () => addRethrow(),
                symbol: <Rethrow />,
            },
            11: {
                score: null,
                points: 66,
                placeholder: '≥6',
                validator: (score: number, prevScore: number) => score >= 6 && prevScore !== null,
            },
        },
        orange: {
            1: { score: null, validator: orangeValidator },
            2: { score: null, validator: orangeValidator },
            3: { score: null, validator: orangeValidator, callback: () => addRethrow(), symbol: <Rethrow /> },
            4: { score: null, validator: orangeValidator, callback: () => multiplyLastScore(4, 2), placeholder: 'x2' },
            5: {
                score: null,
                validator: orangeValidator,
                callback: () => clickToSelectScore('yellow'),
                symbol: <YellowCross />,
            },
            6: { score: null, validator: orangeValidator, callback: () => addPlusOne(), symbol: <PlusOne /> },
            7: { score: null, validator: orangeValidator, callback: () => multiplyLastScore(7, 2), placeholder: 'x2' },
            8: { score: null, validator: orangeValidator, callback: () => addFox(), symbol: <Fox /> },
            9: { score: null, validator: orangeValidator, callback: () => multiplyLastScore(9, 2), placeholder: 'x2' },
            10: {
                score: null,
                validator: orangeValidator,
                callback: () => addDiceScore('purple', 6),
                symbol: <PurpleScore score={6} />,
            },
            11: {
                score: null,
                validator: orangeValidator,
                callback: () => multiplyLastScore(11, 3),
                placeholder: 'x3',
            },
        },
        purple: {
            1: { score: null, validator: purpleValidator },
            2: { score: null, validator: purpleValidator },
            3: {
                score: null,
                validator: purpleValidator,
                callback: () => addRethrow(),
                symbol: <Rethrow />,
            },
            4: {
                score: null,
                validator: purpleValidator,
                callback: () => clickToSelectScore('blue'),
                symbol: <BlueCross />,
            },
            5: { score: null, validator: purpleValidator, callback: () => addPlusOne(), symbol: <PlusOne /> },
            6: {
                score: null,
                validator: purpleValidator,
                callback: () => clickToSelectScore('yellow'),
                symbol: <YellowCross />,
            },
            7: { score: null, validator: purpleValidator, callback: () => addFox(), symbol: <Fox /> },
            8: { score: null, validator: purpleValidator, callback: () => addRethrow(), symbol: <Rethrow /> },
            9: {
                score: null,
                validator: purpleValidator,
                callback: () => addDiceScore('green', 6),
                symbol: <GreenCross />,
            },
            10: {
                score: null,
                validator: purpleValidator,
                callback: () => addDiceScore('orange', 6),
                symbol: <OrangeScore score={6} />,
            },
            11: { score: null, validator: purpleValidator, callback: () => addPlusOne(), symbol: <PlusOne /> },
        },
    });

    const throwDices = () => {
        setDices(scrambleDices(dices));
    };

    const clickToSelectScore = (color: string, placeholder?: string) => {
        if (!selectFieldMode) return;

        console.log('clicked', color, 'field to add score to');

        switch (color) {
            case 'yellow':
                addDiceScore('yellow', parseFloat(placeholder || '0'));
                break;
            case 'blue':
                addDiceScore('blue', parseFloat(placeholder || '0'));
                break;
            case 'green':
                addDiceScore('green', selectFieldScore);
                break;
            case 'orange':
                addDiceScore('orange', selectFieldScore);
                break;
            case 'purple':
                addDiceScore('purple', selectFieldScore);
                break;
        }

        setSelectFieldMode(false);
        resetHighlightedFields();
    };

    const addRethrow = () => {
        setRethrows({ ...rethrows, available: rethrows.available + 1 });
    };

    const addPlusOne = () => {
        setPlusones({ ...plusones, available: plusones.available + 1 });
    };

    const addFox = () => {
        setFoxes(foxes + 1);
    };

    const addDiceScore = (color: string, score: number) => {
        switch (color) {
            case 'yellow':
                addScore('yellow', score);
                break;
            case 'blue':
                addScore('blue', score);
                break;
            case 'green':
                addScore('green', score);
                break;
            case 'orange':
                addScore('orange', score);
                break;
            case 'purple':
                addScore('purple', score);
                break;
        }
    };

    const setHighlightedFields = (color: string, score: number) => {
        const blueScore = getBlueScore();
        console.log('set highlighted fields ', color, 'for score: ', color === 'blue' ? blueScore : score);

        setScoreBoard(prevState => {
            const newState = { ...prevState };

            let prevScore;
            for (const [_, field] of Object.entries(newState[color])) {
                if (!field.validator) continue;

                switch (color) {
                    case 'yellow':
                        // in case of a yellow field, we need to check for both yellow options (+.1 and +.2)
                        if (
                            !field.score &&
                            (field.validator(score + 0.1, prevScore) || field.validator(score + 0.2, prevScore))
                        ) {
                            field.highlighted = true;
                        }
                        break;
                    case 'blue':
                        if (!field.score && field.validator(blueScore, prevScore)) {
                            field.highlighted = true;
                        }
                        break;
                    default:
                        if (!field.score && field.validator(score, prevScore)) {
                            field.highlighted = true;
                        }
                        break;
                }

                prevScore = field.score;
            }

            return prevState;
        });
    };

    const resetHighlightedFields = () => {
        setScoreBoard(prevState => {
            const newState = { ...prevState };

            for (const [_, field] of Object.entries(newState.yellow)) field.highlighted = false;
            for (const [_, field] of Object.entries(newState.blue)) field.highlighted = false;
            for (const [_, field] of Object.entries(newState.green)) field.highlighted = false;
            for (const [_, field] of Object.entries(newState.orange)) field.highlighted = false;
            for (const [_, field] of Object.entries(newState.purple)) field.highlighted = false;

            return prevState;
        });
    };

    const selectScoreField = (color: string, score: number) => {
        setSelectFieldMode(true);
        setSelectFieldScore(score);

        switch (color) {
            case 'white':
                setHighlightedFields('yellow', score);
                setHighlightedFields('blue', score);
                setHighlightedFields('green', score);
                setHighlightedFields('orange', score);
                setHighlightedFields('purple', score);
                break;
            default:
                // actually only yellow needs selection of score
                setHighlightedFields(color, score);
                break;
        }
    };

    const multiplyLastScore = (index: number, multiplyBy: number) => {
        setScoreBoard(prevState => {
            const fieldScore = prevState.orange[index].score;

            if (!fieldScore) return prevState;

            return { ...prevState, orange: { ...prevState.orange, [index]: { score: fieldScore * multiplyBy } } };
        });
    };

    const getThrownDiceValueByColor = (color: string) => {
        return dices.filter(d => d.dice.color === color.toUpperCase())[0].amount;
    };

    const getBlueScore = (): number => {
        const white = getThrownDiceValueByColor('white');
        const blue = getThrownDiceValueByColor('blue');

        return white + blue;
    };

    const addScore = (color: string, score: number) => {
        console.log('Add score', score, 'to', color);

        setScoreBoard(prevState => {
            switch (color) {
                case 'yellow':
                case 'blue':
                    return addScoreToYellowOrBlue(color, prevState, score);
                case 'green':
                case 'purple':
                case 'orange':
                    return addScoreToFirstEmptyField(prevState, score, color);
                default:
                    console.error(
                        `Crap! No score setter catched... is the color ${color} present in the switch above this line?`,
                    );
            }

            return prevState;
        });
    };

    const addScoreToYellowOrBlue = (color: string, prevState: ScoreBoardType, score: number) => {
        const newState = { ...prevState };

        for (const [_, field] of Object.entries(newState[color])) {
            if (field.validator && field.validator(score)) {
                field.score = score;
            }
        }

        return newState;
    };

    const addScoreToFirstEmptyField = (prevState: ScoreBoardType, score: number, color: string) => {
        const newState = { ...prevState };

        let prevScore;
        for (const [_, field] of Object.entries(newState[color])) {
            if (!field.validator) continue;

            if (!field.score && field.validator && field.validator(score, prevScore)) {
                field.score = score;

                if (field.callback) {
                    field.callback();
                }

                break;
            }

            prevScore = field.score;
        }

        return newState;
    };

    const getLatestScoredField = (scores: ScoreBoardColorType) => {
        let prevField = null;
        let prevKey = null;

        for (const [key, field] of Object.entries(scores)) {
            if (field.score) {
                prevField = field;
                prevKey = key;
            } else {
                return { key: prevKey, field: prevField };
            }
        }
    };

    const getNumberOfSelectedDices = () => {
        return dices.filter(dice => !dice.available).length;
    };

    const chooseDice = (clickedDice: ThrownDiceType) => {
        // make sure there's not more than three dices selected
        if (getNumberOfSelectedDices() >= 3) {
            return;
        }

        // add selected dice score to the scoreboard
        switch (clickedDice.dice.color) {
            case 'WHITE':
                selectScoreField('white', clickedDice.amount);
                break;
            case 'YELLOW':
                selectScoreField('yellow', clickedDice.amount);
                break;
            case 'BLUE':
                addDiceScore('blue', getBlueScore());
                break;
            case 'GREEN':
                addDiceScore('green', clickedDice.amount);
                break;
            case 'ORANGE':
                addDiceScore('orange', clickedDice.amount);
                break;
            case 'PURPLE':
                addDiceScore('purple', clickedDice.amount);
                break;
        }

        // if this is the third selected dice, then end this round and start a new one
        if (getNumberOfSelectedDices() === 2) {
            // increase turn with one
            setTurn(turn + 1);
            // reset all selected dice
            setDices(scrambleDices(dices.map(dice => ({ ...dice, available: true, turn: 0 }))));
        } else {
            // set the selectedDice to unavailable and sort the unavailables to the turn they've been used so
            // they appear in the right order in the already-selected-dices list
            setDices(
                scrambleDices(
                    dices
                        .map(dice => (clickedDice.dice === dice.dice ? { ...dice, available: false, turn } : dice))
                        .sort((a, b) => b.turn - a.turn),
                ),
            );
        }
    };

    const recalculateTotalScores = () => {
        for (const [color, _] of Object.entries(scoreBoard)) {
            let counter = 0;
            for (const [_, field] of Object.entries(scoreBoard[color])) {
                counter = counter + (field.score ?? 0);
            }
            setScoresPerColor(prevState => ({ ...prevState, [color]: counter }));
        }
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
        selectFieldMode,
        throwDices,
        chooseDice,
        nextTurn,
        addRethrow,
        addPlusOne,
        clickToSelectScore,
        recalculateTotalScores,
        scoreBoard,
        scoresPerColor,
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

const orangeValidator = (_: number, prevScore: number) => {
    return prevScore !== null;
};

const purpleValidator = (score: number, prevScore: number) => {
    // empty scores are null
    if (prevScore === null) return false;
    // if prevScore is not set this is the first field and the score is always valid
    if (prevScore === undefined) return true;

    return score === 6 || score > prevScore;
};

export { CounterContext, CounterProvider };
