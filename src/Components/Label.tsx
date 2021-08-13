import styled from 'styled-components';

const Label = styled.label<{ mt?: boolean }>`
    display: flex;
    outline: none;
    line-height: 45px;
    font-size: 20px;
    margin-bottom: 12px;
    margin-top: ${({ mt }) => (mt ? '30px' : '0')};
    font-family: inherit;
`;

export default Label;
