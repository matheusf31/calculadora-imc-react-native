import { StyleSheet, Dimensions } from 'react-native';

width = Dimensions.get('window').width;
height = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  main: {
    marginTop: 0.2 * height,
  },
  button: {
    height: 46,
    backgroundColor: '#ade0ee',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0.5 * width,
    padding: 20,
    marginBottom: 0.1 * width,
  },
  text: {
    color: '#999',
    alignSelf: 'center',
    fontFamily: 'Century Gothic',
    padding: 20,
    textAlign: 'center',
    fontSize: 0.04 * height,
  },
  textDivulgacao: {
    color: '#999',
    alignSelf: 'center',
    fontFamily: 'Century Gothic',
    padding: 20,
    textAlign: 'center',
    fontSize: 0.05 * width,
    marginTop: 0.1 * height,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
