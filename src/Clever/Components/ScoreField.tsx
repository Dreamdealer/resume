import { FC, ReactNode, useContext } from 'react';
import { ModifiersType } from '../Types';
import styled from 'styled-components';
import { Points } from './Extras/Points';
import { CounterContext } from '../Hooks/useGameContext';

type PropsType = {
    score?: number;
    modifier?: ModifiersType; // deprecate
    points?: number;
    highlighted?: boolean;
    color: string;
    placeholder?: string;
    index?: number;
    symbol?: ReactNode;
};

const ScoreField: FC<PropsType> = ({ color, score, placeholder, highlighted, symbol, points }) => {
    const { clickToSelectScore } = useContext(CounterContext);

    const moddedScore = (color === 'yellow' || color === 'blue' || color === 'green') && score ? 'X' : score;

    const moddedPlaceholder =
        color === 'yellow' && placeholder?.toUpperCase() !== 'X'
            ? parseInt(placeholder ? placeholder : '').toString()
            : placeholder;

    return (
        <StyledScoreField onClick={() => clickToSelectScore(color, placeholder)}>
            {points && <Points points={points} color={color} />}
            <StyledScoreBox score={moddedScore} placeholder={moddedPlaceholder} highlighted={highlighted} />
            {color !== 'yellow' && color !== 'blue' && <StyledSymbol>{symbol}</StyledSymbol>}
        </StyledScoreField>
    );
};

const StyledScoreField = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    height: 100%;

    ${Points} {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-grow: 1;

        &:after {
            position: absolute;
            top: -1.3em;
        }
    }
`;

const StyledScoreBox = styled.div<{ score?: number | string; placeholder?: string; highlighted?: boolean }>`
    background: #fff;
    border-radius: 5px;
    font-size: 1.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    width: 2em;
    height: 2em;

    // highlight field
    ${({ highlighted }) =>
        highlighted &&
        `
        box-shadow: 
            0 0 0 3px #C00 inset,
            0 0 0 3px #C00,
            0 0 0.8em #F00
        ;
        color: #F00;
        cursor: pointer;
    `}

    ${({ score }) =>
        score &&
        `
        &:after {
            content: '${score}';
            font-size: 2rem;
            position: absolute;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #000;
    }`};

    ${({ placeholder }) =>
        placeholder &&
        `
        &:before {
            content: '${placeholder}';
            font-size: 1.5rem;
            position: absolute;
            font-weight: ${placeholder === 'X' ? 'bold' : 'normal'};
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            opacity: 0.7;
    }`};
`;

const StyledSymbol = styled.div`
    height: 1em;
    display: flex;
    justify-content: center;
    color: #fff;
    position: relative;
    top: -0.6em;
`;

export default ScoreField;
