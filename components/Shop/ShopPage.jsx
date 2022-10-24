import React, { useContext } from 'react';
import Nav from '../Navbar/Nav.jsx';
import Footer from '../Footer/Footer';
import MainHero from '../MainHero/MainHero';
import Pagination from '../Pagination/Pagination';
import ShopItems from './ShopItems';
import { PPRPageContainer, Title } from './index';
import { GlobalStyle, Container } from '../CSS/global-style';

export default function PPR() {
  return (
    <Container>
      <GlobalStyle />
      <Nav />
      <MainHero />
      <Title>Shop</Title>
      <Footer />
    </Container>
  );
}
