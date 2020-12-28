import React from 'react';
import { HashRouter, Route, Redirect } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import Home from './pages/Home'
import TwitterSearch from './pages/TwitterSearch'
import Path from './components/Path'

export const Router: React.FC = () => {
    return (
        <Container fixed style={{ backgroundColor: 'transparent'}} >
          <HashRouter>
              <Route exact path={Path.home} component={Home} ></Route>
              <Route exact path={Path.twitterSeach} component={TwitterSearch} ></Route>
              <Redirect to={Path.home}></Redirect>
          </HashRouter>
        </Container>
      );
    }
export default Router