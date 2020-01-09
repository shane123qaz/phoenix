import React from 'react';
import {View, Text} from 'react-native';

class Flight extends React.Component {
  static navigationOptions = {
    title: 'Flight',
  };

  public render() {
    return (
      <View>
        <Text>Hello Flight Page</Text>
      </View>
    );
  }
}

export default Flight;
