import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function Resultado({ navigation }) {
  function Voltar() {
    navigation.navigate('Calculadora');
  }

  return (
    <TouchableOpacity style={styles.buttonVoltar} onPress={Voltar}>
      <Text style={styles.buttonText}>Voltar</Text>
    </TouchableOpacity>
  );
}
