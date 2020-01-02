import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import {
  BarChart,
  LineChart,
  PieChart,
  ProgressChart,
  StackedBarChart
} from "react-native-chart-kit";
import { SIZE } from "../config/size"

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
    stroke: "red",
    strokeWidth: 2
  }
};

const chartData = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      data: [
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100
      ],
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      strokeWidth: 2
    },
    {
      data: [
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100
      ],
      color: (opacity = 1) => `rgba(0, 255, 0, ${opacity})`,
      strokeWidth: 2
    }
  ],
  legend: ["Rainy Days", "Sunny Days"]
};

const progressChartData = {
  labels: ["Swim", "Bike", "Run"],
  data: [0.4, 0.6, 0.8]
}

const pieChartData = [
  {
    name: "Seoul",
    population: 21500000,
    color: "rgba(131, 167, 234, 1)",
    legendFontColor: "#7F7F7F",
    legendFontSize: 12
  },
  {
    name: "Toronto",
    population: 2800000,
    color: "#F00",
    legendFontColor: "#7F7F7F",
    legendFontSize: 12
  },
  {
    name: "Beijing",
    population: 527612,
    color: "red",
    legendFontColor: "#7F7F7F",
    legendFontSize: 12
  },
  {
    name: "New York",
    population: 8538000,
    color: "#ffffff",
    legendFontColor: "#7F7F7F",
    legendFontSize: 12
  },
  {
    name: "Moscow",
    population: 11920000,
    color: "rgb(0, 0, 255)",
    legendFontColor: "#7F7F7F",
    legendFontSize: 12
  }
];

const stackedBarData = {
  labels: ["Test1", "Test2", "Test3"],
  legend: ["L1", "L2", "L3"],
  data: [[60, 20, 60], [30, 30, 60], [40, 45, 50]],
  barColors: ["#919ec9", "#6074b4", "#384fa3"]
};

class ChartKitCharts extends React.Component {
  static navigationOptions = {
    title: 'Bar Chart'
  };

  public render() {
    return (
      <ScrollView>
        <View style={styles.title}><Text style={styles.text}>Line Chart</Text></View>
        <LineChart
          style={styles.graphStyle}
          data={chartData}
          width={width}
          height={260}
          yAxisLabel={'$'}
          chartConfig={chartConfig}
          fromZero={true}
          bezier
          decorator={() => 
            (<View><Text style={styles.extraInfo}>average line</Text></View>)
          }
        />
        <View style={styles.title}><Text style={styles.text}>Bar Chart</Text></View>
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
        <View style={styles.title}><Text style={styles.text}>Progress Chart</Text></View>
        <ProgressChart
          // @ts-ignore
          style={styles.graphStyle}
          data={progressChartData}
          width={width}
          height={260}
          chartConfig={chartConfig}
          hideLegend={false}
        />
        <View style={styles.title}><Text style={styles.text}>Pie Chart</Text></View>
        <PieChart
          // @ts-ignore
          style={styles.graphStyle}
          data={pieChartData}
          width={width}
          height={260}
          chartConfig={chartConfig}
          accessor="population"
          backgroundColor="#022173"
          paddingLeft={"15"}
          absolute
        />
        <View style={styles.title}><Text style={styles.text}>Stacked Bar Chart</Text></View>
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
    marginHorizontal: 10
  },
  title: {
    height: 44,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 20
  },
  extraInfo: {
    position: "relative",
    top: 140,
    left: 10,
    color: "red"
  }
});

export default ChartKitCharts;
