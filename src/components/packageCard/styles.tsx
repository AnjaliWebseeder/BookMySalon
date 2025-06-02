import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

     card: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 12,
    margin: 10
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8
  },
  detail: {
    fontSize: 13,
    color: '#333'
  },
  price: {
    marginTop: 8,
    fontWeight: '600'
  },
  button: {
    marginTop: 6,
    backgroundColor: '#eee',
    padding: 6,
    borderRadius: 6,
    alignItems: 'center'
  }
})