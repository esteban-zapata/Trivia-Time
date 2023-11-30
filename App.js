//Esteban Zapata

import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MainMenu from './Screens/MainMenu';
import Info from './Screens/Info';
import GameScreen from './Screens/GameScreen';
import ResultScreen from './Screens/ResultScreen';
import DifficultySelection from './Screens/SelectionScreen';

const AppNavigator = createStackNavigator(
  {
    MainMenu: { screen: MainMenu },
    DifficultySelection: { screen: DifficultySelection },
    GameScreen: { screen: GameScreen },
    ResultScreen: { screen: ResultScreen },
    InfoScreen: { screen: Info },
  },
  {
    initialRouteName: 'MainMenu',
  }
);

export default createAppContainer(AppNavigator);
