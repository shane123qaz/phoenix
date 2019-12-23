import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from "./src/Home";
import Flight from './src/Flight';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    Flight: {
      screen: Flight,
    }
  },
  {
    initialRouteName: "Home",
  }
);

export default createAppContainer(AppNavigator);
