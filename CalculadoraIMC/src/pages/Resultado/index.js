import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

export default function Resultado({ navigation }) {
  const imc = navigation.getParam('imc');

  function Voltar() {
    navigation.navigate('Calculadora');
  }

  return (
    <View>
      <TouchableOpacity style={styles.buttonVoltar} onPress={Voltar}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>

      <View>
        <Text style={styles.text}>Resultado: {imc.toFixed(2)}</Text>
      </View>

      <Text style={styles.textTabela}>Entre 18,5 e 24,9 Peso ideal.</Text>
      <Text style={styles.textTabela}>
        Entre 25,0 e 29,9 Você está acima de seu peso (sobrepeso).
      </Text>
      <Text style={styles.textTabela}>Entre 30,0 e 34,9 Obesidade grau I.</Text>
      <Text style={styles.textTabela}>Entre 35,0 Obesidade grau II.</Text>
      <Text style={styles.textTabela}>
        40,0 e acima Obesidade graus III e IV.
      </Text>
    </View>
  );
}
