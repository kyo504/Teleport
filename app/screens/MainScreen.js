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
  }

  navigateTo() {
    this.props.navigation.navigate('Request');
  }

  renderBox(item) {
    return (
      <TouchableOpacity key={item.key} onPress={() => this.navigateTo()}>
        <ImageBackground
          style={{
            width: deviceWidth / 2,
            height: 200,
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
          source={{ uri: item.url }}
        >
          <Text style={{ marginBottom: 10 }}>
            {item.title}
          </Text>
        </ImageBackground>
      </TouchableOpacity>
    );
  }

  render() {
    const list = [
      { key: '@1', title: '블루스퀘어 삼성점', url: 'https://unsplash.it/200/300?random' },
      { key: '@2', title: 'LG 아트 센터', url: 'https://unsplash.it/200/300?random' },
      { key: '@3', title: '세종 문화 회관', url: 'https://unsplash.it/200/300?random' },
      { key: '@4', title: '예술의 전당', url: 'https://unsplash.it/200/300?random' },
      { key: '@5', title: '테스트1', url: 'https://unsplash.it/200/300?random' },
      { key: '@6', title: '테스트2', url: 'https://unsplash.it/200/300?random' },
      { key: '@7', title: '테스트3', url: 'https://unsplash.it/200/300?random' },
      { key: '@8', title: '테스트4', url: 'https://unsplash.it/200/300?random' },
    ];

    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={{
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        {list.map(item => {
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
