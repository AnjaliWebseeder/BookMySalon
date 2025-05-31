import { StyleSheet } from "react-native"
import { fontSizes, windowHeight } from "../../theme/appConstant"
import fonts from "../../theme/appFonts"
import appColors from "../../theme/appColors"

const styles = StyleSheet.create({
  main:{
   marginBottom:windowHeight(8)
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
},
 subTitle:{
color:appColors.subTitle,
    fontFamily:fonts.InterRegular,
    fontSize:fontSizes.FONT21,
    textAlign:"center"

 },
 backArrow:{
  marginHorizontal:windowHeight(9),
  marginTop:windowHeight(10)
 },
})

export default styles