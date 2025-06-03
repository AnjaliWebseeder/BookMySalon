import { StyleSheet } from 'react-native';
import { fontSizes, windowHeight, windowWidth } from '../../../theme/appConstant';
import appColors from '../../../theme/appColors';
import fonts from '../../../theme/appFonts';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: windowHeight(6),
    paddingTop: 10
  },
  itemWrapper: {
    alignItems: 'center',
    margin: windowHeight(6.5),
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: windowHeight(92),
    height: windowHeight(80),
    borderRadius: 12,
  },
  label: {
    textAlign: 'center',
    fontSize: fontSizes.FONT17,
    marginTop: windowHeight(9),
    color: appColors.black,
    fontFamily:fonts.InterSemiBold,
    width:windowWidth(130)
  },
  card: {
    borderRadius: 12,
    width: windowHeight(92),
    height: windowHeight(80),
  }
});
