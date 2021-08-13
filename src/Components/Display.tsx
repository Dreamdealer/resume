import styled from 'styled-components';

const Display = styled.div`
    background: ${({ theme }) => theme.buttonsAndDisplays.background};
    border: 2px solid ${({ theme }) => theme.buttonsAndDisplays.color};
    color: ${({ theme }) => theme.buttonsAndDisplays.color};
    font-size: ${({ theme }) => theme.main.fontSize};
    font-family: 'Press Start 2P', cursive;
    border-radius: 8px;
    line-height: 50px;
    margin-top: 20px;
    padding: 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default Display;
