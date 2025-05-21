import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../screen/welcome';
import EmailInput from '../screen/emailInput';
import OtpVerification from '../screen/otpVerification';

const Stack = createNativeStackNavigator();

export default function  RootStack() {
  return (
    <NavigationContainer>
     <Stack.Navigator  screenOptions={{headerShown:false}}>
          {/* <Stack.Screen name="Welcome" component={Welcome} /> */}
         <Stack.Screen name="EmailInput" component={EmailInput} />  
          <Stack.Screen name="OtpVerification" component={OtpVerification} />
    </Stack.Navigator>
    </NavigationContainer>
   
  );
}

