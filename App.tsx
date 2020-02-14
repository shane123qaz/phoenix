/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './src/Home';
import Book from './src/book';
import ChartKitCharts from './src/charts/ChartKitCharts';
import SvgCharts from './src/charts/SvgCharts';
import UploadImage from './src/pages/UploadImage';
import { white, blue } from './src/config/color';
import BookWebView from './src/book/BookWebView';
import { Cards } from './src/cards/index';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    Book: {
      screen: Book,
    },
    BookWebView: {
      screen: BookWebView,
    },
    Cards: {
      screen: Cards,
    },
    ChartKitCharts: {
      screen: ChartKitCharts,
    },
    SvgCharts: {
      screen: SvgCharts,
    },
    UploadImage: {
      screen: UploadImage,
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: blue,
      },
      headerTintColor: white,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

// @ts-ignore
AppRegistry.registerComponent(appName, () => createAppContainer(AppNavigator));
