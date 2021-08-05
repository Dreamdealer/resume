import React, { FC } from 'react';
import styled from 'styled-components';
import Tetris from './Components/Tetris';

const StyledApp = styled.div`
    margin: 0;
    font-family: 'Segoe UI', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #db7093;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    perspective: 1000px;
`;

const StyledHeader = styled.div`
    font-size: calc(10px + 2vmin);
`;

const App:FC = () => {
  return (
    <StyledApp>
      <Tetris />
    </StyledApp>
  );
}

export default App;
