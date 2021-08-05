import React, { FC } from 'react';
import styled from 'styled-components';
import { tetrisConfig } from '../tetrisConfig';
import { TETROMINOS, TetrominosType } from '../tetrominos';
import Cell from './Cell';

const StyledStage = styled.div`
    width: ${() => `${tetrisConfig.stage.width * tetrisConfig.cell.size}px`};
    height: ${() => `${tetrisConfig.stage.height * tetrisConfig.cell.size}px`};
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-end;
    align-items: flex-end;
    transform-style: preserve-3d;
    transform: rotateX(35deg) rotateY(0deg) translateZ(100px);
    background: ${tetrisConfig.stage.backgroundColor};
    background-image: 
        linear-gradient(${tetrisConfig.stage.lineColor} 1px, transparent 1px),
        linear-gradient(90deg, ${tetrisConfig.stage.lineColor} 1px, transparent 1px);
    background-size: ${tetrisConfig.cell.size}px ${tetrisConfig.cell.size}px, ${tetrisConfig.cell.size}px ${tetrisConfig.cell.size}px;
    background-position: -1px -1px, -1px -1px;
    box-shadow: 0 0 0 1px ${tetrisConfig.stage.lineColor} inset;
`

const StyledRow = styled.div`
    display: flex;
    height: ${tetrisConfig.cell.size}px;
    width: 100%;
`;

type PropsType = {
    stage: any;
}

const Stage:FC<PropsType> = props => {
    return (
        <StyledStage>
            {props.stage.map((row: Array<Array<any>>, rowIndex: number) => (
                <StyledRow key={rowIndex}>
                    {row.map(([type, state], index: number) => {
                        return <Cell key={rowIndex + index} color={type === 0 ? "transparent": TETROMINOS[type as keyof TetrominosType].color} />
                    })}
                </StyledRow>
            ))}
        </StyledStage>
    )
}

export default Stage;