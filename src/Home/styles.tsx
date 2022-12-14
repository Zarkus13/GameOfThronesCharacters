import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomeWrapper = styled.div`
  font-family: Calibri;
  text-align: center;
  padding-top: 100px;
`;

export const HomeLogo = styled.img`
  width: 500px;
`;

export const HomeDescription = styled.p`
  font-size: 20px;
  font-style: italic;
  padding: 100px 0;
`;

export const GoToCharacters = styled(Link)`
  font-size: 20px;
`;