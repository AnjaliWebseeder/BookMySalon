import { StyleSheet } from "react-native";
import { fontSizes, windowHeight } from "../../../theme/appConstant";
import appColors from "../../../theme/appColors";
import fonts from "../../../theme/appFonts";

export const styles = StyleSheet.create({
   container: {
    paddingHorizontal: windowHeight(6),
    paddingBottom:10
  },
  card: {
    backgroundColor: appColors.white,
    padding: 7,
    marginRight: 6,
    shadowColor: appColors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginLeft:windowHeight(5),
    borderRadius:10,
    borderColor:appColors.border,
    borderWidth:0.4,
    paddingBottom:9
   
  },
  image: {
    width: windowHeight(60),
    height: windowHeight(60),
    borderRadius: 8,
    resizeMode:"cover",
    borderColor:appColors.border,
    borderWidth:1
  },
  title: {
    color:appColors.button,
    fontSize: fontSizes.FONT16,
    fontFamily:fonts.InterMedium
    
  },
  description: {
    fontSize: 12,
    color: appColors.subTitle,
    marginTop: 2,
  },
  dot:{
    backgroundColor:appColors.black,
    height:windowHeight(4),
    width:windowHeight(4),
    borderRadius:windowHeight(4),
   
   
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 6,
  },
  price: {
    fontFamily:fonts.InterSemiBold,
    fontSize: 13,
    marginRight:windowHeight(10)

  },
  time: {
    fontSize: 12,
    color: appColors.subTitle,
    
  },
  button: {
    marginTop: 6,
    backgroundColor: appColors.button,
    alignSelf: 'flex-end',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 12,
    fontWeight: '600',
    color:appColors.white
  },
  row:{
    flexDirection:"row",
    alignItems:"center"
  },
  main:{
    marginHorizontal:windowHeight(10)
  }
})