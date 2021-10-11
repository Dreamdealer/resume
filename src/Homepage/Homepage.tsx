import { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BreakoutContainer from '../Breakout/BreakoutContainer';
import Tetris from '../Tetris/Tetris';
import Home from './Home';

const Homepage: FC = () => {
    return (
        <Router>
            <Switch>
                <Route path="/breakout">
                    <BreakoutContainer />
                </Route>
                <Route path="/tetris">
                    <Tetris />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
};

export default Homepage;
