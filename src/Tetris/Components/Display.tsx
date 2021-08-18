import styled from 'styled-components';

const Display = styled.div`
    background: ${({ theme }) => theme.buttonsAndDisplays.background};
    border: ${({ theme }) => theme.main.borderWidth} solid ${({ theme }) => theme.main.borderColor};
    color: ${({ theme }) => theme.buttonsAndDisplays.color};
    font-size: ${({ theme }) => theme.main.fontSize};
    font-family: 'Press Start 2P', cursive;
    border-radius: 8px;
    line-height: 45px;
    margin-top: 20px;
    padding: 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
`;

export default Display;
