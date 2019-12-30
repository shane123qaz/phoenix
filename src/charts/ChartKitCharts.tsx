import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { BarChart } from "react-native-chart-kit";
import { SIZE } from "../../src/config/size"
import { blue, lightGrey } from "../../src/config/color"

const chartConfig = {
backgroundColor: '#022173',
  backgroundGradientFrom: '#022173',
  backgroundGradientTo: '#1b3fa0',
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  strokeWidth: 4,
  barPercentage: 0.5
};

const barChartData = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43]
    }
  ]
};

class ChartKitCharts extends React.Component {
  static navigationOptions = {
    title: 'Bar Chart'
  };

  public render() {
  const width = SIZE.MAX_WIDTH - 20;
    return (
    <ScrollView>
      <View style={styles.title}><Text style={styles.text}>Bar Chart</Text></View>
      <BarChart
        style={styles.graphStyle}
        data={barChartData}
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
