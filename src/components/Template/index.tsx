import { useTranslation } from 'react-i18next';
import React from 'react';
import { ChangeLanguageButton, Content, Header } from './styles';

interface Props {
  children: React.ReactNode
}

const Template: React.FC<Props> = ({ children }) => {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <Header>
        <ChangeLanguageButton onClick={() => i18n.changeLanguage('fr')}>
          FR
        </ChangeLanguageButton>

        <ChangeLanguageButton onClick={() => i18n.changeLanguage('en')}>
          EN
        </ChangeLanguageButton>
      </Header>

      <Content>
        {children}
      </Content>
    </div>
  );
};

export default Template;