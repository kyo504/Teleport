/*
 * @flow
 */
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import MapView from 'react-native-maps';
import { List, ListItem, Button } from 'react-native-elements';

const { width: deviceWidth, height: deviceHeight } = Dimensions.get('window');

const ASPECT_RATIO = deviceWidth / deviceHeight;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const mock = [
  {
    key: '@1',
    title: '블루스퀘어 삼성점',
    source: require('../../assets/image-artcenter.jpg'),
    region: {
      latitude: 37.400339,
      longitude: 127.104967,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    },
  },
  {
    key: '@2',
    title: 'LG 아트 센터',
    source: require('../../assets/image-blursquare.jpg'),
    region: {
      latitude: 37.502515,
      longitude: 127.037543,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    },
  },
  {
    key: '@3',
    title: '세종 문화 회관',
    source: require('../../assets/image-lgartcenter.jpg'),
    region: {
      latitude: 37.572806,
      longitude: 126.975589,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    },
  },
  {
    key: '@4',
    title: '예술의 전당',
    source: require('../../assets/image-sejong.jpg'),
    region: {
      latitude: 37.478988,
      longitude: 127.011835,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    },
  },
  {
    key: '@5',
    title: '블루스퀘어 삼성점',
    source: require('../../assets/image-artcenter.jpg'),
    region: {
      latitude: 37.400339,
      longitude: 127.104967,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    },
  },
  {
    key: '@6',
    title: 'LG 아트 센터',
    source: require('../../assets/image-blursquare.jpg'),
    region: {
      latitude: 37.400339,
      longitude: 127.104967,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    },
  },
  {
    key: '@7',
    title: '세종 문화 회관',
    source: require('../../assets/image-lgartcenter.jpg'),
    region: {
      latitude: 37.400339,
      longitude: 127.104967,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    },
  },
  {
    key: '@8',
    title: '예술의 전당',
    source: require('../../assets/image-sejong.jpg'),
    region: {
      latitude: 37.400339,
      longitude: 127.104967,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    },
  },
];

class MainScreen extends Component {
  static navigationOptions = () => ({
    title: 'SuperSafe',
  });

  constructor(props) {
    super(props);
  }

  navigateTo(item) {
    this.props.navigation.navigate('Request', item);
  }

  renderBox(item) {
    return (
      <TouchableOpacity key={item.key} onPress={() => this.navigateTo(item)}>
        <ImageBackground
          style={{
            width: deviceWidth / 2,
            height: 200,
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
          source={item.source}
        >
          <Text style={{ marginBottom: 10 }}>
            {item.title}
          </Text>
        </ImageBackground>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={{
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        {mock.map(item => {
          return this.renderBox(item);
        })}
      </ScrollView>
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
