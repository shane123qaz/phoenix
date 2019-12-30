import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
class ChartKitCharts extends React.Component {
  static navigationOptions = {
    title: 'Bar Chart'
  };

  public render() {
    return (
    <ScrollView>
      <View style={styles.title}><Text style={styles.text}>Bar Chart</Text></View>
    </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
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
