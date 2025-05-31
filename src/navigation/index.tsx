import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../screen/welcome';
import Signup from '../screen/auth/signup';
import SignIn from '../screen/auth/signIn';
import ForgotPassword from '../screen/auth/forgotPassword';
import ResetPassword from '../screen/auth/resetPassword';
import Location from '../screen/location/location';
import Locationfinder from '../screen/location/locationfinder';

const Stack = createNativeStackNavigator();

export default function  RootStack() {
  return (
    <NavigationContainer  >
     <Stack.Navigator  initialRouteName={'Location'} screenOptions={{headerShown:false}}>
         {/* <Stack.Screen name="Welcome" component={Welcome} /> */}
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="ResetPassword" component={ResetPassword} />
           <Stack.Screen name="Location" component={Location} />
          <Stack.Screen name="Locationfinder" component={Locationfinder} />
    </Stack.Navigator>
    </NavigationContainer>
   
  );
}

