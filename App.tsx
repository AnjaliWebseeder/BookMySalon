import React from 'react'
import Navigation from './src/navigation'
import { LogBox } from 'react-native';
import 'react-native-gesture-handler';

LogBox.ignoreAllLogs();

export default function App() {
  return (
    <Navigation/>
  )
}