import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10
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