import { ChangeEvent, FC, useState } from 'react';
import styled from 'styled-components';
import Box from './Box';
import Button from './Button';
import { HighscoreType } from './Highscores';
import { StyledModalContainer } from './Styles';
import Textfield from './Textfield';

// tSS = Text Shadow Size
const tSS = '1vw';

const StyledGameOver = styled.div`
    position: fixed;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    z-index: 99;
    color: #000;
    display: flex;
    flex-flow: column wrap;
    font-family: 'Press Start 2P', cursive;
    font-size: 20px;

    p {
        margin: 30px 0;
        font-size: 60px;
        font-size: 8vw;
        text-shadow: ${tSS} ${tSS} 0 #fff, ${tSS} 0 0 #fff, 0 ${tSS} 0 #fff, -${tSS} ${tSS} 0 #fff, 00px 0 #fff,
            0-${tSS} 0 #fff, ${tSS} -${tSS} 0 #fff, -${tSS} -${tSS} 0 #fff, 0 0 30px #000;
    }

    ${Button} {
        flex-grow: 0;
    }
`;

type PropsType = {
    score: number;
    onClose(): void;
    onSaveHighscore(highscore: HighscoreType): void;
};

const GameOver: FC<PropsType> = props => {
    const [username, setUsername] = useState('XXX');

    return (
        <StyledGameOver>
            <p>Game Over</p>
            <p>{props.score}</p>
            <StyledModalContainer>
                <Box margin={[0, 0, '30px', 0]} alignItems="center">
                    Your name:
                    <Textfield
                        value={username}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => {
                            setUsername(event.target.value.substring(0, 5).toUpperCase());
                        }}
                        style={{ width: '60px' }}
                    />
                </Box>
                <Box>
                    <Button
                        onClick={() => {
                            props.onSaveHighscore({
                                name: username,
                                score: props.score,
                                date: Date.now().toString(),
                            });
                            props.onClose();
                        }}
                    >
                        Save &amp; restart
                    </Button>
                </Box>
            </StyledModalContainer>
        </StyledGameOver>
    );
};

export default GameOver;
