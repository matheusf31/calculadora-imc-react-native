import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import Background from '~/components/Background/index';
import style from './styles';

export default function Calculadora({ navigation }) {
  function Voltar() {
    navigation.navigate('Main');
  }

  return (
    <Background style={style.container}>
      <Button title="Voltar" onPress={Voltar} />
      <Text>Vamos Calcular</Text>
      <TextInput placeholder="Digite o peso" />
      <TextInput placeholder="Digite a altura" />
    </Background>
  );
}
