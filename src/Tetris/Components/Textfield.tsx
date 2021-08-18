import styled from 'styled-components';

const Textfield = styled.input`
    background: ${({ theme }) => theme.buttonsAndDisplays.background};
    border: ${({ theme }) => theme.main.borderWidth} solid ${({ theme }) => theme.main.borderColor};
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

    &:hover {
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    }
`;

export default Textfield;
