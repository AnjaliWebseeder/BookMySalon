import { StyleSheet } from "react-native";
import { fontSizes, windowHeight, windowWidth } from "../../theme/appConstant";
import appColors from "../../theme/appColors";
import fonts from "../../theme/appFonts";

export const styles = StyleSheet.create({
     searchInput: {
    flex:1,
    fontFamily:fonts.InterRegular,
    color:appColors.black,
   marginLeft:windowWidth(3)
  },
  container:{
    marginVertical: windowHeight(3),
  },
  serachContainer:{
     flexDirection:"row",
     backgroundColor:appColors.white,
       marginHorizontal:windowHeight(15),
       alignItems:"center",
    shadowColor: appColors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    fontFamily:fonts.InterRegular,
    elevation: 4,
    paddingLeft:10,
    fontSize:fontSizes.FONT13,
    borderRadius:6
    
  }

})