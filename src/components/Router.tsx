import React from 'react';
import { HashRouter, Redirect, Route } from 'react-router-dom'

import LinkPath from '../constants/LinkPath'

import Home         from '../pages/Home'
import TwitterSearch from '../pages/TwitterSearch'
import Bingo        from '../pages/Bingo'

export const PathRouter: React.FC = () => {
    return (
        <HashRouter>
            <Route exact path={LinkPath.home.url}    component={Home} ></Route>
            <Route exact path={LinkPath.twitter.url} component={TwitterSearch} ></Route>
            <Route exact path={LinkPath.bingo.url}   component={Bingo} ></Route>
            <Redirect    path={LinkPath.root.url}    to={LinkPath.home.url}></Redirect>
        </HashRouter>
      );
    }
export default PathRouter