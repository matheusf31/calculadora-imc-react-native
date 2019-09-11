import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function Calculadora({ navigation }) {
  const [idade, setIdade] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  function Voltar() {
    navigation.navigate('Main');
  }

  function Resultado() {
    console.log(idade);
    console.log(peso);
    console.log(altura);
    // calcular o IMC, enviar como props para a página resultado
    navigation.navigate('Resultado');
  }

  return (
    <View style={styles.container1}>
      <TouchableOpacity onPress={Voltar} style={styles.buttonVoltar}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>

      <View style={styles.container2}>
        <Text style={styles.logo}>IMC</Text>

        <TextInput
          keyboardType={'numeric'}
          placeholder="Idade"
          style={styles.input}
          placeholderTextColor="#999"
          value={idade}
          onChangeText={setIdade}
        />
        <TextInput
          keyboardType={'numeric'}
          placeholder="Peso"
          style={styles.input}
          placeholderTextColor="#999"
          value={peso}
          onChangeText={setPeso}
        />
        <TextInput
          keyboardType={'numeric'}
          placeholder="Altura"
          style={styles.input}
          placeholderTextColor="#999"
          value={altura}
          onChangeText={setAltura}
        />
        <TouchableOpacity style={styles.buttonCalcular} onPress={Resultado}>
          <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
