import { FC, useContext } from 'react';
import styled from 'styled-components';
import { CounterContext } from '../Hooks/useGameContext';
import ScoreField from './ScoreField';

type PropsType = {
    scores: number[];
};

const OrangeField: FC<PropsType> = ({ scores }) => {
    const scoreFields = [...scores, ...Array(11 - scores.length).fill(null)];
    const { scoreModifiers } = useContext(CounterContext);

    return (
        <StyledOrangeField>
            {scoreFields.map((score, index) => {
                return <ScoreField key={index} score={score} modifier={scoreModifiers.orange[index + 1]} />;
            })}
        </StyledOrangeField>
    );
};

export default OrangeField;

const StyledOrangeField = styled.div`
    width: 100%;
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 0 1.6%;
    grid-template-areas: '. . . . . . . . . . .';
    align-items: center;
`;
