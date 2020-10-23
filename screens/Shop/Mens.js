import React, {Component} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';

import styles from './styles';

export default class Mens extends Component {
  render() {
    return (
      <View style={{flex: 4.2, paddingHorizontal: 10, marginVertical: 15}}>
        <View style={styles.mainImageContainer}>
          <TouchableOpacity
            onPress={() => alert('Swish Shopping - Coming soon...')}>
            <Image
              source={require('../../assets/Images/shop/12.jpg')}
              style={styles.mainImages}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => alert('Swish Shopping - Coming soon...')}>
            <Image
              source={require('../../assets/Images/shop/2.jpg')}
              style={styles.mainImages}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => alert('Swish Shopping - Coming soon...')}>
            <Image
              source={require('../../assets/Images/shop/13.jpg')}
              style={styles.mainImages}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.mainHighlightedImage}>
          <TouchableOpacity
            onPress={() => alert('Swish Shopping - Coming soon...')}>
            <Image
              source={require('../../assets/Images/shop/11.jpg')}
              style={styles.mainHighlighted}
            />
          </TouchableOpacity>
          <View>
            <TouchableOpacity
              onPress={() => alert('Swish Shopping - Coming soon...')}>
              <Image
                source={require('../../assets/Images/shop/10.jpg')}
                style={styles.mainSideHighlighted}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.mainImageContainer}>
          <TouchableOpacity
            onPress={() => alert('Swish Shopping - Coming soon...')}>
            <Image
              source={require('../../assets/Images/shop/1.jpg')}
              style={styles.mainImages}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => alert('Swish Shopping - Coming soon...')}>
            <Image
              source={require('../../assets/Images/shop/2.jpg')}
              style={styles.mainImages}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => alert('Swish Shopping - Coming soon...')}>
            <Image
              source={require('../../assets/Images/shop/3.jpg')}
              style={styles.mainImages}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
