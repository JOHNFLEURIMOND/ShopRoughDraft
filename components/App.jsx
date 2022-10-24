import React, { useState, useEffect, createContext } from 'react';
import Nav from '../components/Navbar/Nav.jsx';
import Footer from '../components/Footer/Footer';
import SignUp from '../components/SignUp/SignUp';
import LoginPage from './Login/LoginPage';
import ShopPage from './Shop/ShopPage';
import MainHero from './MainHero/MainHero';
import { Provider as StyletronProvider, DebugEngine } from 'styletron-react';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { GlobalStyle, Container } from '../components/CSS/global-style';
const debug =
  process.env.NODE_ENV === 'production' ? void 0 : new DebugEngine();
const engine = new Styletron();

const Homepage = props => {
  return (
    <Container>
      <GlobalStyle />
      <Nav />
      <MainHero />
      <SignUp />
      <Footer />
    </Container>
  );
};

const App = () => {
  return (
    <StyletronProvider value={engine} debug={debug} debugAfterHydration>
      <Router location={history.location} navigator={history}>
        <Switch>
          <Route path='/' exact component={Homepage} />
        </Switch>
        <Switch>
          <Route path='/LoginPage' component={LoginPage} />
        </Switch>
        <Switch>
          <Route path='/Shop' component={ShopPage} />
        </Switch>
      </Router>
    </StyletronProvider>
  );
};

export default App;
