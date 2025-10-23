import { Colors } from '@/constants/theme';
import React from 'react';
import styled from 'styled-components/native';

const cardImg = require('../../assets/images/Recepcion.png');

export default function Cards() {
  return (
    <Card>
      <ImgCard source={cardImg}/>
      <TextCard>Recepcion</TextCard>
    </Card>
  );
}

const Card = styled.View`
  width: 45%; 
  height: 150px;
  border-radius: 20px;
    border-width: 4px;
  margin:6px;
  border-color: ${Colors.brand};  
  border-style: solid;
  background: ${Colors.primary};
  align-items: center;
  justify-content: center;
  elevation: 10;
`;

const ImgCard = styled.Image`
  resize-mode: contain;
  height: 50px; 
  width: 50px;
  margin-bottom: 10px;
`;

const TextCard = styled.Text`
  color: black;
  font-weight: bold;
  font-size: 16px;
`;