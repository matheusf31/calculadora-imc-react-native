import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  text: {
    color: '#999',
    alignSelf: 'center',
    fontFamily: 'Century Gothic',
    padding: 20,
    textAlign: 'center',
    fontSize: 0.07 * width,
    marginBottom: 40,
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
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  textTabelaTabela: {
    color: '#999',
    alignSelf: 'flex-start',
    fontFamily: 'Century Gothic',
    padding: 10,
    textAlign: 'center',
    fontSize: 0.05 * width,
    paddingRight: 20,
  },
});

export default styles;
