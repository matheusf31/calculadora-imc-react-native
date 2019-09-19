import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  BackHandler,
} from 'react-native';
import styles from './styles';

export default function Calculadora({ navigation }) {
  const [idade, setIdade] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  function Voltar() {
    navigation.navigate('Main');
  }

  function Resultado() {
    let imc = CalculaImc();

    if (Validacao(imc)) {
      navigation.navigate('Resultado', { imc });
    }
  }

  function CalculaImc() {
    let sqrtAltura = altura * altura;

    if (altura > 3) {
      sqrtAltura = sqrtAltura / 10000;
    }

    let imc = peso / sqrtAltura;

    return imc;
  }

  function Validacao(imc) {
    if (VerificaIdade() && VerificaPeso() && VerificaAltura()) {
      alert('idade, peso e altura invalidos');
    } else if (VerificaIdade() && VerificaPeso()) {
      alert('idade e peso invalidos');
    } else if (VerificaIdade() && VerificaAltura()) {
      alert('idade e altura invalidos');
    } else if (VerificaPeso() && VerificaAltura()) {
      alert('peso e altura invalidos');
    } else if (VerificaIdade()) {
      alert('idade invalida');
    } else if (VerificaPeso()) {
      alert('peso invalido');
    } else if (VerificaAltura()) {
      alert('altura invalida');
    } else {
      return true;
    }
  }

  function VerificaIdade() {
    if (idade === '' || idade < 0 || isNaN(idade)) {
      return true;
    } else {
      return false;
    }
  }

  function VerificaPeso() {
    if (peso === '' || peso < 0 || isNaN(peso)) {
      return true;
    } else {
      return false;
    }
  }

  function VerificaAltura() {
    if (altura === '' || altura < 0 || isNaN(altura)) {
      return true;
    } else {
      return false;
    }
  }

  BackHandler.addEventListener('hardwareBackPress', function() {
    navigation.navigate('Main');
    return true;
  });

  return (
    <ScrollView style={styles.container1} keyboardShouldPersistTaps="handled">
      <TouchableOpacity onPress={Voltar} style={styles.buttonVoltar}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>

      <KeyboardAvoidingView behavior="padding">
        <Text style={styles.logo}>digite seus dados</Text>

        <View style={{ padding: 20 }}>
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
            placeholder="Altura (m)"
            style={styles.input}
            placeholderTextColor="#999"
            value={altura}
            onChangeText={setAltura}
          />

          <TouchableOpacity onPress={Resultado} style={styles.buttonCalcular}>
            <Text style={styles.buttonText}>Calcular</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}
