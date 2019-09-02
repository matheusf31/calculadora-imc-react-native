import React from 'react';
import { Text, Button } from 'react-native';
import Background from '~/components/Background';
import style from './styles';

export default function Main({ navigation }) {
  function Muda() {
    navigation.navigate('Calculadora');
  }

  return (
    <Background style={style.container}>
      <Text>Calculadora de IMC</Text>
      <Button title="Get Start" onPress={Muda} />
    </Background>
  );
}
