import { FC } from 'react';
import styled from 'styled-components';
import { ModifiersType } from '../Types';
import { BlueCross } from './Extras/BlueCross';
import { Fox } from './Extras/Fox';
import { GreenCross } from './Extras/GreenCross';
import { OrangeScore } from './Extras/OrangeScore';
import { PlusOne } from './Extras/PlusOne';
import { Points } from './Extras/Points';
import { PurpleScore } from './Extras/PurpleScore';
import { Rethrow } from './Extras/Rethrow';
import { YellowCross } from './Extras/YellowCross';
import ScoreField from './ScoreField';

type PropsType = {
    scores: number[];
};

const modifiers: ModifiersType[] = [
    {
        fieldIndex: 1,
        placeholder: '2',
    },
    {
        fieldIndex: 2,
        placeholder: '3',
    },
    {
        fieldIndex: 3,
        placeholder: '4',
    },
    {
        fieldIndex: 5,
        placeholder: '5',
    },
    {
        fieldIndex: 6,
        placeholder: '6',
    },
    {
        fieldIndex: 7,
        placeholder: '7',
    },
    {
        fieldIndex: 8,
        placeholder: '8',
    },
    {
        fieldIndex: 10,
        placeholder: '9',
    },
    {
        fieldIndex: 11,
        placeholder: '10',
    },
    {
        fieldIndex: 12,
        placeholder: '11',
    },
    {
        fieldIndex: 13,
        placeholder: '12',
    },
];

const BlueField: FC<PropsType> = ({ scores }) => {
    return (
        <StyledBlueField>
            <BlueCross key="0blue" />
            {[...Array(18)].map((_, index) => {
                switch (index) {
                    case 3:
                        return <OrangeScore key={index} score={5} />;
                    case 8:
                        return <YellowCross key={index} />;
                    case 13:
                        return <Fox key={index} />;
                    case 14:
                        return <Rethrow key={index} />;
                    case 15:
                        return <GreenCross key={index} />;
                    case 16:
                        return <PurpleScore key={index} score={6} />;
                    case 17:
                        return <PlusOne key={index} />;
                }

                const modifier = modifiers.filter(m => m.fieldIndex === index + 1)[0];
                const score = modifier.placeholder
                    ? scores.includes(parseInt(modifier.placeholder))
                        ? modifier.placeholder
                        : '0'
                    : '0';

                return <ScoreField key={`${index}blue`} score={parseInt(score)} modifier={modifier} color="blue" />;
            })}
        </StyledBlueField>
    );
};

export default BlueField;

const StyledBlueField = styled.div`
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
