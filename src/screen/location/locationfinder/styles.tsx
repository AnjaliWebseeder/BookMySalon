import { StyleSheet } from 'react-native';
import fonts from '../../../theme/appFonts';
import { fontSizes, windowHeight } from '../../../theme/appConstant';
import appColors from '../../../theme/appColors';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    color: '#333',
    marginBottom: 20,
    fontFamily:fonts.InterSemiBold
  },
  animation: {
    width: '100%',
    height: 250,
  },
  successAnimation: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  address: {
    fontSize: fontSizes.FONT18,
    color: '#555',
    textAlign: 'center',
    marginTop: 10,
    fontFamily:fonts.InterRegular,
    lineHeight:windowHeight(20)
  },
});
