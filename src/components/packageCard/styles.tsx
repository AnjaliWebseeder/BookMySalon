import { StyleSheet } from "react-native";
import { fontSizes, windowHeight } from "../../theme/appConstant";
import appColors from "../../theme/appColors";
import fonts from "../../theme/appFonts";

export const styles = StyleSheet.create({
    list: {
    paddingHorizontal: windowHeight(10),
    paddingTop:windowHeight(2),
    paddingBottom:windowHeight(20),
    paddingLeft:windowHeight(15)
  },
  card: {
    width: 240,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
    elevation: 3,
    marginRight: windowHeight(20),
    overflow: 'hidden',
    
  },
  header: {
    backgroundColor: appColors.button,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  headerText: {
    color: appColors.white,
    fontFamily:fonts.InterSemiBold,
    fontSize: fontSizes.FONT18,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 8,
  },
  rating: {
    fontSize: 12,
    color: appColors.subTitle,
    fontFamily:fonts.InterRegular
  },
  addButton: {
    marginLeft: 'auto',
    borderColor: '#6B2480',
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  addText: {
    marginLeft: 4,
    fontSize: 12,
    color: appColors.button,
    fontFamily: fonts.InterSemiBold,
  },
  details: {
    paddingHorizontal: 10,
    padding: 16,
    backgroundColor:'#99788A1A',
    marginVertical:windowHeight(12)
  },
  detailItem: {
    fontSize: 13,
    marginBottom: 4,
    color: '#333',
    fontFamily:fonts.InterRegular
  },
  bold: {
   color:appColors.black,
   fontFamily:fonts.InterMedium,
   fontSize:fontSizes.FONT16,
   lineHeight:windowHeight(18)
  },
  editButton: {
    borderColor: '#ccc',
    borderWidth: 1,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 6,
    alignSelf: 'flex-start',
    marginTop: 8,
    backgroundColor:appColors.white
  },
  editText: {
    fontSize: 12,
    color: '#333',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal:10 ,
    paddingBottom:10,
    alignItems:"center"
  },
  price: {
    fontFamily:fonts.InterSemiBold,
    fontSize: 14,
    marginRight: 10,
  },
  time: {
    fontSize: 12,
    color: appColors.subTitle,
    fontFamily:fonts.InterRegular
  },
});
