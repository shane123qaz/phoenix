import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Grid, LineChart, XAxis, YAxis } from "react-native-svg-charts";
import { Circle, Rect } from "react-native-svg";
import { SIZE } from "../config/size";

const width = SIZE.MAX_WIDTH - 20;
const lineChartData = [
  Math.random() * 100,
  Math.random() * 100,
  Math.random() * 100,
  Math.random() * 100,
  Math.random() * 100,
  Math.random() * 100
];

class SvgCharts extends React.Component {
  static navigationOptions = {
    title: 'SVG Charts'
  };

  public render() {
    const contentInset = { top: 10, bottom: 10, left: 10, right: 10 };
    const axesSvg = { fontSize: 10, fill: 'grey' };
    const Decorator = ({ x, y, data }: any) => {
      return data.map((value: any, index: any) => (
        <Circle
          key={index}
          cx={x(index)}
          cy={y(value)}
          r={4}
          stroke={'rgb(134, 65, 244)'}
          fill={'white'}
        />
      ))
    };

    return (
      <ScrollView>
        <View style={styles.title}><Text style={styles.text}>Line Chart</Text></View>
        <View style={{ height: 280, padding: 5, flexDirection: 'row' }}>
          <YAxis
            data={lineChartData}
            style={{ marginBottom: 10 }}
            contentInset={contentInset}
            svg={axesSvg}
          />
          <View style={{ flex: 1, marginLeft: 10 }}>
            <LineChart
              style={{ height: 260 }}
              data={lineChartData}
              svg={{ stroke: 'rgb(134, 65, 244)' }}
              contentInset={contentInset}
            >
              <Grid />
              <Decorator />
            </LineChart>
            <XAxis
              style={{ height: 10 }}
              data={lineChartData}
              formatLabel={(value: any, index: number) => index}
              contentInset={contentInset}
              svg={axesSvg}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  graphStyle: {
    marginVertical: 8,
    borderRadius: 20,
    marginLeft: 10,
    marginHorizontal: 10
  },
  title: {
    height: 44,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 20
  }
});

export default SvgCharts;
