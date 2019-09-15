import { StyleSheet, Dimensions } from 'react-native';

width = Dimensions.get('window').width;

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  button: {
    height: 46,
    backgroundColor: '#ade0ee',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    padding: 20,
  },
  text: {
    color: '#999',
    alignSelf: 'center',
    fontFamily: 'Century Gothic',
    padding: 20,
    textAlign: 'center',
    fontSize: 0.07 * width,
  },
  textDivulgacao: {
    color: '#999',
    alignSelf: 'center',
    fontFamily: 'Century Gothic',
    padding: 20,
    textAlign: 'center',
    fontSize: 0.05 * width,
    marginTop: 150,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
