import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Animated } from 'react-native';
import LottieView from 'lottie-react-native';
import { styles } from './styles';
import {
  requestLocationPermission,
  getCurrentLocation,
  getAddressFromCoordinates,
  saveAddressToStorage,
  getAddressFromStorage
} from '../../../utils/locationPermission';
import { useNavigation } from '@react-navigation/native';

const LocationFinderScreen: React.FC = () => {
  const [found, setFound] = useState<boolean>(false);
  const [address, setAddress] = useState<string>('');
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  useEffect(() => {
    const checkStoredAddress = async () => {
      const stored = await getAddressFromStorage();
      if (stored) {
        // Navigate directly if address exists
        // navigation.reset({
        //   index: 0,
        //   routes: [{ name: 'Home' }], // Change 'Home' to your actual home screen route name
        // });
      } else {
        locateUser();
      }
    };

    const locateUser = async () => {
      const hasPermission = await requestLocationPermission();
      if (!hasPermission) return;

      try {
        const location = await getCurrentLocation() as {
          coords: { latitude: number; longitude: number };
        };
        const { latitude, longitude } = location.coords;

        const resolvedAddress = await getAddressFromCoordinates(latitude, longitude);
        if (resolvedAddress) {
          setAddress(resolvedAddress);
          await saveAddressToStorage(resolvedAddress);
          setFound(true);

          // Fade in address
          Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
          }).start();

          // Wait 2 seconds, then navigate
          setTimeout(() => {
            // navigation.reset({
            //   index: 0,
            //   routes: [{ name: 'Home' }], // Change 'Home' to your actual home screen route name
            // });
          }, 2000);
        }
      } catch (err) {
        console.error('Location error:', err);
      }
    };

    checkStoredAddress();
  }, []);

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
};

export default LocationFinderScreen;
