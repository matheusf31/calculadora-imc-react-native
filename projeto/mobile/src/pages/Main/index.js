import React from 'react';
import { Text, Button } from 'react-native';

import Background from '~/components/Background';

export default function Main() {
  return (
    <Background>
      <Text>Calculadora de IMC</Text>
      <Button title="Get Start" />
    </Background>
  );
}
