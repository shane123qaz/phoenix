import React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import { Header } from '../components/Header';
import { SIZE } from '../config/size';
import { white, red, blue } from '../config/color';
import { INavigation } from '../types';
import { trackScreenView } from '../utils/analyticsUtils';

type Props = INavigation;

class UploadImage extends React.Component<Props> {
  static navigationOptions = {
    title: 'UploadImage',
  };

  public componentDidMount() {
    trackScreenView('UploadImageScreen');
  }

  pickMultiple = () => {
    ImagePicker.openPicker({
      multiple: true,
    }).then(images => {
      console.log(images);
    });
  };

  public render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Header title="Game List" />
        </View>
        <Button
          color={blue}
          title="Select Mutiple Pictures"
          onPress={this.pickMultiple}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: SIZE.MAX_HEIGHT,
  },
  header: {
    height: '10%',
    backgroundColor: red,
    borderWidth: 1,
    borderColor: white,
    borderRadius: 5,
    paddingLeft: 20,
  },
});

export default UploadImage;
