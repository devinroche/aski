import { createAppContainer, createStackNavigator } from 'react-navigation';
import ModalScreen from 'app/src/screens/ModalScreen';
import HomeScreen from 'app/src/screens/HomeScreen';
import ArtScreen from 'app/src/screens/ArtScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Ascii',
};

const MainStack = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Art: { screen: ArtScreen }
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
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
  },
);

export const AppContainer = createAppContainer(RootStack);
