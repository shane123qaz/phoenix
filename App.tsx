import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from "./src/Home";
import Flight from './src/Flight';
import ChartKitCharts from './src/charts/ChartKitCharts';
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

export default createAppContainer(AppNavigator);
