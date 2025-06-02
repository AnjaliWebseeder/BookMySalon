import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../screen/auth/signIn';
import Signup from '../screen/auth/signup';
import ForgotPassword from '../screen/auth/forgotPassword';
import ResetPassword from '../screen/auth/resetPassword';
import Location from '../screen/location/location';
import LocationFinderScreen from '../screen/location/locationfinder';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="ResetPassword" component={ResetPassword} />
           <Stack.Screen name="Location" component={Location} />
          <Stack.Screen name="Locationfinder" component={LocationFinderScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
