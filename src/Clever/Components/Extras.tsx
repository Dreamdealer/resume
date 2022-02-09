import { FC } from 'react';
import styled from 'styled-components';

type PropsType = {
    total: number;
    available: number;
    used: number;
    icon: string;
}

const Extra: FC<PropsType> = props => {
    return (
        <>
        <StyledIcon>{props.icon}</StyledIcon>
        <StyledExtra used />
        <StyledExtra used/>
        <StyledExtra available />
        <StyledExtra />
        <StyledExtra />
        <StyledExtra />
        <StyledExtra />
        </>
    );
};

export default Extra;

const StyledExtra = styled.div<{ used?: boolean; available?: boolean}>`
    width: 3.5em;
    height: 3.5em;
    box-sizing: border-box;
    background: #CCC;
    border: .3em solid #FFF;
    border-radius: 50%;
    position: relative;

    ${props => props.used && `
    border-color: #000;
    &:after { 
        content: 'X';
        font-size: 2.5em;
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-shadow: 1px 1px 0 #000, 1px -1px 0 #000;
    }`};

    ${props => props.available && `
    border-color: #000;
    `};
`;

const StyledIcon = styled.div`
    background: #CCC;
    border: .1em solid #FFF;
    width: .8em;
    height: .8em;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
    padding: .3em;
    border-radius: .3em;
`;