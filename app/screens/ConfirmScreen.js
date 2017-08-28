/*
 * @flow
 */
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { List, ListItem, Button, Icon } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';

class ConfirmScreen extends React.Component {
  onReset() {
    const resetAction = NavigationActions.reset({
      index: 0,
      key: null,
      actions: [NavigationActions.navigate({ routeName: 'Main' })],
    });
    this.props.navigation.dispatch(resetAction);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, justifyContent: 'space-between' }}>
          <List containerStyle={{ marginTop: 0 }}>
            <ListItem
              title={`블루스퀘어 삼성전자홀`}
              leftIcon={{ name: 'directions-car' }}
              rightIcon={{ name: 'search' }}
            />
            <ListItem
              title={`${'이태원로 25'}`}
              leftIcon={{ name: 'pin-drop' }}
              rightIcon={{ name: 'search' }}
            />
          </List>

          <List containerStyle={{ marginTop: 10 }}>
            <ListItem title={'차량 정보        기아 K5 흰색'} onPress={() => alert('차량 정보')} />
            <ListItem title={'카드 정보        신한 2397'} />
            <ListItem title={'옵션                세차, 주유'} />
            <ListItem title={'가격(₩)           30,000'} />
          </List>

          <View style={{ borderColor: 'lightgray', borderWidth: 1 }}>
            <View style={{ backgroundColor: 'white', height: 36 }}>
              <Text style={{ fontSize: 20}}>주차 요원 정보</Text>
            </View>
            <View style={{ flexDirection: 'row', height: 130, backgroundColor: 'white' }}>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Text style={{ fontSize: 18 }}>Azizz</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Image
                  style={{
                    borderWidth: 1,
                    borderColor: 'gray',
                    width: 60,
                    height: 60,
                    borderRadius: 30,
                  }}
                  source={require('../../assets/driver.png')}
                />
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Icon raised name="call" color="blue" />
                <Icon raised name="textsms" color="blue" />
              </View>
            </View>
          </View>
          <Button
            containerViewStyle={{ marginRight: 0, marginLeft: 0 }}
            raised
            large
            title={'요청하기'}
            onPress={() => this.onReset()}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ConfirmScreen;
