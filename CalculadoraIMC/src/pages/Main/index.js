import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

export default function Main({ navigation }) {
  function Muda() {
    navigation.navigate('Calculadora');
  }

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.text}>Calculadora de IMC</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={Muda}>
        <Text style={styles.buttonText}>Começar</Text>
      </TouchableOpacity>

      <View>
        <Text style={styles.textDivulgacao}>Contato</Text>
      </View>
    </View>
  );
}
