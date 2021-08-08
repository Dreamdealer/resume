import React, { FC } from 'react';
import { StyledControl, StyledControlsContainer } from './Styles';

type PropsType = {
    onPushLeft(): void;
    onPushRight(): void;
    onPushRotate(): void;
    onPushDown(): void;
};

const OnScreenControls: FC<PropsType> = props => (
    <StyledControlsContainer>
        <StyledControl onClick={() => props.onPushLeft()}>Left</StyledControl>
        <StyledControl onClick={() => props.onPushRotate()}>Rotate</StyledControl>
        <StyledControl onClick={() => props.onPushDown()}>Down</StyledControl>
        <StyledControl onClick={() => props.onPushRight()}>Right</StyledControl>
    </StyledControlsContainer>
);

export default OnScreenControls;
