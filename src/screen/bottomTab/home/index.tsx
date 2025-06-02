import { View, Text } from 'react-native'
import React from 'react'
import { mainStyle } from '../../../theme/styles'
import Header from '../../../otherComponents/home/header'

export default function Home() {
  return (
    <View style={mainStyle.container}>
       <Header/>
    </View>
  )
}