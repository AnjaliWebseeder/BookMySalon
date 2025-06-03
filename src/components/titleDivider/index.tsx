import { View, Text } from 'react-native'
import React from 'react'
import {styles} from './styles'

export default function TitleDivider({title} :{title:  string}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}