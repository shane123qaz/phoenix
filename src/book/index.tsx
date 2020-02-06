import React from 'react';
import { View, Text } from 'react-native';
import { onProductView } from '../utils/analyticsUtils';

class Book extends React.Component {
  static navigationOptions = {
    title: 'Book',
  };

  public componentDidMount() {
    onProductView();
  }

  public render() {
    return (
      <View>
        <Text>Hello Book Page</Text>
      </View>
    );
  }
}

export default Book;
