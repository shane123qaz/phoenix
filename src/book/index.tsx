import React from 'react';
import {
  ImageBackground,
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { onProductView } from '../utils/analyticsUtils';
import { lightPurpe } from 'src/config/color';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const bookrack = require('../../assets/bookrack.jpg');
const books = [
  {
    imageUri: 'https://facebook.github.io/react-native/img/tiny_logo.png',
    linkUri: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/',
  },
];

class Book extends React.Component {
  static navigationOptions = {
    title: 'Book',
  };

  public componentDidMount() {
    onProductView();
  }

  private chooseBook(uri: string) {
    console.log(uri);
  }

  public render() {
    return (
      <ImageBackground source={bookrack} style={styles.background}>
        <View style={styles.container}>
          <Text style={styles.title}>我的书架</Text>
          <View style={styles.books}>
            {books.map((book, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => this.chooseBook(book.linkUri)}>
                <Image source={{ uri: book.imageUri }} style={styles.book} />
              </TouchableOpacity>
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
