import { FC, useEffect } from 'react';
import { ModifiersType } from '../Types';
import { CleverColors } from '../values';
import styled from 'styled-components';
import { Points } from './Extras/Points';

type PropsType = {
    score?: number;
    modifier?: ModifiersType;
    checked?: boolean;
    color?: string;
};

const ScoreField: FC<PropsType> = props => {
    const score = (props.color === 'yellow' || props.color === 'blue') && props.score ? 'X' : props.score;

    const placeholder =
        props.color === 'yellow' && props.modifier && props.modifier.placeholder !== 'X'
            ? parseInt(props.modifier.placeholder ? props.modifier.placeholder : '').toString()
            : props.modifier?.placeholder;

    // useEffect(() => {
    //     if (props.score && props.modifier?.modifier) {
    //         props.modifier?.modifier(props.score);
    //     }
    // }, []);

    return (
        <StyledScoreField>
            {props.modifier?.points && props.color && <Points points={props.modifier.points} color={props.color} />}
            <StyledScoreBox score={score} placeholder={placeholder} />
            {props.color !== 'yellow' && props.color !== 'blue' && (
                <StyledSymbol>{props.modifier?.symbol}</StyledSymbol>
            )}
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

const StyledScoreBox = styled.div<{ score?: number | string; placeholder?: string }>`
    background: #fff;
    border-radius: 5px;
    font-size: 1.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    width: 2em;
    height: 2em;

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
            letter-spacing: -0.1em;
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
