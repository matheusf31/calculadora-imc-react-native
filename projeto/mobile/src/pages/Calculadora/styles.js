import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container1: {
    flex: 1,
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
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
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  logo: {
    color: '#999',
    fontSize: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    fontFamily: 'Satisfy-Regular',
  },
});

export default styles;
