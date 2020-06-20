import React  from 'react';
import { HashRouter, Route } from 'react-router-dom'
import Container from '@material-ui/core/Container';
import Home from '../pages/Home'
import User from '../pages/User'

export default class Main extends React.Component {
  render() {
    return (
      <Container fixed style={{ backgroundColor: 'transparent'}} >
        <HashRouter>
          <Route exact path='/' component={Home} />
          <Route path='/home' component={Home} />
          <Route path='/users/:user_id' component={User} />
        </HashRouter>
      </Container>
    );
  }
}