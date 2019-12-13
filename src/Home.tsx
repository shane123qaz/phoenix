import React from "react";
import { View, Text, StyleSheet } from "react-native";

class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Home Page</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    color: "#000",
    fontSize: 20,
  }
});

export default Home;
