import { createAppContainer, createStackNavigator } from 'react-navigation';
import ModalScreen from 'app/screens/ModalScreen';

import HomeScreen from 'app/screens/HomeScreen';

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

const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainStack,
    },
    Modal: {
      screen: ModalScreen,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

export const AppContainer = createAppContainer(RootStack);
