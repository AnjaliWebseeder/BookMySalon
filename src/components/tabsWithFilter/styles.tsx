import { StyleSheet } from "react-native";
import { windowHeight } from "../../theme/appConstant";

export const styles = StyleSheet.create({
container: {
    flexDirection: 'row',
    marginHorizontal:windowHeight(8),
    marginVertical: 15
  },
  tab: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 16,
    backgroundColor: '#eee',
    marginHorizontal: 5
  },
  activeTab: {
    backgroundColor: 'purple'
  },
  label: {
    color: '#000'
  },
  activeLabel: {
    color: '#fff'
  }
})