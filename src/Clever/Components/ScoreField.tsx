import styled from 'styled-components';

export type ScoreFieldType = { 
    checked?: boolean; 
    symbol?: boolean;
    score?: number;
    points?: boolean; 
    placeholder?: string; 
    rightSymbol?: string; 
}

const ScoreField = styled.div<ScoreFieldType>`
    background-color: ${({symbol, points: score}) => symbol || score ? 'transparent' : '#FFF'};
    color: ${({symbol, points}) => symbol || points ? '#FFF' : 'inherit'};
    border-radius: 5px;
    font-size: 1.5em;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    ${({points}) => points && 'grid-area: score;'}

    ${({score}) => score && `
        &:before { 
            content: '${score}';
            font-size: 1.8em;
            position: absolute;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #000;
            text-shadow: .5px .5px 0 #000, .5px -.5px 0 #000, -.5px .5px 0 #000, -.5px -.5px 0 #000;
    }`};

    ${({checked}) => checked && `
        &:after { 
            content: 'X';
            font-size: 1.8em;
            position: absolute;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #000;
            text-shadow: 1px 1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, -1px -1px 0 #000;
    }`};

    ${({placeholder}) => placeholder && `
        &:after { 
            content: '${placeholder}';
            font-size: 1em;
            position: absolute;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            opacity: 0.5;
    }`};

    ${({rightSymbol}) => rightSymbol && `
        &:after { 
            content: '${rightSymbol}';
            color: #FFF;
            font-size: 2em;
            position: absolute;
            display: flex;
            margin-top: -.25em;
            right: -30%;
            justify-content: center;
            align-items: center;
            z-index: 1;
            text-shadow: 2px 2px 0 #000, -2px 0 0 #000;
    }`};
`;

export default ScoreField;