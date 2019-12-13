import React from "react";
import { View, StyleSheet} from "react-native";
import { Header } from "./components/Header";
import { blue, white } from "./config/color";
import { SIZE } from "./config/size";
import { List } from "./components/List";

const gameList = ["phoenix", "reboot"];

export class Home extends React.Component {
  public render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Header title="Game List"/>
        </View>
        <View style={styles.content}>
          <List data={gameList}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    height: SIZE.MAX_HEIGHT,
  },
  header: {
    height: "10%",
    backgroundColor: blue,
    borderWidth: 1,
    borderColor: white,
    borderRadius: 5,
    paddingLeft: 20,
  },
  content: {
    marginTop: 10,
    paddingLeft: 20,
  }
});

