import { Colors } from '@/constants/theme';
import {type Href, router, useRouter } from 'expo-router';
import React from 'react';
import { Pressable } from 'react-native';
import styled from 'styled-components/native';

 


interface CardProps {
  title: string;
  image: any;
  route: string;
}


export default function Cards({ title, image, route }: CardProps) {

  
 const router = useRouter();

  const handlePress = () => {
    router.push(`/${route}` as Href); 
  };

  return (
    <CardContainer onPress={handlePress}>
      <ImgCard source={image}/>
      <TextCard>{title}</TextCard>
    </CardContainer>
  );
}


const CardContainer = styled(Pressable)`
  width: 41%; 
  height: 130px;
  padding:6px;
  border-radius: 20px;
  border-width: 4px;
  margin:15px;
  border-color: ${Colors.brand};  
  border-style: solid;
  background: ${Colors.primary};
  align-items: center;
  justify-content: center;
  elevation: 10;
`;

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
  height:70%; 
  width: 70%;
  margin-bottom: 10px;
`;

const TextCard = styled.Text`
  color: black;
  font-weight: bold;
  font-size: 16px;
   font-family: Montserrat_600SemiBold;
   letter-spacing:2px;
  text-align:center;
`;