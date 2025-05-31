import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {styles} from './styles'
import { GoogleIcon } from '../../../assets/icons/googleLogo'
import fonts from '../../../theme/appFonts'

type MyButtonProps = {
  onPress: () => void;
  title:string,
  text:string
};

export default function BottomAuth({onPress,title,text}:MyButtonProps) {
  return (
    <View>
        <View style={styles.orContainer}>
        <Text style={styles.orText}>OR</Text>
      </View>
      <TouchableOpacity
        onPress={() => {}}
        activeOpacity={0.7}
        style={styles.googleButton}
      >
        <GoogleIcon/>
      </TouchableOpacity>
      <View style={styles.footerTextContainer}>
        <Text style={styles.footerText}>{title} </Text>
        <TouchableOpacity onPress={onPress}>
          <Text style={[styles.footerText,{fontFamily:fonts.InterSemiBold}]}>{text}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}