import styled from 'styled-components';
import Button from './Button';

// tSS = Text Shadow Size
const tSS = '1vw';

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
    text-shadow: ${tSS} ${tSS} 0 #fff, ${tSS} 0 0 #fff, 0 ${tSS} 0 #fff, -${tSS} ${tSS} 0 #fff, 00px 0 #fff,
        0-${tSS} 0 #fff, ${tSS} -${tSS} 0 #fff, -${tSS} -${tSS} 0 #fff, 0 0 30px #000;

    ${Button} {
        flex-grow: 0;
    }
`;

export default GameOver;
