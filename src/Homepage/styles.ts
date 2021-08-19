import { Link } from 'react-router-dom';
import styled from 'styled-components';

export type BackgroundGradientsType = {
    [key: string]: string[];
};

export const backgroundGradients: BackgroundGradientsType = {
    royal: ['to bottom', '#141e30', '#243b55'],
    greenToBlack: ['to bottom', '#001510', '#00bf8f'],
    netflix: ['to bottom', '#8E0E00', '#1F1C18'],
    megatron: ['to bottom', '#c6ffdd', '#fbd786', '#f7797d'],
};

export const StyledSwatchContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
`;

export const StyledGradientSwatch = styled.div<{ gradient: string[] }>`
    display: flex;
    background: linear-gradient(${({ gradient }) => gradient.join(', ')});
    height: 100px;
    width: 46%;
    margin-bottom: 20px;
    cursor: pointer;
    border: 1px solid #000;
    border-radius: 4px;
`;

export const StyledContainer = styled.div<{ selectedBackground: string }>`
    display: flex;
    background: linear-gradient(${({ selectedBackground }) => backgroundGradients[selectedBackground].join(', ')});
    flex-direction: column;
    flex-grow: 1;
    width: 100%;
    justify-content: center;
    align-items: center;
    font-family: 'Asap', sans-serif;
    color: #fff;
    line-height: 1.5em;

    > p {
        max-width: 540px;
        padding: 20px;
    }

    a {
        color: inherit;

        strong {
            font-size: 130%;
        }
    }
`;

export const StyledButton = styled.button<{ dark?: boolean }>`
    display: flex;
    outline: none;
    border: none;
    padding: 0;
    justify-content: center;
    padding: 12px;
    border-radius: 4px;
    cursor: pointer;

    box-shadow: 0 0 0 1px #fff inset;
    background: rgba(255, 255, 255, 0.1);
    fill: #fff;
    color: #fff;

    ${({ dark }) =>
        dark &&
        `
        box-shadow: 0 0 0 1px #000 inset;
        background: rgba(0, 0, 0, 0.1);
        fill: #000;
        color: #000;
    `}
`;

export const StyledNav = styled.nav`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: stretch;
    max-width: 100%;
    width: 580px;
    box-sizing: content-box;

    a {
        box-sizing: border-box;
        color: inherit;
        display: flex;
        flex-grow: 1;
        flex-flow: column;
        box-shadow: 0 0 0 1px #fff inset;
        width: calc(50% - 40px);
        min-width: 180px;
        margin: 20px;
        padding: 20px;
        text-decoration: none;
        border-radius: 4px;
        background: rgba(255, 255, 255, 0.1);

        &:hover {
            background: rgba(255, 255, 255, 0.15);
        }
    }

    p {
        margin-bottom: 0;
    }
`;

export const StyledLink = styled(Link)<{ disabled?: boolean }>`
    opacity: ${({ disabled }) => (disabled ? '.3' : '1')};
`;

export const StyledModalContainer = styled.div`
    background: #fff;
    color: #000;
    padding: 30px;
    border-radius: 4px;
    width: 300px;
    max-width: 100%;
    border: 1px solid #000;
`;

export const StyledSettingsOverlay = styled.div`
    color: #000;
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
    background: rgba(0, 0, 0, 0.6);
`;
