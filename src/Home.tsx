import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Header } from './components/Header';
import { white, red } from './config/color';
import { SIZE } from './config/size';
import { List } from './components/List';
import { INavigation } from './types';

type Props = INavigation;

class Home extends React.Component<Props> {
  static navigationOptions = {
    title: 'Home',
  };

  public render() {
    const list = [
      {
        id: '1',
        name: 'flight',
        handlePress: () => {
          this.props.navigation.navigate('Flight');
        },
      },
      { id: '2', name: 'reboot', handlePress: () => {} },
    ];

    const chartList = [
      {
        id: '1',
        name: 'chartKitCharts',
        handlePress: () => {
          this.props.navigation.navigate('ChartKitCharts');
        },
      },
      {
        id: '2',
        name: 'svgCharts',
        handlePress: () => {
          this.props.navigation.navigate('SvgCharts');
        },
      },
    ];

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Header title="Game List" />
        </View>
        <View style={styles.content}>
          <List data={list} />
        </View>
        <View style={styles.header}>
          <Header title="Chart List" />
        </View>
        <View style={styles.content}>
          <List data={chartList} />
        </View>
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
  content: {
    marginTop: 10,
    paddingLeft: 20,
  },
});

export default Home;
