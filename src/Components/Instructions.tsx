import React from 'react';
import styled from 'styled-components';

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

const Instructions = () => (
    <StyledInstructions>
        Keybindings:
        <br />
        <br />
        Up = Rotate tetromino
        <br />
        <br />
        Left = Move tetromino left one cell
        <br />
        <br />
        Right = Move tetromino right one cell
        <br />
        <br />
        Down = Move tetromino down one cell
        <br />
        <br />
        PageDown or End = Move tetromino all the way down
    </StyledInstructions>
);

export default Instructions;
