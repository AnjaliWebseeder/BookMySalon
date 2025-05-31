import {StyleSheet} from 'react-native';
import { fontSizes, windowHeight, windowWidth } from '../../theme/appConstant';
import fonts from '../../theme/appFonts';
import appColors from '../../theme/appColors';

const styles = StyleSheet.create({
  button: {
    borderRadius: windowHeight(5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: windowHeight(40),
    backgroundColor:appColors.button,
    marginHorizontal:windowHeight(2),
  },
  buttonText: {
    fontSize: fontSizes.FONT22,
    marginLeft: windowWidth(10),
    fontFamily: fonts.InterMedium,
    color:appColors.white
  },
});

export default styles