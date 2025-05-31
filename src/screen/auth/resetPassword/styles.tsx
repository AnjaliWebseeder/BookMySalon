import { StyleSheet } from "react-native";
import appColors from "../../../theme/appColors";
import { windowHeight, windowWidth } from "../../../theme/appConstant";
import fonts from "../../../theme/appFonts";

export const styles = StyleSheet.create({
    container:{
    flex:1,
    backgroundColor:appColors.white
 },
   main:{
    marginHorizontal: windowWidth(25)
   },
   button:{
      marginTop:windowHeight(15)
    },
    rememberText:{
      fontSize: 12,
    color: appColors.button,
    fontFamily: fonts.InterRegular,
    bottom:12,
    lineHeight:15,
    marginTop:windowHeight(15)
    }
})