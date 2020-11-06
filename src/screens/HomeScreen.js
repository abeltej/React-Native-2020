import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>;
      <Button
        onPress={() => navigation.navigate('Component')}
        title='Go to components demo'
      />
      <Button
        title='Go to list'
        onPress={() => navigation.navigate('List')}
      />
      <Button
        title='Go to Image'
        onPress={() => navigation.navigate('Image')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
