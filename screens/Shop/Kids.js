import React, {Component} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';

import styles from './styles';

class Kids extends Component {
  render() {
    return (
      <View style={{flex: 4.2, paddingHorizontal: 10, marginVertical: 15}}>
        <View style={styles.mainImageContainer}>
          <TouchableOpacity>
            <Image
              source={require('../../assets/Images/shop/20.jpg')}
              style={styles.mainImages}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../assets/Images/shop/21.jpeg')}
              style={styles.mainImages}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../assets/Images/shop/23.jpeg')}
              style={styles.mainImages}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.mainHighlightedImage}>
          <TouchableOpacity>
            <Image
              source={require('../../assets/Images/shop/26.jpg')}
              style={styles.mainHighlighted}
            />
          </TouchableOpacity>
          <View>
            <TouchableOpacity>
              <Image
                source={require('../../assets/Images/shop/25.jpg')}
                style={styles.mainSideHighlighted}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.mainImageContainer}>
          <TouchableOpacity>
            <Image
              source={require('../../assets/Images/shop/22.jpg')}
              style={styles.mainImages}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../assets/Images/shop/24.jpeg')}
              style={styles.mainImages}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../assets/Images/shop/27.jpg')}
              style={styles.mainImages}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Kids;
