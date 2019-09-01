import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Main from './pages/Main';
import Calculadora from './pages/Calculadora';

export default createAppContainer(
  createSwitchNavigator({
    Main,
    Calculadora,
  })
);
