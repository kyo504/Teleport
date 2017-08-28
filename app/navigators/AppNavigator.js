import { StackNavigator } from 'react-navigation';

import MainScreen from '../screens/MainScreen';
import RequestScreen from '../screens/RequestScreen';
import MapScreen from '../screens/MapScreen';
import DummyScreen from '../screens/DummyScreen';
import ConfirmScreen from '../screens/ConfirmScreen';

const AppNavigator = StackNavigator({
  Main: { screen: MainScreen },
  Request: { screen: RequestScreen },
  Dummy: { screen: DummyScreen },
  Map: { screen: MapScreen },
  Confirm: { screen: ConfirmScreen },
},{
  initialRouteName: 'Main',
});

export default AppNavigator;
