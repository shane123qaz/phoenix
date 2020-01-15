import React from 'react';
import { View, Text } from 'react-native';
import { onProductView } from './utils/analyticsUtils';

class Flight extends React.Component {
  static navigationOptions = {
    title: 'Flight',
  };

  public componentDidMount() {
    onProductView();
  }

  public render() {
    return (
      <View>
        <Text>Hello Flight Page</Text>
      </View>
    );
  }
}

export default Flight;
