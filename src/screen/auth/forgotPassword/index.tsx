import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/rootStackParamList';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import {styles} from './styles'
import { validateEmail } from '../../../utils/validation';
import AuthHeader from '../../../components/authHeader';
import TextInputField from '../../../components/textInput';
import Button from '../../../components/button';

type ForgotPasswordScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'ForgotPassword'>;

type FormData = {
  email: string;
  password: string;
};

type FormErrors = {
  email?: string | null;
  password?: string | null;
};


export default function ForgotPassword() {
 const navigation = useNavigation<ForgotPasswordScreenNavigationProp>();
      const [formData, setFormData] = useState({
      email: '',
    });
  const [linkSent, setLinkSent] = useState(false);
   const [errors, setErrors] = useState<FormErrors>({});
  const validateForm = () => {
const emailError = validateEmail(formData.email);
     const newErrors = {
      email: emailError,
    };
    setErrors(newErrors);
    return !emailError;
    
  }

  const handleSendLink = () => {
   if(validateForm()) {
       // TODO: trigger send reset link API here
    setLinkSent(true);
   }    
  };

  const handleResendLink = () => {
    // You can reset state or do any logic here before navigating
    // For demo, just navigate to same screen
    navigation.navigate('ResetPassword'); // Make sure this matches your route name in navigator
  };

      const handleInputChange = (field: keyof FormData, value: string) => {
      setFormData({ ...formData, [field]: value });
      setErrors({ ...errors, [field]: null });
    };

  return (
    <SafeAreaView style={styles.container}>
      <AuthHeader navigation={navigation}/>
      <View style={styles.main}>
        <TextInputField
        label="Email"
        placeholder="Enter email"
        value={formData.email}
        keyboardType="email-address"
        onChangeText={(text: string) => handleInputChange('email', text)}
        error={errors.email}
      />
        {!linkSent ? (
          <Text style={styles.infoText}>
            Enter your registered email address. We’ll send you a link to reset your password.
          </Text>
        ) : (
          <>
            <Text style={styles.infoText}>
              We’ve sent a reset link to your email. Please check your inbox to proceed.
            </Text>
            <TouchableOpacity onPress={handleResendLink}>
              <Text style={styles.resendText}>
                Didn't receive the email? Click Resend.
              </Text>
            </TouchableOpacity>
          </>
        )}
      </View>
      <View style={styles.button}>
        <Button text={linkSent ? "Resend Link" : "Send Link"} onPress={linkSent ? handleResendLink : handleSendLink} />
     </View>
    </SafeAreaView>
  )
}