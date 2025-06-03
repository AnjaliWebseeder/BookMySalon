import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { LocationIcon } from '../../../assets/icons/location'
import {styles} from './styles'
import { ArrowDownIcon } from '../../../assets/icons/arrowdown'
import { RootStackParamList } from '../../../navigation/rootStackParamList'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'


type HeaderProps<T extends keyof RootStackParamList> = {
  navigation: NativeStackNavigationProp<RootStackParamList, T>;
};

export default function Header<T extends keyof RootStackParamList>({
  navigation,
}: HeaderProps<T>){

  return (
    <View style={styles.headerContainer}>
     <View style={styles.row}>
<View style={styles.locationIcon}><LocationIcon/></View>
    <Text style={styles.text}>Your Location?</Text>
    <TouchableOpacity onPress={() => navigation.navigate('Location')} style={styles.arrowIcon}>  <ArrowDownIcon/></TouchableOpacity>
     </View>
    <TouchableOpacity onPress={() => navigation.navigate('Location')}>
      <Text style={styles.link}>Add Your Location</Text>
    </TouchableOpacity>
    </View>
    
  )
}