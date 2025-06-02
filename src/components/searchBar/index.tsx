import { View, TextInput } from 'react-native'
import React from 'react'
import {styles} from './styles'

export default function SearchBar() {
  return (
    <View>
     <TextInput
    placeholder="Looking for.."
    style={styles.searchInput}
  />
    </View>
  )
}