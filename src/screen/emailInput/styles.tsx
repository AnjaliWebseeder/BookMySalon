import { StyleSheet } from "react-native";
import appColors from "../../theme/appColors";
import fonts from "../../theme/appFonts";
import { fontSizes, windowHeight } from "../../theme/appConstant";

const styles = StyleSheet.create({
 container:{
    flex:1,
    backgroundColor:appColors.white
 },
  contentContainer: {
    flex: 0.4,
    justifyContent: 'flex-start',
  },
 center:{
    // alignItems:"center",
    // justifyContent:"center"
 },
 brandTitleContainer: {
  alignItems: 'center',
  marginTop: windowHeight(30),
},
brandBoldUnderline: {
  fontFamily: fonts.InterBold,
  textDecorationLine: 'underline',
  textTransform:"uppercase"
},
textStyle:{
  fontFamily:fonts.InterSemiBold,
 textTransform:"uppercase" ,
},
 brandTitle: {
  color: appColors.button, 
  fontFamily: fonts.InterBold,
  fontSize: fontSizes.FONT24,
 marginBottom:windowHeight(10),
 textAlign:"center",
 marginTop:windowHeight(18)
},
 title:{
    color:appColors.black,
    fontFamily:fonts.InterBold,
    fontSize:fontSizes.FONT20,
 },
 subTitle:{
color:appColors.subTitle,
    fontFamily:fonts.InterRegular,
    fontSize:fontSizes.FONT21,
    marginTop:windowHeight(4),
    textAlign:"center"

 },
 blank:{
   height:windowHeight(40)
 },
 blankView:{
   height:windowHeight(38)
 },
 main:{
   marginHorizontal:windowHeight(30)
 },
 buttonContainer:{
   paddingVertical:windowHeight(30)
 }
})

export default styles