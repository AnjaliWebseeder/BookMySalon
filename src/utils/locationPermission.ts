import { Platform, PermissionsAndroid, Alert } from 'react-native';
import { isLocationEnabled, promptForEnableLocationIfNeeded } from 'react-native-android-location-enabler';

export const requestLocationPermission = async (): Promise<boolean> => {
  if (Platform.OS === 'android') {
    try {
      const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch {
      return false;
    }
  }
  return true;
};

export const checkLocationEnabled = async (): Promise<boolean> => {
  if (Platform.OS === 'android') {
    try {
      return await isLocationEnabled();
    } catch {
      return false;
    }
  }
  return true;
};

export const promptEnableLocation = async (): Promise<boolean> => {
  if (Platform.OS === 'android') {
    try {
      await promptForEnableLocationIfNeeded();
      return true;
    } catch (error: any) {
      return false;
    }
  }
  return true;
};