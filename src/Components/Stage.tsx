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
    background: ${tetrisConfig.stage.backgroundColor};
    background-image: 
        linear-gradient(${tetrisConfig.stage.lineColor} 1px, transparent 1px),
        linear-gradient(90deg, ${tetrisConfig.stage.lineColor} 1px, transparent 1px);
    background-size: ${tetrisConfig.cell.size}px ${tetrisConfig.cell.size}px, ${tetrisConfig.cell.size}px ${tetrisConfig.cell.size}px;
    background-position: -1px -1px, -1px -1px;
    box-shadow: 0 0 0 1px ${tetrisConfig.stage.lineColor} inset;
    border: 2px solid #000;
    border-radius: 8px;
    position: relative;
`

const StyledInstructions = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
    padding: 20px;
`;

const StyledRow = styled.div`
    display: flex;
    height: ${tetrisConfig.cell.size}px;
    width: 100%;
`;

type PropsType = {
    stage: any;
    showInstructions: boolean;
}

const Stage:FC<PropsType> = props => {
    return (
        <StyledStage>
            {props.showInstructions && (
                <StyledInstructions>
                    Keybindings:<br /><br />
                    Up = Rotate tetromino<br /><br />
                    Left = Move tetromino left one cell<br /><br />
                    Right = Move tetromino right one cell<br /><br />
                    Down = Move tetromino down one cell<br /><br />
                    PageDown or End = Move tetromino all the way down
                </StyledInstructions>
            )}
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