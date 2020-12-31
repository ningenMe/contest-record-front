import React from 'react';
import { HashRouter, Route } from 'react-router-dom'

import LinkPath from '../constants/LinkPath'

import Home          from '../pages/Home'
import TwitterSearch from '../pages/TwitterSearch'
import AtcoderBingo  from '../pages/AtcoderBingo'

export const PathRouter: React.FC = () => {
    return (
        <HashRouter>
            <Route exact path={LinkPath.home.url}             component={Home} />
            <Route exact path={LinkPath.twitter.url}          component={TwitterSearch} />
            <Route exact path={LinkPath.atcoderBingo.url}     component={AtcoderBingo} />
            <Route exact path={LinkPath.atcoderBingoUser.url} component={AtcoderBingo} />
        </HashRouter>
      );
    }
export default PathRouter