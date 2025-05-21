import {StyleSheet} from 'react-native';
import { fontSizes, windowHeight, windowWidth } from '../../theme/appConstant';
import appColors from '../../theme/appColors';
import fonts from '../../theme/appFonts';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: windowHeight(3),
  },
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: appColors.white,
    height: windowHeight(45),
    borderRadius: windowHeight(11),
    paddingLeft: windowWidth(3),
    marginVertical: windowHeight(7),
    elevation: 3,
    right:windowWidth(3),  
    borderColor:"red"

  },
  textInput: {
    flex: 1,
    fontFamily: fonts.InterRegular,
    color:appColors.subTitle,
    fontSize: fontSizes.FONT18,
    marginHorizontal: 7,
    
  },
  errorText: {
  color: 'red',
  fontSize: fontSizes.FONT17,
  marginTop: 4,
  fontFamily:fonts.InterMedium
},
});

export default styles
