/*
 * @flow
 */
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

class MainScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>MainScreen</Text>
        <Button
          title={'Go to next'}
          onPress={() => this.props.navigation.navigate('Map')}
        />
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

export default MainScreen;
