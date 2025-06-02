import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    width: 180,
    borderRadius: 12,
    backgroundColor: '#fff',
    padding: 10,
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 8,
  },
  title: {
    marginTop: 8,
    fontWeight: 'bold',
    fontSize: 14,
  },
  description: {
    fontSize: 12,
    color: '#555',
    marginTop: 2,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 6,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 13,
  },
  time: {
    fontSize: 12,
    color: '#999',
  },
  button: {
    marginTop: 8,
    backgroundColor: '#eee',
    alignSelf: 'flex-end',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 12,
    fontWeight: '600',
  },
})