import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {
  BarChart,
  LineChart,
  PieChart,
  ProgressChart,
  StackedBarChart,
} from 'react-native-chart-kit';
import {SIZE} from '../config/size';
import {
  chartData,
  progressChartData,
  pieChartData,
  stackedBarData,
} from './CharKitData';

const width = SIZE.MAX_WIDTH - 20;
const chartConfig = {
  backgroundColor: '#022173',
  backgroundGradientFrom: '#022173',
  backgroundGradientTo: '#1b3fa0',
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  strokeWidth: 10,
  barPercentage: 0.8,
  barRadius: 0.8,
  propsForBackgroundLines: {
    x1: 0,
    y1: 100,
    x2: width,
    y2: 100,
    stroke: 'red',
    strokeWidth: 2,
  },
};

class ChartKitCharts extends React.Component {
  static navigationOptions = {
    title: 'Chart Kit Charts',
  };

  public render() {
    return (
      <ScrollView>
        <View style={styles.title}>
          <Text style={styles.text}>Line Chart</Text>
        </View>
        <LineChart
          style={styles.graphStyle}
          data={chartData}
          width={width}
          height={260}
          yAxisLabel={'$'}
          chartConfig={chartConfig}
          fromZero={true}
          bezier
          decorator={() => (
            <View>
              <Text style={styles.extraInfo}>average line</Text>
            </View>
          )}
        />
        <View style={styles.title}>
          <Text style={styles.text}>Bar Chart</Text>
        </View>
        <BarChart
          style={styles.graphStyle}
          data={chartData}
          width={width}
          height={260}
          yAxisLabel={'$'}
          yAxisSuffix={''}
          chartConfig={chartConfig}
          verticalLabelRotation={20}
        />
        <View style={styles.title}>
          <Text style={styles.text}>Progress Chart</Text>
        </View>
        <ProgressChart
          // @ts-ignore
          style={styles.graphStyle}
          data={progressChartData}
          width={width}
          height={260}
          chartConfig={chartConfig}
          hideLegend={false}
        />
        <View style={styles.title}>
          <Text style={styles.text}>Pie Chart</Text>
        </View>
        <PieChart
          // @ts-ignore
          style={styles.graphStyle}
          data={pieChartData}
          width={width}
          height={260}
          chartConfig={chartConfig}
          accessor="population"
          backgroundColor="#022173"
          paddingLeft={'15'}
          absolute
        />
        <View style={styles.title}>
          <Text style={styles.text}>Stacked Bar Chart</Text>
        </View>
        <StackedBarChart
          style={styles.graphStyle}
          data={stackedBarData}
          width={width}
          height={260}
          chartConfig={chartConfig}
          hideLegend={false}
        />
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
  },
  title: {
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
  },
  extraInfo: {
    position: 'relative',
    top: 140,
    left: 10,
    color: 'red',
  },
});

export default ChartKitCharts;
