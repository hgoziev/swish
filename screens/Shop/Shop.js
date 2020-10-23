import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import styles from './styles';
import Mens from './Mens';
import Womens from './Womens';
import Kids from './Kids';
import Brands from './Brands';

export default class Shop extends Component {
  state = {
    iconChange: false,
    activeIndex: 0,
  };
  IconName = () => {
    this.setState({iconChange: !this.state.iconChange});
  };

  getIndex = (index) => {
    this.setState({
      activeIndex: index,
    });
  };

  renderBasedOnIndex = () => {
    if (this.state.activeIndex == 0) {
      return <Mens />;
    } else if (this.state.activeIndex == 1) {
      return <Womens />;
    } else if (this.state.activeIndex == 2) {
      return <Kids />;
    } else {
      return <Brands />;
    }
  };
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="height">
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Home')}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={styles.linear}
              colors={[
                'rgb(250, 0, 0)',
                'rgb(248, 46, 0)',
                'rgb(245, 105, 0)',
                'rgb(242, 166, 0)',
                'rgb(240, 195, 0)',
                'rgb(240, 219, 0)',
                'rgb(235, 252, 0)',
              ]}>
              <Text style={styles.title}>Swish</Text>
            </LinearGradient>
          </TouchableOpacity>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              placeholder="Search"
              placeholderTextColor="rgb(117, 111, 130)"
              style={styles.search}
            />
            <Ionicon
              name="search-outline"
              size={22}
              style={{
                color: 'silver',
                marginLeft: wp('-5%'),
                paddingTop: 5,
              }}
            />
          </View>
          <TouchableOpacity onPress={() => this.IconName()}>
            <Ionicon
              name={
                this.state.iconChange
                  ? 'notifications-sharp'
                  : 'notifications-outline'
              }
              size={26}
              color={this.state.iconChange ? 'rgb(235, 248, 0)' : 'silver'}
            />
          </TouchableOpacity>
        </View>

        <View style={{flex: 6}}>
          <ScrollView style={{flex: 6}} showsVerticalScrollIndicator={false}>
            <ScrollView
              style={{
                flex: 1.8,
              }}
              contentContainerStyle={{
                paddingVertical: 15,
                marginBottom: 10,
              }}
              horizontal
              showsHorizontalScrollIndicator={false}>
              <View
                style={{
                  flex: 1,
                  marginLeft: 10,
                  marginRight: 5,
                }}>
                <TouchableOpacity
                  onPress={() => this.getIndex(0)}
                  active={this.state.activeIndex == 0}>
                  <Image
                    source={require('../../assets/Images/shop/david.jpg')}
                    style={styles.categoryImage}
                  />
                  <Text style={styles.categoryText}>Mens</Text>
                </TouchableOpacity>
              </View>

              <View style={{flex: 1, marginHorizontal: 5}}>
                <TouchableOpacity
                  onPress={() => this.getIndex(1)}
                  active={this.state.activeIndex == 1}>
                  <Image
                    source={require('../../assets/Images/shop/miranda2.jpg')}
                    style={styles.categoryImage}
                  />
                  <Text style={styles.categoryText}>Womens</Text>
                </TouchableOpacity>
              </View>

              <View style={{flex: 1, marginHorizontal: 5}}>
                <TouchableOpacity
                  onPress={() => this.getIndex(2)}
                  active={this.state.activeIndex == 2}>
                  <Image
                    source={require('../../assets/Icons/kiddo.jpeg')}
                    style={styles.categoryImage}
                  />
                  <Text style={styles.categoryText}>Kids</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                onPress={() => this.getIndex(3)}
                active={this.state.activeIndex == 3}>
                <View style={styles.categoryBrandContainer}>
                  <Text style={styles.categoryTextBrands}>Brands</Text>
                </View>
              </TouchableOpacity>
            </ScrollView>

            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={styles.linear}
              colors={[
                'rgb(250, 0, 0)',
                'rgb(248, 46, 0)',
                'rgb(245, 105, 0)',
                'rgb(242, 166, 0)',
                'rgb(240, 195, 0)',
                'rgb(240, 219, 0)',
                'rgb(235, 252, 0)',
              ]}></LinearGradient>

            {this.renderBasedOnIndex()}
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
