import { FC, useContext } from 'react';
import { CounterContext } from '../Hooks/useGameContext';
import ScoreField from './ScoreField';
import styled from 'styled-components';

type PropsType = {
    color: string;
};

const HorizontalField: FC<PropsType> = ({ color }) => {
    const { scoreBoard } = useContext(CounterContext);

    return (
        <StyledHorizontalField>
            {Object.keys(scoreBoard[color]).map((key, index) => {
                const scoreBoardField = scoreBoard[color][parseInt(key)];

                return (
                    <ScoreField
                        key={index}
                        index={index}
                        color={color}
                        score={scoreBoardField.score ?? 0}
                        points={scoreBoardField.points}
                        symbol={scoreBoardField.symbol}
                        placeholder={scoreBoardField.placeholder}
                        highlighted={scoreBoardField.highlighted}
                    />
                );
            })}
        </StyledHorizontalField>
    );
};

export default HorizontalField;

const StyledHorizontalField = styled.div`
    width: 100%;
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 0 1.6%;
    grid-template-areas: '. . . . . . . . . . .';
    align-items: center;
`;
