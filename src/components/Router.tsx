import React from 'react';
import { HashRouter, Redirect, Route } from 'react-router-dom'

import Path from '../constants/Path'

import Home from '../pages/Home'
import TwitterSearch from '../pages/TwitterSearch'
import Bingo from '../pages/Bingo'

export const PathRouter: React.FC = () => {
    return (
        <HashRouter>
            <Route exact path={Path.home} component={Home} ></Route>
            <Route exact path={Path.twitterSeach} component={TwitterSearch} ></Route>
            <Route exact path={Path.bingo} component={Bingo} ></Route>
            <Redirect path={Path.root} to={Path.home}></Redirect>
        </HashRouter>
      );
    }
export default PathRouter