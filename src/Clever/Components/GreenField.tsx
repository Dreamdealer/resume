import { FC } from 'react';
import { ModifiersType } from '../Types';
import ScoreField from './ScoreField';
import styled from 'styled-components';
import { PlusOne } from './Extras/PlusOne';

type PropsType = {
    scores: number[];
};

const modifiers: ModifiersType[] = [
    {
        fieldIndex: 1,
        placeholder: '⪭ 1',
        points: 1,
    },
    {
        fieldIndex: 2,
        placeholder: '⪭ 2',
        points: 3,
    },
    {
        fieldIndex: 3,
        placeholder: '⪭ 3',
        points: 6,
    },
    {
        fieldIndex: 4,
        placeholder: '⪭ 4',
        points: 10,
        symbol: <PlusOne />,
        modifier: (score: number) => score * 2,
    },
    {
        fieldIndex: 5,
        placeholder: '⪭ 5',
        points: 15,
    },
    {
        fieldIndex: 6,
        placeholder: '⪭ 1',
        points: 21,
        modifier: (score: number) => {
            console.log('add a blue cross');
            return score;
        },
    },
    {
        fieldIndex: 7,
        placeholder: '⪭ 2',
        points: 28,
    },
    {
        fieldIndex: 8,
        placeholder: '⪭ 3',
        points: 36,
    },
    {
        fieldIndex: 9,
        placeholder: '⪭ 4',
        points: 45,
    },
    {
        fieldIndex: 10,
        placeholder: '⪭ 5',
        points: 55,
    },
    {
        fieldIndex: 11,
        placeholder: '⪭ 6',
        points: 66,
    },
];

const GreenField: FC<PropsType> = ({ scores }) => {
    const scoreFields = [...scores, ...Array(11 - scores.length).fill(null)];

    return (
        <StyledGreenField>
            {scoreFields.map((score, index) => {
                return (
                    <ScoreField
                        key={index}
                        score={score}
                        color="green"
                        modifier={modifiers.filter(m => m.fieldIndex === index + 1)[0]}
                    />
                );
            })}
        </StyledGreenField>
    );
};

export default GreenField;

const StyledGreenField = styled.div`
    width: 100%;
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 3.5em;
    gap: 0 1.6%;
    grid-template-areas: '. . . . . . . . . . .';
`;
