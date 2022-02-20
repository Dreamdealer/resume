import { FC, useContext } from 'react';
import { CounterContext } from '../Hooks/useGameContext';
import { BlueCross } from './Extras/BlueCross';
import { Fox } from './Extras/Fox';
import { GreenCross } from './Extras/GreenCross';
import { OrangeScore } from './Extras/OrangeScore';
import { PlusOne } from './Extras/PlusOne';
import { PurpleScore } from './Extras/PurpleScore';
import { Rethrow } from './Extras/Rethrow';
import { YellowCross } from './Extras/YellowCross';
import ScoreField from './ScoreField';
import styled from 'styled-components';

const BlueField: FC = () => {
    const { scoreBoard } = useContext(CounterContext);

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

                const scoreBoardField = scoreBoard.blue[index + 1];

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
