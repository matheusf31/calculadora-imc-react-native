import { StyleSheet, Dimensions } from 'react-native';

width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container1: {
    flex: 1,
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#ddd',
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 15,
    borderRadius: 50,
  },
  buttonVoltar: {
    height: 28,
    alignSelf: 'flex-start',
    backgroundColor: '#ade0ee',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginTop: 10,
    marginLeft: 10,
  },
  buttonCalcular: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: '#ade0ee',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  logo: {
    color: '#999',
    fontSize: 0.09 * width,
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -100,
    fontFamily: 'Century Gothic',
    padding: 20,
  },
});

export default styles;
