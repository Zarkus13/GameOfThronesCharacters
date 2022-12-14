import React from 'react';
import { Link } from 'react-router-dom';
import { HomeDescription, HomeLogo, HomeWrapper } from './styles';

// @ts-ignore
import Logo from './assets/logo.png';

const Home = () =>
  <HomeWrapper>
    <HomeLogo src={Logo} />

    <HomeDescription>A React application that lists Game of Thrones Characters</HomeDescription>

    <Link to="/characters">Go to characters list</Link>
  </HomeWrapper>;

export default Home;