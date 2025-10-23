import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { Colors } from '@/constants/theme';
import Cards from '@/components/cards/Cards';

const cabeceraImg = require("@/assets/images/Login.png");

export default function Home() {
  return (
    <HomeScreenContainer>
      <Cabecera>
        <CabeceraImg source={cabeceraImg}/>
      </Cabecera>
      <CardsSection>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </CardsSection>
    </HomeScreenContainer>
  );
}

export const HomeScreenContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center; 
  background-color:${Colors.primary}
`;

export const Cabecera = styled.View`
  flex:1;
  width: 100%;
  align-items: center;
  justify-content: center; 
  padding: 20px;
`;

export const CabeceraImg = styled.Image`
  height: 160px;
  resize-mode: contain;
`;

const CardsSection = styled.View`
  flex: 3;
  width: 100%;
  padding: 20px;
  align-items: center;
  justify-content: center; 
  flex-direction: row;
  flex-wrap: wrap; 
  justify-content: center; 
  
`;