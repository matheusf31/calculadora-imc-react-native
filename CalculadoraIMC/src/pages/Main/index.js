import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  Linking,
} from 'react-native';
import styles from './styles';
import { PanGestureHandler } from 'react-native-gesture-handler';
import github from '../../assets/github.png';
import gmail from '../../assets/gmail.png';

export default function Main({ navigation }) {
  function Muda() {
    navigation.navigate('Calculadora');
  }

  function gotoGithub() {
    return Linking.openURL('https://github.com/matheusf31');
  }

  function gotoGmail() {
    return Linking.openURL('mailto:matheusg4g4@gmail.com?subject=&body=');
  }

  return (
    <PanGestureHandler>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.main}>
            <Text style={styles.text}>Calculadora de IMC</Text>
          </View>

          <TouchableOpacity style={styles.button} onPress={Muda}>
            <Text style={styles.buttonText}>Começar</Text>
          </TouchableOpacity>

          <View>
            <Text style={styles.textDivulgacao}>Contato:</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <TouchableOpacity onPress={gotoGithub} activeOpacity={0.5}>
              <Image source={github} style={styles.image} />
            </TouchableOpacity>

            <TouchableOpacity onPress={gotoGmail} activeOpacity={0.5}>
              <Image source={gmail} style={styles.imageGmail} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </PanGestureHandler>
  );
}
