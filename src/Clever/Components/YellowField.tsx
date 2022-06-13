import { FC, useContext } from 'react';
import styled from 'styled-components';
import { CounterContext } from '../Hooks/useGameContext';
import { ModifiersType } from '../Types';
import { BlueCross } from './Extras/BlueCross';
import { Fox } from './Extras/Fox';
import { GreenCross } from './Extras/GreenCross';
import { OrangeScore } from './Extras/OrangeScore';
import { PlusOne } from './Extras/PlusOne';
import { Points } from './Extras/Points';
import ScoreField from './ScoreField';

const YellowField: FC = () => {
    const { scoreBoard } = useContext(CounterContext);

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

                const scoreBoardField = scoreBoard.yellow[index + 1];

                if (!scoreBoardField) return;

                return (
                    <ScoreField
                        key={index}
                        index={index}
                        color={'yellow'}
                        score={scoreBoardField.score ?? 0}
                        points={scoreBoardField.points}
                        symbol={scoreBoardField.symbol}
                        placeholder={scoreBoardField.placeholder}
                        highlighted={scoreBoardField.highlighted}
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
