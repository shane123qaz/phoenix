import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
// @ts-ignore
import { BarChart, LineChart, XAxis, YAxis } from "react-native-svg-charts";
import { Circle, Line, Text as SVGText } from "react-native-svg";
import { SIZE } from "../config/size";
import { blue, lightPurpe } from "../config/color";

const width = SIZE.MAX_WIDTH - 20;
const lineChartData = [
  Math.random() * 100,
  Math.random() * 100,
  Math.random() * 100,
  Math.random() * 100,
  Math.random() * 100,
  Math.random() * 100
];

const barData = [
  {
    data: [
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100
    ],
    svg: {
      fill: blue,
    }
  },
  {
    data: [
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100
    ]
  }
]

class SvgCharts extends React.Component {
  static navigationOptions = {
    title: 'SVG Charts'
  };

  public render() {
    const contentInset = { top: 10, bottom: 10, left: 10, right: 10 };
    const axesSvg = { fontSize: 10, fill: "white" };
    const Decorator = ({ x, y, data }: any) => data.map((value: any, index: any) => (
      <Circle
        key={index}
        cx={x(index)}
        cy={y(value)}
        r={4}
        stroke={lightPurpe}
        fill={'white'}
      />
    ));

    const HorizontalLine = (({ x, y }: any) => (
      <Line
        key={'sixty-axis'}
        x1={0}
        x2={x(width)}
        y1={y(60)}
        y2={y(60)}
        stroke={'red'}
        strokeDasharray={[4, 8]}
        strokeWidth={2}
      />
    ));

    const CUT_OFF = 10;
    const Labels = ({ x, y, bandwidth, data }: any) => (
      data.map((dataset: any, i: number) =>
        dataset.data.map((value: number, index: number) => (
          <SVGText
            key={index}
            x={i%2 === 0 ? x(index) + bandwidth/4 : x(index) + bandwidth*3/4}
            y={value < CUT_OFF ? y(value) - 10 : y(value) + 10}
            fontSize={14}
            fill={'white'}
            alignmentBaseline={'middle'}
            textAnchor={'middle'}
          >
            {value.toFixed(0)}
          </SVGText>
        ))
      ));

    return (
      <ScrollView>
        <View style={styles.title}><Text style={styles.text}>Line Chart</Text></View>
        <View style={styles.graphStyle}>
          <YAxis
            data={lineChartData}
            style={{ marginBottom: 10 }}
            contentInset={contentInset}
            svg={axesSvg}
            formatLabel={(value: number) => `$${value}`}
          />
          <View style={{ flex: 1, marginLeft: 10 }}>
            <LineChart
              style={{ height: 260 }}
              data={lineChartData}
              svg={{ stroke: lightPurpe }}
              contentInset={contentInset}
            >
              <HorizontalLine />
              <Decorator />
            </LineChart>
            <XAxis
              style={{ height: 10 }}
              data={lineChartData}
              formatLabel={(_: any, index: number) => index}
              contentInset={contentInset}
              svg={axesSvg}
            />
          </View>
        </View>
        <View style={styles.title}><Text style={styles.text}>Bar Chart</Text></View>
        <View style={styles.graphStyle}>
          <YAxis
            data={lineChartData}
            style={{ marginBottom: 10 }}
            contentInset={contentInset}
            svg={axesSvg}
            formatLabel={(value: number) => `$${value}`}
          />
          <View style={{ flex: 1, marginLeft: 10 }}>
            <BarChart
              style={{ height: 260, flex: 1 }}
              data={barData}
              svg={{ fill: lightPurpe }}
              contentInset={contentInset}
              spacingInner={0.2}
              spacingOuter={0}
              gridMin={0}
            >          
              <Labels />
            </BarChart>
            <XAxis
              style={{ height: 10 }}
              data={lineChartData}
              formatLabel={(_: any, index: number) => index}
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
    marginHorizontal: 10,
    height: 280,
    padding: 5,
    flexDirection: 'row',
    backgroundColor: 'black'
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
