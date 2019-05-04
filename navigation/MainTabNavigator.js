import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Ascii',
};

const MainStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    }
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

export default MainStack;