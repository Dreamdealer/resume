import styled from 'styled-components';

const Button = styled.button`
    display: flex;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    outline: none;
    border: 2px solid #000;
    border-radius: 8px;
    line-height: 25px;
    font-size: 20px;
    padding: 20px;
    background: #fff;
    font-family: inherit;

    &:hover {
        cursor: pointer;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    }
`;

export default Button;
