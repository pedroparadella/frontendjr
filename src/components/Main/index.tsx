import React from 'react';

import { Content } from '../../types/character';
import * as S from './styles';

const Main = ({ children }: Content) => {
  return <S.MainContainer>{children}</S.MainContainer>;
};

export default Main;
