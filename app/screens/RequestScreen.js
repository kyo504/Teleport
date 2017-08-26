/*
 * @flow
 */
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableWithoutFeedback } from 'react-native';
import MapView from 'react-native-maps';
import { List, ListItem, Button } from 'react-native-elements';
import ProgressView from '../ProgressView';

const { width: deviceWidth, height: deviceHeight } = Dimensions.get('window');

const ASPECT_RATIO = deviceWidth / deviceHeight;
const LATITUDE = 37.400373;
const LONGITUDE = 127.104913;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class RequestScreen extends Component {
  static navigationOptions = () => ({
    // title: 'SuperSafe',
  });

  constructor(props) {
    super(props);

    const { params } = props.navigation.state;

    console.log(...params.region);

    this.state = {
      region: params.region,
    };
  }

  navigateTo(routeName) {
    this.props.navigation.navigate(routeName);
  }

  render() {
    const { params } = this.props.navigation.state;
    const {
      title
    } = params;

    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={() => this.navigateTo('Map')}>
          <MapView
            provider={this.props.provider}
            style={styles.map}
            scrollEnabled={false}
            zoomEnabled={false}
            pitchEnabled={false}
            rotateEnabled={false}
            initialRegion={this.state.region}
          >
            <MapView.Marker
              title="This is a title"
              description="This is a description"
              coordinate={this.state.region}
            />
          </MapView>
        </TouchableWithoutFeedback>

        <View style={{ flex: 1, justifyContent: 'space-between' }}>
          <View>
            <List containerStyle={{ marginTop: 0 }}>
              <ListItem
                title={`${title}`}
                leftIcon={{ name: 'directions-car' }}
                rightIcon={{ name: 'search' }}
                onPress={() => alert('차량 정보')}
              />
              <ListItem
                title={`${'이태원로 25'}`}
                leftIcon={{ name: 'pin-drop' }}
                rightIcon={{ name: 'search' }}
                onPress={() => alert('차량 정보')}
              />
            </List>

            <List containerStyle={{ marginTop: 10 }}>
              <ListItem title={'차량 정보'} onPress={() => alert('차량 정보')} />
              <ListItem title={'카드 정보'} />
              <ListItem title={'옵션'} />
            </List>
            <View />
          </View>
          <Button
            containerViewStyle={{ marginRight: 0, marginLeft: 0 }}
            raised
            large
            title={'요청하기'}
            onPress={() => this.progressRef.show()}
          />
        </View>

        <ProgressView ref={c => (this.progressRef = c)} />
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
    height: 180,
  },
});

export default RequestScreen;
