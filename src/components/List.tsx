import React from 'react';
import { FlatList, Text, StyleSheet, View } from "react-native";

interface IItem {
  name: string;
  handlePress: () => void;
}

interface IList {
  data: IItem[];
}

export class List extends React.Component<IList> {
  private renderItem = ({item, index} : {item: IItem, index: number}) => {
    return (
      <View style={styles.container} key={index}>
        <Text style={styles.content} onPress={item.handlePress}>
          * {item.name}
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
