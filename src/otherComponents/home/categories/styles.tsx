import { StyleSheet } from "react-native";
import { windowHeight } from "../../../theme/appConstant";
import appColors from "../../../theme/appColors";

export const styles = StyleSheet.create({
    container:{
       marginRight:windowHeight(10),
       borderColor: appColors.activeCategory,
       borderWidth:1,
       paddingHorizontal:10,
       borderRadius:windowHeight(20),
       paddingVertical:windowHeight(3),
       marginTop:windowHeight(5)
    },
    main:{
        // marginHorizontal:windowHeight(10),
        marginBottom:windowHeight(10),
        paddingHorizontal:10
    }
})