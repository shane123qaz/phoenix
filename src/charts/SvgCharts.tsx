import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { LineChart, XAxis, YAxis } from "react-native-svg-charts";
import { Circle, Line, Rect } from "react-native-svg";
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
    const Decorator = ({ x, y, data }: any) => data.map((value: any, index: any) => (
      <Circle
        key={index}
        cx={x(index)}
        cy={y(value)}
        r={4}
        stroke={'rgb(134, 65, 244)'}
        fill={'white'}
      />
    ));

    const HorizontalLine = (({ y }: any) => (
      <Line
        key={'zero-axis'}
        x1={'0%'}
        x2={'100%'}
        y1={y(60)}
        y2={y(60)}
        stroke={'grey'}
        strokeDasharray={[4, 8]}
        strokeWidth={2}
      />
    ))

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
              <HorizontalLine />
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
