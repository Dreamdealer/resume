import styled from 'styled-components';

const GameOver = styled.div`
    position: fixed;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    z-index: 99;
    color: #000;
    font-size: 60px;
    font-size: 8vw;
    display: flex;
    flex-flow: column wrap;
    font-family: 'Press Start 2P', cursive;
    text-shadow: 10px 10px 0 #fff, 0px 10px 0 #fff, -10px 10px 0 #fff, 0px 0px 0 #fff, 0px -10px 0 #fff,
        10px -10px 0 #fff, -10px -10px 0 #fff, 0 0 30px #000;
`;

export default GameOver;
