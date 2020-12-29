import React from 'react';
import { HashRouter, Route } from 'react-router-dom'

import Path from '../constants/Path'

import Root from '../pages/Root'
import TwitterSearch from '../pages/TwitterSearch'
import Bingo from '../pages/Bingo'

export const PathRouter: React.FC = () => {
    return (
        <HashRouter>
            <Route exact path={Path.root} component={Root} ></Route>
            <Route exact path={Path.twitterSeach} component={TwitterSearch} ></Route>
            <Route exact path={Path.bingo} component={Bingo} ></Route>
        </HashRouter>
      );
    }
export default PathRouter