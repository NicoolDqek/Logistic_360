import React from 'react'
import { Text, View } from 'react-native'
import { BuildArea, BuiltImg, BuiltText } from './Gestion'
import { ImagenesCards } from '@/constants/theme'

export default function Distribucion() {
  return (
      <View style={{ flex: 1 }}>
           <BuildArea>
             <BuiltImg source={ImagenesCards.construccion} />
             <BuiltText>En Construcción</BuiltText>
           </BuildArea>
         </View>
  )
}
