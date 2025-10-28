 
 
import { Colors } from '@/constants/theme';
import { View} from 'react-native';
import styled from "styled-components/native";



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
 
  margin-top:10px;

 

`;

export const CabeceraImg = styled.Image`
  height: 150px;
  padding: 20px;
  resize-mode: contain;
 

`;

export const CardsSection = styled.View`
  flex: 3;
  width: 100%;
  padding: 20px;
  align-items: center;
  justify-content: center; 
  flex-direction: row;
  flex-wrap: wrap; 
  justify-content: center; 
  
`;