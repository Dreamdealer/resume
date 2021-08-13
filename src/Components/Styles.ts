import styled from 'styled-components';
import { tetrisConfig } from '../Config/tetrisConfig';
import Display from './Display';

export const StyledSettingsContainer = styled.div`
    background: ${({ theme }) => theme.modal.background};
    color: ${({ theme }) => theme.modal.color};
    padding: 30px;
    border-radius: 8px;
`;

export const StyledSettingsOverlay = styled.div`
    color: ${({ theme }) => theme.main.color};
    position: fixed;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    z-index: 99;
    display: flex;
    flex-flow: column wrap;
    font-family: 'Press Start 2P', cursive;
    background: ${({ theme }) => theme.modal.overlay}; ;
`;

export const StyledDisplaysContainer = styled.div`
    margin-right: 20px;
    display: flex;
    flex-flow: column wrap;
    justify-content: flex-start;
    align-items: stretch;
`;

export const StyledDisplays = styled.div`
    display: flex;
    flex-flow: column wrap;
`;

export const StyledControlsContainer = styled.div`
    display: none;

    @media (max-width: ${tetrisConfig.cell.size * tetrisConfig.stage.width + 300}px) {
        display: flex;
    }

    position: fixed;
    top: ${() => `${tetrisConfig.stage.height * tetrisConfig.cell.size - 50}px`};
    height: 50px;
    width: 100%;
    z-index: 98;
    justify-content: center;
    align-items: stretch;
`;

export const StyledControl = styled.button`
    display: flex;
    outline: none;
    border: none;
    padding: 0;
    flex-grow: 1;
    justify-content: center;
    background: rgba(255, 255, 255, 0.5);
    padding: 20px;
`;

export const AppContainer = styled.div`
    background: ${({ theme }) => theme.main.background};
    width: 100%;
    display: flex;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    flex-flow: row nowrap;
`;

export const StyledTetrisContainer = styled.div<{ gameOver: boolean; tilt: number }>`
    outline: none;
    display: flex;
    flex-grow: 1;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: flex-start;
    transform-style: preserve-3d;
    transform: rotateX(${({ tilt }) => `${tilt}deg`}) rotateY(0deg) translateZ(0px);
    filter: ${({ gameOver }) => (gameOver ? 'blur(5px)' : 'none')};
    font-family: 'Press Start 2P', cursive;

    // desktop size
    @media (min-width: ${tetrisConfig.cell.size * tetrisConfig.stage.width + 300}px) {
        flex-flow: row nowrap;

        ${StyledDisplaysContainer} {
            width: 300px;
        }
    }

    // mobile size
    @media (max-width: ${tetrisConfig.cell.size * tetrisConfig.stage.width + 300}px) {
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        padding-top: 10px;

        ${Display} {
            font-size: 14px;
            margin-top: 0;
            padding: 8px;
            line-height: 14px;
            display: block;
            border: 0;
        }

        ${StyledDisplaysContainer} {
            margin: 0;
            padding: 20px;
            order: 2;

            ${StyledDisplays} {
                border: ${({ theme }) => theme.main.borderWidth} solid ${({ theme }) => theme.main.borderColor};
                border-radius: 8px;
                flex-flow: row wrap;
                margin: 10px 0;
                background: #fff;
            }
        }
    }
`;

export const StyledSlider = styled.input`
    width: 100%;
`;
