import { StyleSheet } from "react-native";
import appColors from "../../../theme/appColors";
import { windowHeight, windowWidth } from "../../../theme/appConstant";
import fonts from "../../../theme/appFonts";

export const styles = StyleSheet.create({
container: {
    backgroundColor: appColors.white,
    flex: 1,
  },
  main:{
      marginHorizontal:windowWidth(25)
     },
      infoText: {
    fontSize: 12,
    color: appColors.button,
    fontFamily: fonts.InterRegular,
    bottom:12,
    lineHeight:15,
    marginTop:windowHeight(15)
  },
   resendText: {
    fontSize: 14,
    color: appColors.button,
    fontFamily: fonts.InterRegular,
    marginTop: 5,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  button:{
     marginTop:windowHeight(15),
     marginHorizontal:windowHeight(15)
   },

})