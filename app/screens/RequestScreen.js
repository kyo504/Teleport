/*
 * @flow
 */
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableWithoutFeedback } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { List, ListItem, Button, Icon } from 'react-native-elements';
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

    this.state = {
      coordDest: params.coordinate,
      coordDropOff: params.coordinate,
    };
  }

  componentWillMount() {

    fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=37.566535,126.977969&language=ko`)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(e => alert(e))
    
  }

  navigateTo(routeName, coordinate) {
    const params = {
      coordinates: {
        ...this.state,
      },
      onUpdateCoordinates: this.onUpdateCoordinates,
    };
    console.log(params);
    this.props.navigation.navigate(routeName, params);
  }

  onUpdateCoordinates = (coords) => {
    this.setState({ ...coords });
  }

  onRequest() {
    this.progressRef.show()
    setTimeout(() => {
      this.progressRef.hide();
      this.props.navigation.navigate('Confirm');
    }, 3000); 
  }

  render() {
    const { coordDest, coordDropOff } = this.state;
    const { params } = this.props.navigation.state;
    const { title, coordinate } = params;

    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          scrollEnabled={false}
          zoomEnabled={false}
          pitchEnabled={false}
          rotateEnabled={false}
          region={coordDest}
          onPress={() => this.navigateTo('Map')}
        >
          <MapView.Marker title="목적지점" coordinate={coordDest} />
          <MapView.Marker title="하차지점" pinColor={'blue'} coordinate={coordDropOff} />
        </MapView>

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
              <ListItem title={'차량 정보        기아 K5 흰색'} onPress={() => alert('차량 정보')} />
              <ListItem title={'카드 정보        신한 2397'} />
              <ListItem title={'옵션                세차, 주유'} />
              <ListItem title={'가격(₩)           30,000'} />
            </List>
            <View />
          </View>
          <Button
            containerViewStyle={{ marginRight: 0, marginLeft: 0 }}
            raised
            large
            title={'요청하기'}
            onPress={() => this.onRequest()}
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
