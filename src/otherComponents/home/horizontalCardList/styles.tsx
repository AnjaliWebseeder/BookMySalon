import { StyleSheet } from "react-native";
import { fontSizes, windowHeight } from "../../../theme/appConstant";
import appColors from "../../../theme/appColors";
import fonts from "../../../theme/appFonts";

export const styles = StyleSheet.create({
     cardWrapper: {
    width: 280,
    height: 160,
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#7A7176',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 6,
    backgroundColor:appColors.white,
     marginRight:20
  },
  list:{
    paddingLeft:windowHeight(15),
    paddingBottom:10,
    paddingTop:windowHeight(10), 
  },
  image: {
  flex:1
  },
  imageStyle: {
    resizeMode: 'cover',
  },
  gradient: {
    flex: 1,
    padding: 16,
    justifyContent: 'flex-end',
  },
   bottomShadow: {
    position: 'absolute',
    bottom: 0,
    height: '60%', // controls how high the shadow reaches
    width: '100%',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  textGroup: {
    flexShrink: 1,
  },
  title: {
    color:appColors.white,
    fontFamily:fonts.InterBold,
    fontSize: fontSizes.FONT20,
  },
  subtitle: {
    color: appColors.lightWhite,
    fontSize: fontSizes.FONT16,
    marginTop: 4,
  },
  button: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    backgroundColor:appColors.button,
  },
  buttonText: {
    color:appColors.white,
    fontSize: 13,
    fontWeight: '500',
  },
})