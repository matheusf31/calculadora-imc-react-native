import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Main from './pages/Main';
import Calculadora from './pages/Calculadora';
import Resultado from './pages/Resultado';

export default createAppContainer(
  createSwitchNavigator({
    Main,
    Calculadora,
    Resultado,
  })
);
