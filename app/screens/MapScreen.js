import React from 'react';
import { StyleSheet, View, Text, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { NavigationActions } from 'react-navigation';

const { width, height } = Dimensions.get('window');

class MapScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { state } = navigation;
    const { renderHeaderRight } = state.params;
    return {
      title: '하차지점',
      headerRight: renderHeaderRight && renderHeaderRight(),
    };
  };

  constructor(props) {
    super(props);

    const { coordinates } = props.navigation.state.params;
    this.state = {
      newCoord: coordinates.coordDropOff,
    };
  }

  componentWillMount() {
    this.props.navigation.setParams({
      renderHeaderRight: this.renderHeaderRight,
    });
  }

  renderHeaderRight = () => {
    return (
      <TouchableOpacity style={{ paddingHorizontal: 15 }} onPress={() => this.navigateBack()}>
        <Text>설정</Text>
      </TouchableOpacity>
    );
  };

  navigateBack() {
    const { navigation } = this.props;
    navigation.goBack(null);
    navigation.state.params.onUpdateCoordinates({
      coordDropOff: this.state.newCoord,
    });
  }

  render() {
    const { params } = this.props.navigation.state;
    const { coordDest } = params.coordinates;
    const { newCoord } = this.state;

    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          scrollEnabled={true}
          zoomEnabled={true}
          pitchEnabled={true}
          rotateEnabled={true}
          region={coordDest}
          showsMyLocationButton
        >
          <MapView.Marker title="목적지점" coordinate={coordDest} />
          <MapView.Marker
            title="하차지점"
            pinColor={'blue'}
            draggable
            coordinate={newCoord}
            onDragEnd={e => this.setState({ newCoord: e.nativeEvent.coordinate })}
          />
        </MapView>
      </View>
    );
  }
}

MapScreen.propTypes = {
  provider: MapView.ProviderPropType,
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  scrollview: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  map: {
    width: width,
    height: height - 64,
  },
});

export default MapScreen;
