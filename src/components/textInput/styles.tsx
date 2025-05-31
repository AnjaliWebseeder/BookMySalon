import {StyleSheet} from 'react-native';
import {windowHeight } from '../../theme/appConstant';
import appColors from '../../theme/appColors';
import fonts from '../../theme/appFonts';

const styles = StyleSheet.create({
 container: {
    marginTop: windowHeight(10),
    marginBottom:windowHeight(8)
  },
  label: {
    marginBottom: windowHeight(8),
    rowGap: 10 ,
    fontFamily: fonts.InterSemiBold,
    
  },
  inputContainer: {
  flexDirection: 'row',
  borderWidth: 1,
  borderColor: appColors.lightGray,
  borderRadius: 8,
  paddingHorizontal: 12,
  alignItems: 'center',
  backgroundColor: appColors.white,

  // Shadow for iOS
  shadowColor: appColors.black,
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 4,

  // Shadow for Android
  elevation: 3,
},
  input: {
    flex: 1,
    paddingVertical: 11,
    color: appColors.black,
    fontFamily:fonts.InterRegular
  },
  iconWrapper: {
    padding: 4,
  },
  errorInput: {
    borderColor: appColors.error,
  },
  errorText: {
    marginTop: windowHeight(6),
    color: appColors.error,
    fontSize: 13,
    fontFamily:fonts.InterMedium
  }
});

export default styles
