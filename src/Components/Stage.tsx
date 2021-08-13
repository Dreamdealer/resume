import React, { FC } from 'react';
import styled from 'styled-components';
import { tetrisConfig } from '../Config/tetrisConfig';
import { TETROMINOS, TetrominosType } from '../Config/tetrominos';
import { StageType } from '../gameHelpers';
import Cell, { StyledCube } from './Cell';
import Instructions from './Instructions';

export const StyledStage = styled.div<{ showInstructions: boolean; paused: boolean }>`
    width: ${() => `${tetrisConfig.stage.width * tetrisConfig.cell.size}px`};
    height: ${() => `${tetrisConfig.stage.height * tetrisConfig.cell.size}px`};
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-end;
    align-items: flex-end;
    background: ${({ theme }) => theme.stage.background};

    ${({ showInstructions, theme }) =>
        !showInstructions &&
        `
        background-image: linear-gradient(${theme.stage.lines} 1px, transparent 1px),
            linear-gradient(90deg, ${theme.stage.lines} 1px, transparent 1px);
        background-size: ${tetrisConfig.cell.size}px ${tetrisConfig.cell.size}px,
            ${tetrisConfig.cell.size}px ${tetrisConfig.cell.size}px;
        background-position: -1px -1px, -1px -1px;
    `}

    box-shadow: 0 0 0 1px ${({ theme }) => theme.stage.lines} inset;
    border: ${({ theme }) => theme.main.borderWidth} solid ${({ theme }) => theme.main.borderColor};
    border-radius: 8px;
    position: relative;

    ${StyledCube} {
        box-shadow: none;
        filter: ${({ paused }) => (paused ? 'blur(15px)' : 'none')};
    }
`;

const StyledPause = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.modal.color};
    padding: 20px;
    font-size: 40px;
`;

const StyledRow = styled.div`
    display: flex;
    height: ${tetrisConfig.cell.size}px;
    width: 100%;
`;

const StyledColumnGuide = styled.div<{ left: number; size: number; columnWidth: number }>`
    position: absolute;
    left: ${({ left, columnWidth }) => `${left * columnWidth}px`};
    width: ${({ size, columnWidth }) => `${size * columnWidth}px`};
    top: 0;
    bottom: 0;
    background: ${({ theme }) => theme.stage.guide};
`;

type PropsType = {
    stage: StageType;
    paused: boolean;
    showInstructions: boolean;
    activeColumns: {
        left: number;
        size: number;
    };
};

const Stage: FC<PropsType> = props => {
    return (
        <StyledStage showInstructions={props.showInstructions} paused={props.paused}>
            {props.showInstructions && <Instructions />}
            {props.paused && <StyledPause>Paused</StyledPause>}
            {props.activeColumns.size > 0 && (
                <StyledColumnGuide {...props.activeColumns} columnWidth={tetrisConfig.cell.size} />
            )}
            {props.stage.map((row: Array<Array<any>>, rowIndex: number) => (
                <StyledRow key={rowIndex}>
                    {row.map(([type, state], index: number) => {
                        return (
                            <Cell
                                key={rowIndex + index}
                                color={type === 0 ? 'transparent' : TETROMINOS[type as keyof TetrominosType].color}
                            />
                        );
                    })}
                </StyledRow>
            ))}
        </StyledStage>
    );
};

export default Stage;
