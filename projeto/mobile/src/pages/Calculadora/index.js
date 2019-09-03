import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import teste from '../Calculadora/assets/teste.png';

export default function Calculadora({ navigation }) {
  function Voltar() {
    navigation.navigate('Main');
  }

  return (
    <View style={styles.container1}>
      <TouchableOpacity onPress={Voltar} style={styles.buttonVoltar}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>

      <View style={styles.container2}>
        <TextInput
          placeholder="Idade"
          style={styles.input}
          placeholderTextColor="#999"
        />
        <TextInput
          placeholder="Peso"
          style={styles.input}
          placeholderTextColor="#999"
        />
        <TextInput
          placeholder="Altura"
          style={styles.input}
          placeholderTextColor="#999"
        />
        <TouchableOpacity style={styles.buttonCalcular}>
          <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
