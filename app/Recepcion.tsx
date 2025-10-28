import Cards from '@/components/cards/Cards'
import { Cabecera, CabeceraImg, CardsSection, HomeScreenContainer } from '@/components/ui/StylesRecepcion'
import { Colors, Fonts, ImagenesCards } from '@/constants/theme'
import React from 'react'
import { View } from 'react-native'
import styled from "styled-components/native";

const cabeceraImg = require("@/assets/images/Login.png");

const TitleWithLines = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-vertical: 10px;
`;

const Line = styled.View`
  flex: 1;
  height: 3px;
  background-color: ${Colors.brand};
  max-width: 40%;
`;

export const RecepcionTitle = styled.Text`
  font-size: 30px;
  color: ${Colors.brand};
  font-family: ${Fonts.bold};
  letter-spacing: 4px;
  font-weight: 900;
  margin-horizontal: 15px;
`;

export default function Recepcion() {
  return (
    <HomeScreenContainer>
      <Cabecera>
        <CabeceraImg source={cabeceraImg}/>
        <TitleWithLines>
          <Line />
          <RecepcionTitle>Recepcion</RecepcionTitle>
          <Line />
        </TitleWithLines>
      </Cabecera>
      <CardsSection>
        <Cards title='Compras' image={ImagenesCards.compras} route='./Compras' />
        <Cards title='Devolucion' image={ImagenesCards.devolucion} route='./Devolucion' />
        <Cards title='Entrada Mercancia' image={ImagenesCards.entradaMercancia} route='./Entrada_Mercancia' />
        <Cards title='Recepcion' image={ImagenesCards.recepcion} route='./Recepcion' />
      </CardsSection>
    </HomeScreenContainer>
  )
}