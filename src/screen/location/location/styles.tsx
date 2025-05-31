import { StyleSheet } from "react-native";
import appColors from "../../../theme/appColors";
import fonts from "../../../theme/appFonts";
import { fontSizes, windowHeight, windowWidth } from "../../../theme/appConstant";

export const styles = StyleSheet.create({
    container:{
       flex:1,
       backgroundColor:appColors.white , 
       paddingVertical:'10%'
    },
    center:{
       alignItems:"center",
       justifyContent:"center"
    },
    textStyle:{
        fontFamily:fonts.InterMedium,
        fontSize:fontSizes.FONT19,
        color:appColors.black,
      
    },
    subTitle:{
       fontFamily:fonts.InterBold,
        fontSize:fontSizes.FONT25,
        color:appColors.black,
        marginTop:windowHeight(20)  
    },
    image:{
        height:'65%',
        width:'90%',
    },
    button:{
        marginHorizontal:windowWidth(40)
    },
    containerStyle:{
        width:'85%',
       marginHorizontal:windowWidth(20),
        marginTop:windowHeight(8),
    },
    buttonStyle:{
        width:'85%',
        marginTop:windowHeight(15),
        borderColor:appColors.button,
        borderWidth:1,
        backgroundColor:appColors.white
    },
    buttonText:{
       fontSize:fontSizes.FONT20 
    },
    buttonTextStyle:{
        color:appColors.button,
        fontSize:fontSizes.FONT20
    },
    skipContainer:{
        marginTop:windowHeight(20),
        color:appColors.button,
        fontFamily:fonts.InterMedium,
        fontSize:fontSizes.FONT22,
        textDecorationLine:"underline",
        textAlign:"center"
    }

})