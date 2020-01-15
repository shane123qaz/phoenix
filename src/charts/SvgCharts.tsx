import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import {
  BarChart,
  LineChart,
  PieChart,
  ProgressCircle,
  StackedAreaChart,
  XAxis,
  YAxis,
} from 'react-native-svg-charts';
import { Circle, Line, Text as SVGText } from 'react-native-svg';
import * as shape from 'd3-shape';
import { SIZE } from '../config/size';
import { blue, lightPurpe } from '../config/color';
import { trackScreenView } from '../utils/analyticsUtils';

type KeyType = 'apples' | 'bananas' | 'cherries' | 'dates';

const width = SIZE.MAX_WIDTH - 20;
const lineChartData = [
  Math.random() * 100,
  Math.random() * 100,
  Math.random() * 100,
  Math.random() * 100,
  Math.random() * 100,
  Math.random() * 100,
];

const barData = [
  {
    data: [
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
    ],
    svg: {
      fill: blue,
    },
  },
  {
    data: [
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
    ],
  },
];

const progressChartData = 90;

const pieChartData = [
  {
    key: 1,
    amount: 50,
    svg: { fill: '#600080' },
  },
  {
    key: 2,
    amount: 50,
    svg: { fill: '#9900cc' },
  },
  {
    key: 3,
    amount: 40,
    svg: { fill: '#c61aff' },
  },
  {
    key: 4,
    amount: 95,
    svg: { fill: '#d966ff' },
  },
  {
    key: 5,
    amount: 35,
    svg: { fill: '#ecb3ff' },
  },
];

const stackedBarData = [
  {
    apples: 3840,
    bananas: 1920,
    cherries: 960,
    dates: 400,
  },
  {
    apples: 1600,
    bananas: 1440,
    cherries: 960,
    dates: 400,
  },
  {
    apples: 640,
    bananas: 960,
    cherries: 3640,
    dates: 400,
  },
  {
    apples: 3320,
    bananas: 480,
    cherries: 640,
    dates: 400,
  },
];

class SvgCharts extends React.Component {
  static navigationOptions = {
    title: 'SVG Charts',
  };

  public componentDidMount() {
    trackScreenView('SVGChartsScreen');
  }

  public render() {
    const contentInset = { top: 10, bottom: 10, left: 10, right: 10 };
    const axesSvg = { fontSize: 10, fill: 'white' };
    const Decorator = ({ x, y, data }: any) =>
      data.map((value: any, index: any) => (
        <Circle
          key={index}
          cx={x(index)}
          cy={y(value)}
          r={4}
          stroke={lightPurpe}
          fill={'white'}
        />
      ));

    const HorizontalLine = ({ x, y }: any) => (
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
    );

    const CUT_OFF = 10;
    const Labels = ({ x, y, bandwidth, data }: any) =>
      data.map((dataset: any, i: number) =>
        dataset.data.map((value: number, index: number) => (
          <SVGText
            key={index}
            x={
              i % 2 === 0
                ? x(index) + bandwidth / 4
                : x(index) + (bandwidth * 3) / 4
            }
            y={value < CUT_OFF ? y(value) - 10 : y(value) + 10}
            fontSize={14}
            fill={'white'}
            alignmentBaseline={'middle'}
            textAnchor={'middle'}>
            {value.toFixed(0)}
          </SVGText>
        )),
      );

    const PieChartLabels = ({ slices }: any) =>
      slices.map(({ pieCentroid, data }: any, index: number) => (
        <SVGText
          key={index}
          x={pieCentroid[0]}
          y={pieCentroid[1]}
          fill={'white'}
          textAnchor={'middle'}
          alignmentBaseline={'middle'}
          fontSize={24}
          stroke={'black'}
          strokeWidth={0.2}>
          {data.amount}
        </SVGText>
      ));

    const colors = ['#8800cc', '#aa00ff', '#cc66ff', '#eeccff'];
    const keys: KeyType[] = ['apples', 'bananas', 'cherries', 'dates'];

    return (
      <ScrollView>
        <View style={styles.title}>
          <Text style={styles.text}>Line Chart</Text>
        </View>
        <View style={styles.graphStyle}>
          <YAxis
            data={lineChartData}
            style={styles.yAxis}
            contentInset={contentInset}
            svg={axesSvg}
            formatLabel={(value: number) => `$${value}`}
          />
          <View style={styles.chart}>
            <LineChart
              style={styles.chartHeight}
              data={lineChartData}
              svg={{ stroke: lightPurpe }}
              contentInset={contentInset}>
              <HorizontalLine />
              <Decorator />
            </LineChart>
            <XAxis
              style={styles.xAxis}
              data={lineChartData}
              formatLabel={(_: any, index: number) => index}
              contentInset={contentInset}
              svg={axesSvg}
            />
          </View>
        </View>
        <View style={styles.title}>
          <Text style={styles.text}>Bar Chart</Text>
        </View>
        <View style={styles.graphStyle}>
          <YAxis
            data={lineChartData}
            style={styles.yAxis}
            contentInset={contentInset}
            svg={axesSvg}
            formatLabel={(value: number) => `$${value}`}
          />
          <View style={styles.chart}>
            <BarChart
              style={styles.chartHeight}
              data={barData}
              svg={{ fill: lightPurpe }}
              contentInset={contentInset}
              spacingInner={0.2}
              spacingOuter={0}
              gridMin={0}>
              <Labels />
            </BarChart>
            <XAxis
              style={styles.xAxis}
              data={lineChartData}
              formatLabel={(_: any, index: number) => index}
              contentInset={contentInset}
              svg={axesSvg}
            />
          </View>
        </View>
        <View style={styles.title}>
          <Text style={styles.text}>Progress Chart</Text>
        </View>
        <View style={styles.graphStyle}>
          <ProgressCircle
            style={styles.chart}
            progress={progressChartData / 100}
            progressColor={lightPurpe}
            startAngle={-Math.PI * 0}
            endAngle={2 * Math.PI * 1}>
            <SVGText
              key={'progress-key'}
              x={0}
              y={0}
              fontSize={20}
              fill={'white'}
              alignmentBaseline={'middle'}
              textAnchor={'middle'}>
              {progressChartData}
            </SVGText>
          </ProgressCircle>
        </View>
        <View style={styles.title}>
          <Text style={styles.text}>Pie Chart</Text>
        </View>
        <View style={styles.graphStyle}>
          <PieChart
            style={styles.chart}
            valueAccessor={({ item }: any) => item.amount}
            data={pieChartData}
            outerRadius={'95%'}>
            <PieChartLabels />
          </PieChart>
        </View>
        <View style={styles.title}>
          <Text style={styles.text}>Stacked Bar Chart</Text>
        </View>
        <View style={styles.graphStyle}>
          <StackedAreaChart
            style={styles.chart}
            data={stackedBarData}
            keys={keys}
            colors={colors}
            curve={shape.curveNatural}
            showGrid={false}
          />
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
    backgroundColor: 'black',
  },
  title: {
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
  },
  chart: {
    height: 260,
    flex: 1,
    alignSelf: 'center',
  },
  chartHeight: { height: 260 },
  yAxis: { marginBottom: 10 },
  xAxis: { height: 10 },
});

export default SvgCharts;
