import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './authStack';
import BottomTabs from './bottomTab';

const Stack = createNativeStackNavigator();

export default function  RootStack() {
  return (
    <NavigationContainer  >
     <Stack.Navigator   screenOptions={{headerShown:false}}>
       {/* <Stack.Screen name="AuthStack" component={AuthStack} /> */}
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
    </Stack.Navigator>
    </NavigationContainer>
   
  );
}

