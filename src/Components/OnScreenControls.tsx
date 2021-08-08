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
        <StyledControl
            onClick={e => {
                props.onPushLeft();
                e.preventDefault();
            }}
        >
            Left
        </StyledControl>
        <StyledControl
            onClick={e => {
                props.onPushRotate();
                e.preventDefault();
            }}
        >
            Rotate
        </StyledControl>
        <StyledControl
            onClick={e => {
                props.onPushDown();
                e.preventDefault();
            }}
        >
            Down
        </StyledControl>
        <StyledControl
            onClick={e => {
                props.onPushRight();
                e.preventDefault();
            }}
        >
            Right
        </StyledControl>
    </StyledControlsContainer>
);

export default OnScreenControls;
