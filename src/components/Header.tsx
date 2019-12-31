import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { white } from "src/config/color";

interface IHeader {
  title: string;
}

export class Header extends React.Component<IHeader> {
  public render() {
    const {title} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    color: white,
  }
});
