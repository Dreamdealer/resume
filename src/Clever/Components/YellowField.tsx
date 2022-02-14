import { FC } from 'react';
import styled from 'styled-components';
import { ModifiersType } from '../Types';
import { BlueCross } from './Extras/BlueCross';
import { Fox } from './Extras/Fox';
import { GreenCross } from './Extras/GreenCross';
import { OrangeScore } from './Extras/OrangeScore';
import { PlusOne } from './Extras/PlusOne';
import { Points } from './Extras/Points';
import ScoreField from './ScoreField';

type PropsType = {
    scores: number[];
};

const modifiers: ModifiersType[] = [
    {
        fieldIndex: 1,
        placeholder: '3.1',
    },
    {
        fieldIndex: 2,
        placeholder: '6.1',
    },
    {
        fieldIndex: 3,
        placeholder: '5.1',
    },
    {
        fieldIndex: 4,
        placeholder: 'X',
    },
    {
        fieldIndex: 6,
        placeholder: '2.1',
    },
    {
        fieldIndex: 7,
        placeholder: '1.1',
    },
    {
        fieldIndex: 8,
        placeholder: 'X',
    },
    {
        fieldIndex: 9,
        placeholder: '5.2',
    },
    {
        fieldIndex: 11,
        placeholder: '1.2',
    },
    {
        fieldIndex: 12,
        placeholder: 'X',
    },
    {
        fieldIndex: 13,
        placeholder: '2.2',
    },
    {
        fieldIndex: 14,
        placeholder: '4.2',
    },
    {
        fieldIndex: 16,
        placeholder: 'X',
    },
    {
        fieldIndex: 17,
        placeholder: '3.2',
    },
    {
        fieldIndex: 18,
        placeholder: '4.2',
    },
    {
        fieldIndex: 19,
        placeholder: '6',
    },
];

const YellowField: FC<PropsType> = ({ scores }) => {
    return (
        <StyledYellowField>
            {[...Array(25)].map((_, index) => {
                switch (index) {
                    case 4:
                        return <BlueCross key={index} />;
                    case 9:
                        return <OrangeScore key={index} score={4} />;
                    case 14:
                        return <GreenCross key={index} />;
                    case 19:
                        return <Fox key={index} />;
                    case 20:
                        return <Points key={index} points={10} color="yellow" />;
                    case 21:
                        return <Points key={index} points={14} color="yellow" />;
                    case 22:
                        return <Points key={index} points={16} color="yellow" />;
                    case 23:
                        return <Points key={index} points={20} color="yellow" />;
                    case 24:
                        return <PlusOne key={index} />;
                }

                const modifier = modifiers.filter(m => m.fieldIndex === index + 1)[0];
                const score = modifier.placeholder
                    ? scores.includes(parseFloat(modifier.placeholder))
                        ? parseFloat(modifier.placeholder)
                        : 0
                    : 0;

                return (
                    <ScoreField
                        key={`${index}`}
                        score={score}
                        modifier={modifiers.filter(m => m.fieldIndex === index + 1)[0]}
                        color="yellow"
                    />
                );
            })}
        </StyledYellowField>
    );
};

export default YellowField;

const StyledYellowField = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-columns: 3em 3em 3em 3em 3em;
    grid-template-rows: 3em 3em 3em 3em 3em;
    gap: 0.7em;
    grid-template-areas:
        '. . . . .'
        '. . . . .'
        '. . . . .'
        '. . . . .'
        '. . . . .';
    justify-content: center;
    justify-items: center;
    align-items: center;
`;
