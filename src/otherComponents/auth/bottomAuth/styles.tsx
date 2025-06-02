import { StyleSheet } from "react-native";
import { fontSizes } from "../../../theme/appConstant";
import appColors from "../../../theme/appColors";
import fonts from "../../../theme/appFonts";

export const styles = StyleSheet.create({
 orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', 
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  orText: {
    marginHorizontal: 10,
    color: appColors.black,
    fontWeight: '600',
    fontSize: fontSizes.FONT15,
    fontFamily:fonts.InterSemiBold
  },
  googleButton: {
    alignSelf: 'center',
    padding: 10,
  },
  footerTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  footerText: {
    fontSize: 14,
    color: appColors.button,
    fontFamily:fonts.InterRegular
  },

})