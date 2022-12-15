import React from 'react';
import { Link } from 'react-router-dom';
import { HomeDescription, HomeLogo, HomeWrapper } from './styles';

// @ts-ignore
import Logo from './assets/logo.png';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <HomeWrapper>
      <HomeLogo src={Logo} />

      <HomeDescription>{t('home.description')}</HomeDescription>

      <Link to="/characters">{t('home.go-to-list')}</Link>
    </HomeWrapper>
  );
};

export default Home;