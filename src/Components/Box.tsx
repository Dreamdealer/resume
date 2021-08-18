import styled from 'styled-components';

export type BoxType = {
    direction?: 'column' | 'row';
    grow?: number;
    width?: string;
    margin?: [number | string, number | string, number | string, number | string] | [number | string, number | string];
    justifyContent?: 'space-between' | 'space-around' | 'flex-start' | 'flex-end' | 'center';
    alignItems?: 'center' | 'stretch' | 'flex-start' | 'flex-end';
};

const Box = styled.div<BoxType>`
    width: ${({ width }) => (width ? width : 'row')};
    margin: ${({ margin }) => (margin ? margin.join(' ') : '')};
    display: flex;
    flex-grow: ${({ grow }) => (grow ? grow : 0)};
    flex-shrink: 0;
    flex-direction: ${({ direction }) => (direction ? direction : 'row')};
    justify-content: ${({ justifyContent }) => (justifyContent ? justifyContent : 'center')};
    align-items: ${({ alignItems }) => (alignItems ? alignItems : 'stretch')}; ;
`;

export default Box;
