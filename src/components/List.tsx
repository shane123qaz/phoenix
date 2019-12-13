import React from 'react';
import { FlatList, Text, StyleSheet, View } from "react-native";

interface IList {
  data: string[];
}

export class List extends React.Component<IList> {
  private renderItem = ({item, index}) => {
    return (
      <View style={styles.container} key={index}>
        <Text style={styles.content}>
          * {item}
        </Text>
      </View>
    );
  };

  public render() {
    const {data} = this.props;
    return (
      <FlatList
        data={data}
        renderItem={this.renderItem}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  content: {
    fontSize: 25,
  }
});
