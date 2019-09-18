import { StyleSheet, Dimensions } from 'react-native';

width = Dimensions.get('window').width;
height = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  main: {
    marginTop: 0.18 * height,
  },
  button: {
    height: 46,
    backgroundColor: '#ade0ee',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0.24 * height,
    padding: 20,
    marginBottom: 0.05 * height,
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
    marginTop: 0.06 * height,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  image: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: 70,
    height: 70,
    marginTop: -0.01 * height,
    marginRight: 10,
  },
  imageGmail: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    marginLeft: 10,
  },
});
