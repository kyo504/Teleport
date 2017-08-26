import { StackNavigator } from 'react-navigation';

import MainScreen from '../screens/MainScreen';
import RequestScreen from '../screens/RequestScreen';
import MapScreen from '../screens/MapScreen';
import DummyScreen from '../screens/DummyScreen';

const AppNavigator = StackNavigator({
  Main: { screen: MainScreen },
  Request: { screen: RequestScreen },
  Dummy: { screen: DummyScreen },
  Map: { screen: MapScreen },
},{
  initialRouteName: 'Main',
});

export default AppNavigator;
