import React from 'react';
import { ImageBackground, Text, StyleSheet, View } from 'react-native';
import { onProductView } from '../utils/analyticsUtils';
import { lightPurpe } from 'src/config/color';

class Book extends React.Component {
  static navigationOptions = {
    title: 'Book',
  };

  public componentDidMount() {
    onProductView();
  }

  public render() {
    return (
      <ImageBackground
        source={require('../../assets/bookrack.jpg')}
        style={styles.background}>
        <View style={styles.container}>
          <Text style={styles.title}>我的书架</Text>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
    paddingTop: 15,
    fontSize: 20,
    color: lightPurpe,
  },
});

export default Book;
