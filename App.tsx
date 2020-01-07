/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from "./src/Home";
import Flight from './src/Flight';
import ChartKitCharts from './src/charts/ChartKitCharts';
import SvgCharts from './src/charts/SvgCharts';
import { white, blue } from './src/config/color';


const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    Flight: {
      screen: Flight,
    },
    ChartKitCharts: {
      screen: ChartKitCharts
    },
    SvgCharts: {
      screen: SvgCharts
    }
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: blue,
      },
      headerTintColor: white,
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }
  }
);

// @ts-ignore
AppRegistry.registerComponent(appName, () => createAppContainer(AppNavigator));
