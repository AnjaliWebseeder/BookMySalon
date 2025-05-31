import { SafeAreaView, View,ScrollView } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import { validateEmail, validateName, validPassword } from '../../../utils/validation'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/rootStackParamList';
import AuthHeader from '../../../components/authHeader'
import TextInputField from '../../../components/textInput';
import Button from '../../../components/button';
import BottomAuth from '../../../otherComponents/auth/bottomAuth';

type SignupScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Signup'>;

type FormData = {
  name: string;
  email: string;
  password: string;
};

type FormErrors = {
  name?: string | null;
  email?: string | null;
  password?: string | null;
};

export default function Signup() {
  const navigation = useNavigation<SignupScreenNavigationProp>();
  const [formData, setFormData] = useState<FormData>({
    name:'',
    email: '',
    password: '',
  });
   const [errors, setErrors] = useState<FormErrors>({});
   const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData({ ...formData, [field]: value });
    setErrors({ ...errors, [field]: null });
  };

    const validateForm = () : boolean => {
    const nameError = validateName(formData.name)  
    const emailError = validateEmail(formData.email);
    const passwordError = validPassword(formData.password);

    const newErrors = {
      name:nameError,
      email: emailError,
      password: passwordError,
    };
    setErrors(newErrors);
    return !emailError && !passwordError;
  };
  
  const handleSignup = () => {
      if(validateForm()) {
         navigation.navigate('SignIn')
      }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        <AuthHeader navigation={navigation} />
       <View style={styles.main}>
        <TextInputField
        label="Name"
        placeholder="Enter name"
        value={formData.name}
        keyboardType="default"
        onChangeText={(text: string) => handleInputChange('name', text)}
        error={errors.name}
      />
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
     <View style={styles.button}>
        <Button text="Sign Up" onPress={handleSignup} />
     </View>
       </View>
        <BottomAuth onPress={() => navigation.navigate('SignIn')} title={'Already have an account? '} text={'Sign In'}/>
      </ScrollView>
    </SafeAreaView>
  );
}