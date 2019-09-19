import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  BackHandler,
} from 'react-native';
import styles from './styles';

export default function Resultado({ navigation }) {
  const imc = navigation.getParam('imc');

  function Voltar() {
    navigation.navigate('Calculadora');
  }

  BackHandler.addEventListener('hardwareBackPress', function() {
    navigation.navigate('Calculadora');
    return true;
  });

  return (
    <ScrollView style={{ flex: 1 }}>
      <TouchableOpacity style={styles.buttonVoltar} onPress={Voltar}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>

      <View style={styles.resultado}>
        <Text style={styles.text}>Resultado: {imc.toFixed(2)}</Text>
      </View>

      <View style={styles.container}>
        <View style={styles.param}>
          <Text style={styles.textTabela}>{'< 16'} </Text>
        </View>

        <View style={styles.descricao}>
          <Text style={styles.textTabela}>Magreza grau III</Text>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.param}>
          <Text style={styles.textTabela}>16.0 - 16.9</Text>
        </View>

        <View style={styles.descricao}>
          <Text style={styles.textTabela}>Magreza grau II</Text>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.param}>
          <Text style={styles.textTabela}>17.0 - 18.4</Text>
        </View>

        <View style={styles.descricao}>
          <Text style={styles.textTabela}>Magreza grau I</Text>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.param}>
          <Text style={styles.textTabela}>18,5 - 24,9</Text>
        </View>

        <View style={styles.descricao}>
          <Text style={styles.textTabela}>Peso ideal</Text>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.param}>
          <Text style={styles.textTabela}>25,0 - 29,9</Text>
        </View>

        <View style={styles.descricao}>
          <Text style={styles.textTabela}>Sobrepeso</Text>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.param}>
          <Text style={styles.textTabela}>30,0 - 34,9</Text>
        </View>

        <View style={styles.descricao}>
          <Text style={styles.textTabela}>Obesidade grau I</Text>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.param}>
          <Text style={styles.textTabela}>35,0 - 39,9</Text>
        </View>

        <View style={styles.descricao}>
          <Text style={styles.textTabela}>Obesidade grau II</Text>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.param}>
          <Text style={styles.textTabela}>{'>= 40'}</Text>
        </View>

        <View style={styles.descricao}>
          <Text style={styles.textTabela}>Obesidade grau III</Text>
        </View>
      </View>
    </ScrollView>
  );
}
