import Geolocation from '@react-native-community/geolocation';
import { PermissionsAndroid, Platform } from 'react-native';
import { request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import RNAndroidLocationEnabler from 'react-native-location-enabler';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ADDRESS_KEY = 'user_address';

/**
 * Requests location permission and prompts location settings if needed.
 * @returns {Promise<boolean>} True if permission and location are enabled.
 */
export const requestLocationPermission = async (): Promise<boolean> => {
  try {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      );
      if (granted !== PermissionsAndroid.RESULTS.GRANTED) return false;

      const enableResult = await RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
        interval: 10000,
        fastInterval: 5000,
      });

      return enableResult === 'enabled' || enableResult === 'already-enabled';
    } else {
      const status = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
      return status === RESULTS.GRANTED;
    }
  } catch (err) {
    console.warn('Location permission error:', err);
    return false;
  }
};

/**
 * Gets the current location coordinates using Geolocation API.
 * @returns {Promise<{ coords: { latitude: number, longitude: number } }>}
 */
export const getCurrentLocation = (): Promise<{ coords: { latitude: number; longitude: number } }> => {
  return new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(
      position => resolve({ coords: position.coords }),
      error => reject(error),
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  });
};

/**
 * Converts latitude and longitude into a human-readable address.
 * @param latitude number
 * @param longitude number
 * @returns {Promise<string | null>} Address string or null if failed
 */
export const getAddressFromCoordinates = async (
  latitude: number,
  longitude: number
): Promise<string | null> => {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
    );
    const data = await response.json();
    return data.display_name || null;
  } catch (error) {
    console.error('Error in reverse geocoding:', error);
    return null;
  }
};

/**
 * Saves the address to AsyncStorage.
 * @param address string
 */
export const saveAddressToStorage = async (address: string): Promise<void> => {
  try {
    await AsyncStorage.setItem(ADDRESS_KEY, address);
  } catch (error) {
    console.error('Failed to save address to AsyncStorage:', error);
  }
};

/**
 * Retrieves the saved address from AsyncStorage.
 * @returns {Promise<string | null>} Address string or null
 */
export const getAddressFromStorage = async (): Promise<string | null> => {
  try {
    const storedAddress = await AsyncStorage.getItem(ADDRESS_KEY);
    return storedAddress;
  } catch (error) {
    console.error('Failed to get address from AsyncStorage:', error);
    return null;
  }
};
