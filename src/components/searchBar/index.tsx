import { View, TextInput } from 'react-native'
import React from 'react'
import {styles} from './styles'
import { SearchIcon } from '../../assets/icons/search'
import appColors from '../../theme/appColors'

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <View style={styles.serachContainer}>
        <SearchIcon/>
         <TextInput
    placeholder="Looking for.."
    style={styles.searchInput}
    placeholderTextColor={appColors.placeholder}
  />
      </View>
    
    </View>
  )
}