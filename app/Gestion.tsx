import { ImagenesCards } from '@/constants/theme';
import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';


 
 

export default function Gestion() {
  return (
    <View style={{ flex: 1 }}>
      <BuildArea>
        <BuiltImg source={ImagenesCards.construccion} />
        <BuiltText>En Construcción</BuiltText>
      </BuildArea>
    </View>
  );
}


export const BuildArea = styled.View`
  flex: 1;
  text-align: center;
  align-items: center;
  width: 100%;
  justify-content: center;

`;

export const BuiltImg = styled.Image`
  height: 400px;
  width: 90%; 
  resize-mode: contain; 
  padding:10px;
  position:relative;
`;

export const BuiltText = styled.Text`
  font-weight: 400;
  font-size: 20px;
  letter-spacing: 5px;
  position:absolute;
  top:60px;
  color:black;
  letter-spacing:2px;
 

`;
