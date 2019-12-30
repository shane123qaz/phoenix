import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { BarChart, LineChart, ProgressChart } from "react-native-chart-kit";
import { SIZE } from "../../src/config/size"
import { blue, lightGrey } from "../../src/config/color"

const width = SIZE.MAX_WIDTH - 20;
const chartConfig = {
  backgroundColor: '#022173',
  backgroundGradientFrom: '#022173',
  backgroundGradientTo: '#1b3fa0',
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  strokeWidth: 10,
  barPercentage: 0.5,
  barRadius: 20,
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
          bezier
        />
        <View style={styles.title}><Text style={styles.text}>Bar Chart</Text></View>
        <BarChart
          style={styles.graphStyle}
          data={chartData}
          width={width}
          height={260}
          yAxisLabel={'$'}
          chartConfig={chartConfig}
          verticalLabelRotation={20}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  graphStyle: {
    marginVertical: 8,
    borderRadius: 16,
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

export default ChartKitCharts;
