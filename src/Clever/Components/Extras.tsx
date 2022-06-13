import { FC } from 'react';
import styled from 'styled-components';

type PropsType = {
    total: number;
    available: number;
    used: number;
    icon: string;
};

const Extra: FC<PropsType> = props => {
    return (
        <>
            <StyledIcon>{props.icon}</StyledIcon>
            {[...Array(props.total)].map((_, index) => (
                <StyledExtra key={index} used={props.used > index} available={props.available > index - props.used} />
            ))}
        </>
    );
};

export default Extra;

const StyledExtra = styled.div<{ used?: boolean; available?: boolean }>`
    width: 3rem;
    height: 3rem;
    box-sizing: border-box;
    background: #ccc;
    border: 0.3rem solid ${props => (props.available ? '#000' : '#FFF')};
    border-radius: 50%;
    position: relative;
    transition: border-color 500ms ease-in-out;

    &:after {
        content: 'X';
        opacity: ${props => (props.used ? '1' : '0')};
        font-size: 2.2rem;
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: opacity 500ms ease-in-out;
    }
`;

const StyledIcon = styled.div`
    background: #ccc;
    border: 0.1em solid #fff;
    width: 0.8em;
    height: 0.8em;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
    padding: 0.3em;
    border-radius: 0.3em;
`;
