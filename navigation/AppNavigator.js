import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import ModalScreen from '../screens/ModalScreen';
import MainStack from './MainTabNavigator'

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
