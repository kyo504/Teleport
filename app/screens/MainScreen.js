/*
 * @flow
 */
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import { List, ListItem, Button } from 'react-native-elements';

const { width: deviceWidth, height: deviceHeight } = Dimensions.get('window');

const ASPECT_RATIO = deviceWidth / deviceHeight;
const LATITUDE = 37.400373;
const LONGITUDE = 127.104913;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class MainScreen extends Component {
  static navigationOptions = () => ({
    title: 'SuperSafe',
  });

  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          provider={this.props.provider}
          style={styles.map}
          scrollEnabled={true}
          zoomEnabled={true}
          pitchEnabled={true}
          rotateEnabled={false}
          initialRegion={this.state.region}
        >
          <MapView.Marker
            title="This is a title"
            description="This is a description"
            coordinate={this.state.region}
          />
        </MapView>

        <List containerStyle={{ marginTop: 0 }}>
          <ListItem title={'차량 정보'} />
          <ListItem title={'카드 정보'} />
        </List>

        <Button
          buttonStyle={{ marginRight: 0, marginLeft: 0 }}
          disabled
          raised
          large
          title={'요청하기'}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: deviceWidth,
    height: 250,
  },
});

export default MainScreen;
