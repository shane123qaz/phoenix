import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { INavigation } from '../types';

type IProps = INavigation & {
  uri?: string;
};

class BookWebView extends Component<IProps> {
  render() {
    const uri = this.props.uri || this.props.navigation.getParam('uri');
    return <WebView source={{ uri }} style={styles.container} />;
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});

export default BookWebView;
