import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Animated, Platform, Alert } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import LottieView from 'lottie-react-native';
import { styles } from './styles';
import {
  requestLocationPermission,
  checkLocationEnabled,
  promptEnableLocation,
} from '../../../utils/locationPermission';

export default function LocationFinder() {
  const [found, setFound] = useState(false);
  const [address, setAddress] = useState('');
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const fetchLocation = async () => {
      const hasPermission = await requestLocationPermission();
      if (!hasPermission) {
        Alert.alert(
          'Permission denied',
          'Location permission is required to find your location.'
        );
        return;
      }

      const isEnabled = await checkLocationEnabled();
      if (!isEnabled) {
        const prompted = await promptEnableLocation();
        if (!prompted) {
          Alert.alert(
            'Location services disabled',
            'Please enable location services to proceed.'
          );
          return;
        }
      }

      Geolocation.getCurrentPosition(
        async position => {
          const { latitude, longitude } = position.coords;
          await fetchAddress(latitude, longitude);
        },
        error => {
          console.log('Error getting location:', error);
          Alert.alert('Error', 'Failed to get your location. Please try again.');
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    };

    fetchLocation();
  }, []);

  const fetchAddress = async (latitude: number, longitude: number) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
      );
      const data = await response.json();
      const fullAddress = data.display_name;
      setAddress(fullAddress);
      setFound(true);

      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    } catch (err) {
      console.error('Failed to fetch address', err);
      Alert.alert('Error', 'Failed to fetch address information.');
    }
  };

  return (
    <View style={styles.container}>
      {!found ? (
        <>
          <Text style={styles.title}>Locating you...</Text>
          <LottieView
            source={require('../../../assets/lottie/locationfinder.json')}
            autoPlay
            loop
            style={styles.animation}
          />
        </>
      ) : (
        <>
          <Text style={styles.title}>We found you...</Text>
          <LottieView
            source={require('../../../assets/lottie/img.json')}
            autoPlay
            loop={false}
            style={styles.successAnimation}
          />
          <Animated.Text style={[styles.address, { opacity: fadeAnim }]}>
            {address}
          </Animated.Text>
        </>
      )}
    </View>
  );
}
