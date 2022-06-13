import { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Tetris from '../Tetris/Tetris';
import Clever from '../Clever/Clever';
import Sweden from '../Sweden/';
import Home from './Home';

const Homepage: FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/tetris" element={<Tetris />} />
                <Route path="/clever" element={<Clever />} />
                <Route path="/sweden" element={<Sweden />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    );
};

export default Homepage;
