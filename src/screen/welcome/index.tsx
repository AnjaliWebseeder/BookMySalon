import { View, Text,SafeAreaView,ImageBackground,TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import LinearGradient from 'react-native-linear-gradient'
import { Cut } from '../../assets/icons/cut';
import { Arrow } from '../../assets/icons/arrow';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/rootStackParamList';

 type WelcomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Welcome'>;

export default function Welcome() {
   const navigation = useNavigation<WelcomeScreenNavigationProp>();

  return (
    <SafeAreaView style={styles.background}>
   <ImageBackground
      source={require('../../assets/images/welcomeBg.png')} 
      style={styles.background}
      resizeMode="cover"
    >
  <LinearGradient
  colors={['rgba(243, 201, 243, 0.6)', 'rgba(77, 72, 78, 0.85)','rgba(36, 34, 36, 0.85)']}
  style={styles.overlay}
   >      
      <View style={styles.outerContainer}>
    <LinearGradient colors={['rgba(88, 73, 101, 0.9)','rgba(9, 0, 12, 0.1)']} style={styles.container}>
  <Animatable.View animation="fadeInUp" duration={1000} delay={100} style={{alignItems:"center",justifyContent:"center"}}>
    <Cut />
    <Text style={styles.titleTop}>SALON</Text>

    <View style={styles.blank} />

    <Animatable.Text animation="fadeInDown" delay={300} style={styles.heading}>YOUR</Animatable.Text>
    <Animatable.Text animation="fadeInDown" delay={500} style={styles.heading}>GROOMING</Animatable.Text>
    <Animatable.Text animation="fadeInDown" delay={600} style={styles.heading}>YOUR</Animatable.Text>
    <Animatable.Text animation="fadeInDown" delay={900} style={styles.heading}>WAY</Animatable.Text>

    <View style={styles.blank} />

    <Text style={styles.description}>
      From glow-ups to clean, Your personal salon journey starts here. Luxury, delivered home.
    </Text>

    <TouchableOpacity onPress={() => navigation.navigate('Signup')} style={styles.button}>
      <Animatable.View animation="pulse" iterationCount="infinite" duration={1500}>
        <Text><Arrow/></Text>
      </Animatable.View>
    </TouchableOpacity>
  </Animatable.View>
</LinearGradient>

         </View>
      </LinearGradient>
    </ImageBackground>
    </SafeAreaView>
  )
}