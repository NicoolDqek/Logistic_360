import React from 'react';
 
import {  ImagenesCards } from '@/constants/theme';
import Cards from '@/components/cards/Cards';
import { Cabecera, CabeceraImg, CardsSection, HomeScreenContainer } from '@/components/ui/StylesRecepcion';

const cabeceraImg = require("@/assets/images/Login.png");

export default function Home() {
  return (
    <HomeScreenContainer>
      <Cabecera>
        <CabeceraImg source={cabeceraImg}/>
      </Cabecera>
     <CardsSection>
  <Cards title='Recepcion' image={ImagenesCards.recepcion} route='./Recepcion' />
  <Cards title='Organizar' image={ImagenesCards.organizar} route='./Organizacion' />
  <Cards title='Gestionar' image={ImagenesCards.gestionar} route='./Gestion' />
  <Cards title='Distribucion' image={ImagenesCards.distribucion} route='./Distribucion' />
</CardsSection>
    </HomeScreenContainer>
  );
}
