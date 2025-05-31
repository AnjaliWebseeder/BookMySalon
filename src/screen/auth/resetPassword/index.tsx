import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/rootStackParamList';
import { useNavigation } from '@react-navigation/native';
import { validateEmail, validPassword } from '../../../utils/validation';
import { styles } from './styles';
import AuthHeader from '../../../components/authHeader';
import TextInputField from '../../../components/textInput';
import Button from '../../../components/button';

type ResetPasswordScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'ResetPassword'>;

type FormData = {
  email: string;
  password: string;
};

type FormErrors = {
  email?: string | null;
  password?: string | null;
};

export default function ResetPassword() {
  const navigation = useNavigation<ResetPasswordScreenNavigationProp>();
      const [formData, setFormData] = useState<FormData>({
        email: '',
        password: '',
      });
       const [errors, setErrors] = useState<FormErrors>({});

           
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
                  navigation.navigate('SignIn')
               }
           }
  return (
    <View style={styles.container}>
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
        label="Choose New Password"
        placeholder="Enter password"
        value={formData.password}
        keyboardType="default"
        onChangeText={(text: string) => handleInputChange('password', text)}
        error={errors.password}
        secureTextEntry={true}
      />
      <Text style={styles.rememberText}>Your new password must be at least 8 characters long and include at least one uppercase letter, one number, and one special character (e.g., @, #, $).</Text>
     <View style={styles.button}>
        <Button text="Sign In" onPress={handleSignIn} />
     </View>
      </View>
    </View>
  )
}