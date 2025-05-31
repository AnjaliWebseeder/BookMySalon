import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/rootStackParamList';
import { useNavigation } from '@react-navigation/native';
import { validateEmail, validPassword } from '../../../utils/validation';
import {styles} from './styles'
import AuthHeader from '../../../components/authHeader';
import TextInputField from '../../../components/textInput';
import Button from '../../../components/button';
import BottomAuth from '../../../otherComponents/auth/bottomAuth';
import { CheckBoxIcon } from '../../../assets/icons/checkBox';

type SignInScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'SignIn'>;

type FormData = {
  email: string;
  password: string;
};

type FormErrors = {
  email?: string | null;
  password?: string | null;
};

export default function SignIn() {
    const navigation = useNavigation<SignInScreenNavigationProp>();
    const [formData, setFormData] = useState<FormData>({
      email: '',
      password: '',
    });
     const [errors, setErrors] = useState<FormErrors>({});
    const [remember, setRemember] = useState<boolean>(false);
    
     const handleInputChange = (field: keyof FormData, value: string) => {
      setFormData({ ...formData, [field]: value });
      setErrors({ ...errors, [field]: null });
    };
  
      const validateForm = () : boolean => { 
      const emailError = validateEmail(formData.email);
      const passwordError = validPassword(formData.password);
  
      const newErrors = {
        email: emailError,
        password: passwordError,
      };
      setErrors(newErrors);
      return !emailError && !passwordError;
    };
    
    const handleSignIn = () => {
        if(validateForm()) {
          // navigation.navigate()
        }
    }
  return (
     <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        <AuthHeader navigation={navigation} />
       <View style={styles.main}>
      <TextInputField
        label="Email"
        placeholder="Enter email"
        value={formData.email}
        keyboardType="email-address"
        onChangeText={(text: string) => handleInputChange('email', text)}
        error={errors.email}
      />
      <TextInputField
        label="Choose Password"
        placeholder="Enter password"
        value={formData.password}
        keyboardType="default"
        onChangeText={(text: string) => handleInputChange('password', text)}
        error={errors.password}
        secureTextEntry={true}
      />
      <TouchableOpacity  onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={styles.rememberText}>
          Forgot Password
        </Text>
      </TouchableOpacity>
      
     <View style={styles.button}>
        <Button text="Sign In" onPress={handleSignIn} />
     </View>
      <View style={styles.rememberContainer}>
          <TouchableOpacity onPress={() => setRemember(!remember)} style={styles.checkbox}>
          {remember &&   <CheckBoxIcon/>}
          </TouchableOpacity>
          <Text style={styles.rememberText}>Remember Me</Text>
        </View>
        
       </View>
        <BottomAuth onPress={() => navigation.navigate('Signup')} title='Don’t have an account? ' text='Sign Up'/>
      </ScrollView>
    </SafeAreaView>
  )
}