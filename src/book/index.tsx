import React from 'react';
import { ImageBackground, Text, StyleSheet, View, Image } from 'react-native';
import { onProductView } from '../utils/analyticsUtils';
import { lightPurpe } from 'src/config/color';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const bookrack = require('../../assets/bookrack.jpg');
const books = [
  { uri: 'https://facebook.github.io/react-native/img/tiny_logo.png' },
  { uri: 'https://facebook.github.io/react-native/img/tiny_logo.png' },
  { uri: 'https://facebook.github.io/react-native/img/tiny_logo.png' },
  { uri: 'https://facebook.github.io/react-native/img/tiny_logo.png' },
  { uri: 'https://facebook.github.io/react-native/img/tiny_logo.png' },
  { uri: 'https://facebook.github.io/react-native/img/tiny_logo.png' },
  { uri: 'https://facebook.github.io/react-native/img/tiny_logo.png' },
];

class Book extends React.Component {
  static navigationOptions = {
    title: 'Book',
  };

  public componentDidMount() {
    onProductView();
  }

  private chooseBook() {
    console.log('**********');
  }

  public render() {
    return (
      <ImageBackground source={bookrack} style={styles.background}>
        <View style={styles.container}>
          <Text style={styles.title}>我的书架</Text>
          <View style={styles.books}>
            {books.map((book, index) => (
              <Image
                key={index}
                source={{ uri: book.uri }}
                style={styles.book}
              />
            ))}
          </View>
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
    flexDirection: 'column',
    paddingLeft: 5,
    paddingRight: 5,
  },
  title: {
    marginTop: 15,
    marginBottom: 20,
    fontSize: 20,
    color: lightPurpe,
    alignSelf: 'center',
  },
  books: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  book: {
    width: 110,
    height: 180,
    marginBottom: 63,
  },
});

export default Book;
