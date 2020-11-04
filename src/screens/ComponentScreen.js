import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  const name = 'abel'
  return <View>
    <Text styles={styles.textStyle}> HI</Text >
    <Text>my name is {name} </Text></View>
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  }
})

export default ComponentsScreen;