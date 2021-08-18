import React, { FC } from 'react';
import styled from 'styled-components';
import { tetrisConfig } from '../Config/tetrisConfig';
import { TetrominoShapeType, TetrominoKeyType } from '../Config/tetrominos';
import Box from './Box';
import Cell from './Cell';

const StyledRow = styled.div`
    display: flex;
    height: ${tetrisConfig.cell.size}px;
    width: 100%;
`;

type PropsType = {
    shape: TetrominoShapeType;
};

const SingleTetromino: FC<PropsType> = props => {
    return (
        <Box direction="column">
            {props.shape.map((row: Array<string | number>, rowIndex: number) => (
                <StyledRow key={rowIndex}>
                    {row.map((type: string | number, cellIndex) => {
                        return <Cell key={cellIndex} tetrominoType={type as TetrominoKeyType} />;
                    })}
                </StyledRow>
            ))}
        </Box>
    );
};

export default SingleTetromino;
