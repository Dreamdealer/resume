import styled from 'styled-components';

export type BoxType = {
    direction?: 'column' | 'row';
};

const Box = styled.div<BoxType>`
    display: flex;
    flex-grow: 0;
    flex-shrink: 0;
    flex-direction: ${({ direction }) => (direction ? direction : 'row')};
    justify-content: center;
    align-items: stretch;
`;

export default Box;
