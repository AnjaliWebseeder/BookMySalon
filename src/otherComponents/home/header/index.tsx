import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { LocationIcon } from '../../../assets/icons/location'
import {styles} from './styles'

export default function Header() {
  return (
    <View style={styles.headerContainer}>
   <LocationIcon/>
    <Text style={styles.text}>Your Location?</Text>
    <TouchableOpacity>
      <Text style={styles.link}>Add Your Location</Text>
    </TouchableOpacity>
  </View>
  )
}