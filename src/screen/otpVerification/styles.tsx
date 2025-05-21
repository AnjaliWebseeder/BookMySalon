import { StyleSheet } from "react-native";
import appColors from "../../theme/appColors";
import fonts from "../../theme/appFonts";
import { fontSizes, windowHeight, windowWidth } from "../../theme/appConstant";

const styles = StyleSheet.create({
    container:{
    flex:1,
    backgroundColor:appColors.white
 },
title:{
    color: appColors.black, 
  fontFamily: fonts.InterBold,
  fontSize: fontSizes.FONT24,
 marginBottom:windowHeight(10),
 textAlign:"center",
 marginTop:windowHeight(18)
 },
  blank:{
   height:windowHeight(40)
 },
  subTitle:{
color:appColors.subTitle,
    fontFamily:fonts.InterRegular,
    fontSize:fontSizes.FONT21,
    marginTop:windowHeight(4),
    textAlign:"center"
 },
 otpTextInput: {
    backgroundColor: appColors.white,
    borderRadius: 12,
    width: windowWidth(75),
    height: windowHeight(50),
    borderBottomWidth: 0,
    color: appColors.subTitle,
    fontFamily: fonts.InterRegular,
    borderBottomColor: appColors.white,
    elevation: 2,
  },
  row: {
    flexDirection: 'row',
    marginHorizontal: windowWidth(20),
    marginTop: windowHeight(60),
  },
   baseText: {
    color: appColors.subTitle,
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    marginTop:windowHeight(10),
    textAlign:"center"
  },
  resendText: {
    color: appColors.button, 
    fontFamily: 'Inter-Bold',
  },

})

export default styles