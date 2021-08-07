import styled from 'styled-components';

const Button = styled.button`
    outline: none;
    border: 2px solid #000;
    border-radius: 8px;
    line-height: 50px;
    font-size: 20px;
    padding: 0 20px;
    background: #FFF;
    font-family: inherit;

    &:hover {
        cursor: pointer;
        box-shadow: 0 0 20px rgba(0,0,0,.2);
    }
`;

export default Button;