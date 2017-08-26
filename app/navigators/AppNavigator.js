import { StackNavigator } from 'react-navigation';

import MainScreen from '../screens/MainScreen';
import MapScreen from '../screens/MapScreen';
import DummyScreen from '../screens/DummyScreen';

const AppNavigator = StackNavigator({
  Main: { screen: MainScreen },
  Dummy: { screen: DummyScreen },
  Map: { screen: MapScreen },
});

export default AppNavigator;
