import { StyleSheet } from "react-native";
import { fontSizes, windowHeight } from "../../../theme/appConstant";
import appColors from "../../../theme/appColors";
import fonts from "../../../theme/appFonts";

export const styles = StyleSheet.create({
  headerContainer: {
    padding: 16,
  },
  row:{
    flexDirection:"row",
    alignItems:"center",
  },
  text: {
    marginHorizontal: windowHeight(8),
    fontWeight: '500',
     fontSize:fontSizes.FONT17,
      fontFamily:fonts.InterSemiBold,
  },
  link: {
    marginHorizontal: windowHeight(27),
    color: appColors.button,
    textDecorationLine: 'underline',
    fontFamily:fonts.InterMedium,
    fontSize:fontSizes.FONT16HALF,
    top:windowHeight(-2)
  },
  arrowIcon:{
    margin:windowHeight(4), 
  },
  locationIcon:{
    marginTop:6
  }
})