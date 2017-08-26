/*
 * @flow
 */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class DummyScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>MainScreen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DummyScreen;
