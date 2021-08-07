import React, { FC } from 'react';
import styled from 'styled-components';

type PropsType = {
    text: string;
}

const StyledDisplayContainer = styled.div`
    font-family: 'Press Start 2P', cursive;
    border: 2px solid #000;
    border-radius: 8px;
    line-height: 50px;
    font-size: 20px;
    background: #FFF;
    margin-top: 20px;
    color: #000;
    padding: 0 20px;
`;

const Display:FC<PropsType> = props => (
    <StyledDisplayContainer>{props.text}</StyledDisplayContainer>
);

export default Display;