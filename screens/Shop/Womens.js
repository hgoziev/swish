import React, {Component} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';

import styles from './styles';

class Womens extends Component {
  render() {
    return (
      <View style={{flex: 4.2, paddingHorizontal: 10, marginVertical: 15}}>
        <View style={styles.mainImageContainer}>
          <TouchableOpacity>
            <Image
              source={require('../../assets/Images/shop/14.jpeg')}
              style={styles.mainImages}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../assets/Images/shop/16.jpeg')}
              style={styles.mainImages}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../assets/Images/shop/18.jpg')}
              style={styles.mainImages}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.mainHighlightedImage}>
          <View>
            <TouchableOpacity>
              <Image
                source={require('../../assets/Images/shop/19.jpg')}
                style={styles.mainSideHighlighted}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Image
              source={require('../../assets/Images/shop/15.jpeg')}
              style={styles.mainHighlighted}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.mainImageContainer}>
          <TouchableOpacity>
            <Image
              source={require('../../assets/Images/shop/4.jpg')}
              style={styles.mainImages}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../assets/Images/shop/17.jpg')}
              style={styles.mainImages}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../assets/Images/shop/6.jpg')}
              style={styles.mainImages}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Womens;
