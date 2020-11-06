import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [{ name: 'Friend1', age: 21 }, { name: 'Friend2', age: 22 }, { name: 'Friend3', age: 25 }, { name: 'Friend4', age: 27 }];
  return (
    <FlatList
      // horizontal
      // showsHorizontalScrollIndicator={false}
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
        )
        // element === {item: {name: 'Friend1}, index: 0}
      }}
    />);
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50
  }
});

export default ListScreen;