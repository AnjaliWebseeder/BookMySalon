import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/rootStackParamList';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import OTPTextInput from 'react-native-otp-textinput';
import Button from '../../components/button';

type OtpVerificationScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'OtpVerification'>;

export default function OtpVerification() {
const navigation = useNavigation<OtpVerificationScreenNavigationProp>();
  const [inputCount] = useState<number>(4); 

  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.blank}/>
      <Text style={styles.title}>Verify Email Address</Text>
      <Text style={styles.subTitle}>We have just send a code to *****8571</Text>
       <OTPTextInput
              textInputStyle={styles.otpTextInput}
              offTintColor="white"
              inputCount={inputCount}
            //   selectionColor="gray"
              containerStyle={styles.row}
            />
           
      <Text style={styles.baseText}>
        Didn’t receive the code?{' '}
        <Text style={styles.resendText}>Resend in 00:45</Text>
      </Text>
      <View style={styles.blank}/>
 <Button text="Continue" onPress={() => {}} />

      
    </SafeAreaView>
  )
}