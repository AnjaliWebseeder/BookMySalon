import { StyleSheet } from "react-native";
import appColors from "../../../theme/appColors";
import { fontSizes, windowHeight, windowWidth } from "../../../theme/appConstant";
import fonts from "../../../theme/appFonts";

const styles = StyleSheet.create({
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
 
})

export default styles