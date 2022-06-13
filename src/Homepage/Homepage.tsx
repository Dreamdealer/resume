import { FC } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Tetris from '../Tetris/Tetris';
import Clever from '../Clever/Clever';
import Sweden from '../Sweden/index';
import Home from './Home';

const Homepage: FC = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/tetris" element={<Tetris />} />
                <Route path="/clever" element={<Clever />} />
                <Route path="/sweden" element={<Sweden />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </HashRouter>
    );
};

export default Homepage;
