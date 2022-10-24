import React, { useContext } from 'react';
import Footer from '../Footer/Footer';
import MainHero from '../MainHero/MainHero';
import Nav from '../Navbar/Nav.jsx';
import Pagination from '../Pagination/Pagination';
import LoginCard from './LoginCard';
import { MainContainer, Title } from './index';
import { GlobalStyle, Container } from '../CSS/global-style';

function LoginPage() {
  return (
    <Container>
      <GlobalStyle />
      <Nav />
      <MainHero />
      <Title>Login</Title>
      <LoginCard />
      <Footer />
    </Container>
  );
}

export default LoginPage;
