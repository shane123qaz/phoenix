import React from 'react';
import Carousel from 'react-native-snap-carousel';
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';

const entries = [
  {
    title: 'Beautiful and dramatic Antelope Canyon',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/UYiroysl.jpg',
  },
  {
    title: 'Earlier this morning, NYC',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
  },
  {
    title: 'White Pocket Sunset',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration: 'https://i.imgur.com/MABUbpDl.jpg',
  },
  {
    title: 'Acrocorinth, Greece',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
  },
  {
    title: 'The lone tree, majestic landscape of New Zealand',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/2nCt3Sbl.jpg',
  },
  {
    title: 'Middle Earth, Germany',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/lceHsT6l.jpg',
  },
];

const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
  'window',
);

const wp = (percentage: number) => {
  return Math.floor((percentage * viewportWidth) / 100);
};

const slideHeight = viewportHeight * 0.36;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);

const itemWidth = slideWidth + itemHorizontalMargin * 2;

export class CustomizedCarousel extends React.Component {
  _renderItem = ({
    item,
    index,
  }: {
    item: { illustration: string };
    index: any;
  }) => {
    return (
      <View style={styles.slide}>
        <TouchableOpacity
          key={index}
          onPress={() => {
            console.log('click');
          }}>
          <Image source={{ uri: item.illustration }} style={styles.image} />
        </TouchableOpacity>
      </View>
    );
  };
  public render() {
    return (
      <Carousel
        data={entries}
        renderItem={this._renderItem}
        sliderWidth={slideWidth}
        itemWidth={itemWidth}
      />
    );
  }
}

const styles = StyleSheet.create({
  slide: {
    margin: 15,
    overflow: 'visible',
  },
  image: {
    width: itemWidth,
    height: slideHeight,
  },
});
