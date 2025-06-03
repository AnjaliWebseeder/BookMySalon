import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {styles} from './styles'

type sectionTitleparams = {
  showViewAll?: boolean,
  title: String,
  onPress?: () => void

}

export default function SectionTitle({showViewAll,title,onPress} : sectionTitleparams) {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    {showViewAll && (
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.viewAll}>view All</Text>
      </TouchableOpacity>
    )}
  </View>
  )
}