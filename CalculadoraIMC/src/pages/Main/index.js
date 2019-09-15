import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

export default function Main({ navigation }) {
  function Muda() {
    navigation.navigate('Calculadora');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Calculadora de IMC</Text>

      <TouchableOpacity style={styles.button} onPress={Muda}>
        <Text style={styles.buttonText}>GET START</Text>
      </TouchableOpacity>

      <Text style={styles.textDivulgacao}>Contato</Text>
    </View>
  );
}
