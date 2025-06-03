import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './authStack';
import BottomTabs from './bottomTab';
import Location from '../screen/location/location';
import LocationFinderScreen from '../screen/location/locationfinder';

const Stack = createNativeStackNavigator();

export default function  RootStack() {
  return (
    <NavigationContainer  >
     <Stack.Navigator   screenOptions={{headerShown:false}}>
      <Stack.Screen name="AuthStack" component={AuthStack} />
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
      <Stack.Screen name="Location" component={Location} />
      <Stack.Screen name="Locationfinder" component={LocationFinderScreen} />

    </Stack.Navigator>
    </NavigationContainer>
   
  );
}

