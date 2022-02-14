import { FC, useContext } from 'react';
import styled from 'styled-components';
import { CounterContext } from '../Hooks/useGameContext';
import ScoreField from './ScoreField';

type PropsType = {
    scores: number[];
};

const PurpleField: FC<PropsType> = ({ scores }) => {
    const scoreFields = [...scores, ...Array(11 - scores.length).fill(null)];
    const { scoreModifiers } = useContext(CounterContext);

    return (
        <StyledPurpleField>
            {scoreFields.map((score, index) => {
                return <ScoreField key={index} score={score} modifier={scoreModifiers.purple[index + 1]} />;
            })}
        </StyledPurpleField>
    );
};

export default PurpleField;

const StyledPurpleField = styled.div`
    width: 100%;
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 0 1.6%;
    grid-template-areas: '. . . . . . . . . . .';
    align-items: center;
`;
