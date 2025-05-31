import { View, Text,Image, TouchableOpacity } from 'react-native'
import {styles} from './styles'
import React from 'react'
import LottieView from 'lottie-react-native'
import Button from '../../../components/button'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/rootStackParamList'
import { useNavigation } from '@react-navigation/native'

type LocationScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Location'>;


export default function Location() {
const navigation = useNavigation<LocationScreenNavigationProp>();

  return (
    <View  style={styles.container}>
     <View style={styles.center}>
      <Text style={styles.textStyle}>Where do we bring the glow?</Text>
      <Text style={styles.subTitle}>Explore services near you</Text>
      <LottieView
      autoPlay
      loop
      source={require('../../../assets/lottie/location.json')} style={styles.image} />
      <Button buttonTextStyle={styles.buttonText} containerStyle={styles.containerStyle} text='My Current Location' onPress={() => navigation.navigate('Locationfinder')}/>
      <Button buttonTextStyle={styles.buttonTextStyle} containerStyle={styles.buttonStyle} text='Enter Location Manually' onPress={() => {}}/>
       <TouchableOpacity onPress={() => {}}>
         <Text style={styles.skipContainer}>SKIP</Text>
       </TouchableOpacity>
    </View>
    </View>
    
  )
}