import { StyleSheet } from "react-native";
import appColors from "../../../theme/appColors";
import { fontSizes, windowHeight, windowWidth } from "../../../theme/appConstant";
import fonts from "../../../theme/appFonts";

export const styles = StyleSheet.create({
    container:{
    flex:1,
    backgroundColor:appColors.white
 },
  contentContainerStyle:{
   paddingBottom:windowHeight(40)
  },
   main:{
    marginHorizontal:windowWidth(25)
   },
   button:{
   marginTop:windowHeight(15)
 },
  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: windowHeight(18),
  },
    checkbox: {
    width: 17,
    height: 17,
    borderWidth: 1,
    borderColor: appColors.button,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
   rememberText: {
    marginLeft: 6,
    fontSize: fontSizes.FONT16,
    color: appColors.button,
    fontFamily:fonts.InterSemiBold
  },
})