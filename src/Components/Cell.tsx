import React, { FC } from 'react';
import styled from 'styled-components';
import { tetrisConfig } from '../Config/tetrisConfig';

type PropsType = {
    color: string;
};

const handleFaceTransform = (face: string) => {
    switch (face) {
        case 'right':
            return 'rotateY(90deg)';
        case 'back':
            return 'rotateY(180deg)';
        case 'left':
            return 'rotateY(-90deg)';
        case 'top':
            return 'rotateX(90deg)';
        case 'bottom':
            return 'rotateX(-90deg)';
        default:
        case 'front':
            return 'rotateY(0deg)';
    }
};

export const StyledCube = styled.div<{ transparent?: boolean }>`
    width: ${tetrisConfig.cell.size}px;
    height: ${tetrisConfig.cell.size}px;
    position: relative;
    transform-style: preserve-3d;
    transform: translateX(${tetrisConfig.cell.spacing / 2}px) translateY(${tetrisConfig.cell.spacing / 2}px)
        translateZ(${tetrisConfig.cell.size}px);
    transition: transform 1s;

    ${({ transparent }) =>
        !transparent &&
        `
        &::after {
            content: '';
            position: absolute;
            width: ${tetrisConfig.cell.size}px;
            height: ${tetrisConfig.cell.size}px;
            background: rgba(0,0,0,.1);
            box-shadow: 0 0 10px rgba(0,0,0,.1);
            transform: translateZ(-${tetrisConfig.cell.size}px);
        }
    `}
`;

export const StyledCubeFace = styled.div<{ face: string; color: string }>`
    position: absolute;
    width: ${tetrisConfig.cell.size - tetrisConfig.cell.spacing * 2}px;
    height: ${tetrisConfig.cell.size - tetrisConfig.cell.spacing * 2}px;
    background: ${({ color }) => color};
    line-height: ${tetrisConfig.cell.size}px;
    font-size: 40px;
    font-weight: bold;
    color: white;
    text-align: center;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1) inset;
    transform: ${({ face }) =>
        `${handleFaceTransform(face)} translateZ(${tetrisConfig.cell.size / 2 - tetrisConfig.cell.spacing}px)`};
`;

const Cell: FC<PropsType> = props => {
    if (props.color === 'transparent') {
        return <StyledCube transparent />;
    }

    return (
        <StyledCube>
            <StyledCubeFace face="front" color={props.color} />
            <StyledCubeFace face="back" color={props.color} />
            <StyledCubeFace face="right" color={props.color} />
            <StyledCubeFace face="left" color={props.color} />
            <StyledCubeFace face="top" color={props.color} />
            <StyledCubeFace face="bottom" color={props.color} />
        </StyledCube>
    );
};

export default Cell;
