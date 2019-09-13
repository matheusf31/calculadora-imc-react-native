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

  function Resultado(imc) {
    if (Validacao()) {
      navigation.navigate('Resultado', { imc });
    }
  }

  function CalculaImc() {
    let sqrtAltura = altura * altura;

    let imc = peso / sqrtAltura;

    return Resultado(imc);
  }

  function Validacao() {
    if (
      (idade === '' || idade < 0) &&
      (peso === '' || peso < 0) &&
      (altura === '' || altura < 0)
    ) {
      alert('idade, peso e altura invalidos');
    } else if ((idade === '' || idade < 0) && (peso === '' || peso < 0)) {
      alert('idade e peso invalidos');
    } else if ((idade === '' || idade < 0) && (altura === '' || altura < 0)) {
      alert('idade e altura invalidos');
    } else if ((peso === '' || peso < 0) && (altura === '' || altura < 0)) {
      alert('peso e altura invalidos');
    } else if (idade === '' || idade < 0) {
      alert('idade invalida');
    } else if (peso === '' || peso < 0) {
      alert('peso invalido');
    } else if (altura === '' || altura < 0) {
      alert('altura invalida');
    } else {
      return true;
    }
  }

  return (
    <View style={styles.container1}>
      <TouchableOpacity onPress={Voltar} style={styles.buttonVoltar}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>

      <View style={styles.container2}>
        <Text style={styles.logo}>digite seus dados</Text>

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
          placeholder="Peso (kg)"
          style={styles.input}
          placeholderTextColor="#999"
          value={peso}
          onChangeText={setPeso}
        />
        <TextInput
          keyboardType={'numeric'}
          placeholder="Altura (cm)"
          style={styles.input}
          placeholderTextColor="#999"
          value={altura}
          onChangeText={setAltura}
        />

        <TouchableOpacity style={styles.buttonCalcular} onPress={CalculaImc}>
          <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
