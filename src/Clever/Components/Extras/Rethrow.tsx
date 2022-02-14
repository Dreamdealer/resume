import styled from 'styled-components';

export const Rethrow = styled.div`
    &:after {
        content: '♻';
        border-radius: 0.3em;
        background-color: #000;
        border: 2px solid #fff;
        color: #fff;
        width: 1.3em;
        height: 1.3em;
        font-size: 1.2em;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0.1em 0.1em 0.3em 0.2em rgba(0, 0, 0, 0.3);
    }
`;
