import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

export default function Resultado({ navigation }) {
  const imc = navigation.getParam('imc');

  function Voltar() {
    navigation.navigate('Calculadora');
  }

  // function Tabela(imc) {
  //   if (imc > 20) {
  //     return (
  //       <Text
  //         style={{
  //           fontWeight: 'bold',
  //           alignSelf: 'center',
  //           justifyContent: 'center',
  //         }}
  //       >
  //         MAIOR QUE 20
  //       </Text>
  //     );
  //   } else if (imc < 20) {
  //     return (
  //       <Text
  //         style={{
  //           fontWeight: 'bold',
  //           alignSelf: 'center',
  //           justifyContent: 'center',
  //         }}
  //       >
  //         MENOR QUE 20
  //       </Text>
  //     );
  //   }
  // }

  return (
    <View>
      <TouchableOpacity style={styles.buttonVoltar} onPress={Voltar}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>

      <View>
        <Text style={styles.text}>Resultado: {imc.toFixed(2)}</Text>
      </View>

      {/* {Tabela(imc)} */}
    </View>
  );
}
