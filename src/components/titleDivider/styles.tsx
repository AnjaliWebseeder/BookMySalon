import { StyleSheet } from "react-native";
import { fontSizes } from "../../theme/appConstant";
import fonts from "../../theme/appFonts";
import appColors from "../../theme/appColors";

export const styles = StyleSheet.create({
     container: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor:appColors.divider,
    padding:10
  },
  title: {
    fontSize: fontSizes.FONT19,
    fontFamily:fonts.InterSemiBold,
    color:appColors.black
   
  },
})