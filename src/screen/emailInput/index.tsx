import { View, Text, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import fonts from '../../theme/appFonts'
import EmailTextInput from '../../components/textInput'
import Button from '../../components/button'
import { validateEmail } from '../../utils/validation'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/rootStackParamList';

type EmailInputScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'EmailInput'>;

export default function EmailInput() {
  const navigation = useNavigation<EmailInputScreenNavigationProp>();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState<string | null>(null);

  const handleContinue = () => {
    const error = validateEmail(email);
    if (error) {
      setEmailError(error);
    } else {
      setEmailError(null);
      navigation.navigate('OtpVerification')
    }
  };

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.center}>
          <View style={styles.blank} />
            <Text style={styles.brandTitle}>
    <Text style={styles.brandBoldUnderline}>Book</Text>
    <Text style={styles.textStyle}>MySalon</Text>
  </Text>
          <Text style={styles.subTitle}>Because Self-Care Should Be Simple</Text>
          <View style={styles.blank} />
        </View>
        <View style={styles.main}>
          <Text style={[styles.title, { fontFamily: fonts.InterRegular }]}>Email Address</Text>
          <EmailTextInput
            placeholder="Enter email address"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
            error={emailError}
          />
        </View>
        <View style={styles.blank}/>
        <Button text="Continue" onPress={handleContinue} />
    </SafeAreaView>
  );
}