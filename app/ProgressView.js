/*
 * @flow
 */
import React, { PureComponent } from 'react';
import {
  View,
  StyleSheet,
  Modal,
  Dimensions,
  ActivityIndicator,
  TouchableWithoutFeedback,
} from 'react-native';

const { width: deviceWidth } = Dimensions.get('window');

type State = {
  visible: boolean,
};

class ProgressView extends PureComponent<DefaultProps, Props, State> {
  props: Props;
  state: State;

  constructor(props: Props) {
    super(props);

    this.state = { visible: false };
  }

  show() {
    this.setState({ visible: true });
  }

  hide() {
    this.setState({ visible: false });
  }

  render() {
    const { visible } = this.state;

    return (
      <Modal animationType={'none'} transparent visible={visible} onRequestClose={() => {}}>
        <TouchableWithoutFeedback onPress={() => this.setState({ visible: false })}>
          <View style={styles.container}>
            <ActivityIndicator animating size={'large'} color={'white'}/>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000B3',
  },
  progress: {
    margin: 10,
  },
});

export default ProgressView;
