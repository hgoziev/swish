import React, {Component} from 'react';
import {View, Text, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');
export default class Brands extends Component {
  render() {
    return (
      <View style={{flex: 3, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 22, marginTop: height / 4.5}}>
          Coming Soon ...
        </Text>
      </View>
    );
  }
}
