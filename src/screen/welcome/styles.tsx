import { StyleSheet } from "react-native";
import appColors from "../../theme/appColors";
import { fontSizes, windowHeight } from "../../theme/appConstant";
import fonts from "../../theme/appFonts";

const styles = StyleSheet.create({
   background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    
  },
  outerContainer:{
      borderColor: 'rgba(255, 255, 255, 0.6)',
      padding: windowHeight(10),
      borderWidth: 1,
  },
  container: {
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.6)',
    paddingHorizontal: windowHeight(10),
    paddingVertical:windowHeight(30),
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'rgba(108, 60, 122, 0.6)', 
    shadowColor: '#fff',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
  },
  icon: {
    marginBottom: 4,
  },
  titleTop: {
    color: "rgba(255, 255, 255, 0.9)",
    fontSize:fontSizes.FONT20,
    marginBottom: 16,
    letterSpacing: 1.5,
    marginTop:windowHeight(12),
    fontFamily:fonts.SansationLight
  },
  blank:{
       height:windowHeight(10)
  },
  heading: {
    color: "rgba(255, 255, 255, 0.5)",
    fontSize: 29,
    fontFamily:fonts.SansationBold,
    marginVertical: windowHeight(8),
  },
  description: {
    color: 'rgba(255, 255, 255, 0.4)',
    fontSize: fontSizes.FONT21,
    textAlign: 'center',
    marginTop: 20,
    fontFamily:fonts.SansationRegular,
    lineHeight: windowHeight(24),
    marginHorizontal:windowHeight(6),
    marginBottom:windowHeight(10)
  },
  button: {
    width: windowHeight(45),
    height: windowHeight(45),
    borderRadius: windowHeight(30),
    backgroundColor:appColors.circleBg,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical:windowHeight(28)
  }
});

export default styles