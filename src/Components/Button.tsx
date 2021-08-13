import styled from 'styled-components';

const Button = styled.button`
    background: ${({ theme }) => theme.buttonsAndDisplays.background};
    border: 2px solid ${({ theme }) => theme.buttonsAndDisplays.color};
    color: ${({ theme }) => theme.buttonsAndDisplays.color};
    font-size: ${({ theme }) => theme.main.fontSize};
    display: flex;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    outline: none;
    padding: 0 20px;
    border-radius: 8px;
    line-height: 50px;
    font-family: inherit;

    .custom-fill {
        fill: ${({ theme }) => theme.buttonsAndDisplays.color};
    }

    &:hover {
        cursor: pointer;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    }
`;

export default Button;
