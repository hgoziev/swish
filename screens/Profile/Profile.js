import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import auth from '@react-native-firebase/auth';
import {useNavigation} from 'react-navigation-hooks';

const {width, height} = Dimensions.get('screen');
export default function (props) {
  const navigation = useNavigation();

  return <Profile {...props} navigation={navigation} />;
}

class Profile extends Component {
  state = {
    Index: 0,
    currentUser: '',
  };

  UNSAFE_componentWillMount() {
    const {currentUser} = auth();
    this.setState({currentUser: currentUser});
  }

  tabBarIconChange = (index) => {
    this.setState({
      Index: index,
    });
  };

  renderNameOrEmail() {
    const {navigation} = this.props;
    const {name, id} = navigation.state.params;
    if (this.state.currentUser && id) {
      return name;
    } else {
      const userEmail = this.state.currentUser.email;
      const splitted = userEmail.split('@', 1);
      return splitted;
    }
  }
  renderBasedOnIcon = () => {
    if (this.state.Index == 0) {
      return (
        <View style={styles.body}>
          <ScrollView
            vertical
            showsVerticalScrollIndicato={false}
            style={styles.scroll}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                flex: 1,
              }}>
              <Image
                source={require('../../assets/Images/21.jpg')}
                style={styles.postedImage}
              />
              <Image
                source={require('../../assets/Images/16.jpg')}
                style={styles.postedImage}
              />
              <Image
                source={require('../../assets/Images/17.jpg')}
                style={styles.postedImage}
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                marginVertical: 15,
                flex: 2,
              }}>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  marginLeft: 5,
                }}>
                <Image
                  source={require('../../assets/Images/22.jpg')}
                  style={styles.postedImage}
                />
                <Image
                  source={require('../../assets/Images/8.jpg')}
                  style={[styles.postedImage, {marginTop: 15}]}
                />
              </View>
              <Image
                source={require('../../assets/Images/20.jpg')}
                style={styles.highlightedImage}
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                flex: 1,
                marginBottom: 80,
              }}>
              <Image
                source={require('../../assets/Images/23.jpg')}
                style={styles.postedImage}
              />
              <Image
                source={require('../../assets/Images/19.jpg')}
                style={styles.postedImage}
              />
              <Image
                source={require('../../assets/Images/21.jpg')}
                style={styles.postedImage}
              />
            </View>
          </ScrollView>
        </View>
      );
    } else if (this.state.Index === 1) {
      return (
        <View style={styles.shopBody}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.shopRowTop}>
              <TouchableOpacity style={{flexDirection: 'row', marginRight: 10}}>
                <Image
                  source={require('../../assets/Images/shop/1.jpg')}
                  style={styles.shopImages}
                />
                <Material
                  name="shopping"
                  size={22}
                  color="rgb(216, 152, 88)"
                  style={{marginLeft: -30, marginTop: 7}}
                />
              </TouchableOpacity>
              <TouchableOpacity style={{flexDirection: 'row', marginRight: 10}}>
                <Image
                  source={require('../../assets/Images/shop/2.jpg')}
                  style={styles.shopImages}
                />
                <Material
                  name="shopping"
                  size={22}
                  color="rgb(216, 152, 88)"
                  style={{marginLeft: -30, marginTop: 7}}
                />
              </TouchableOpacity>
              <TouchableOpacity style={{flexDirection: 'row', marginRight: 10}}>
                <Image
                  source={require('../../assets/Images/shop/3.jpg')}
                  style={styles.shopImages}
                />
                <Material
                  name="shopping"
                  size={22}
                  color="rgb(216, 152, 88)"
                  style={{marginLeft: -30, marginTop: 7}}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.shopRow}>
              <TouchableOpacity style={{flexDirection: 'row', marginRight: 10}}>
                <Image
                  source={require('../../assets/Images/shop/4.jpg')}
                  style={styles.shopImages}
                />
                <Material
                  name="shopping"
                  size={22}
                  color="rgb(216, 152, 88)"
                  style={{marginLeft: -30, marginTop: 7}}
                />
              </TouchableOpacity>
              <TouchableOpacity style={{flexDirection: 'row', marginRight: 10}}>
                <Image
                  source={require('../../assets/Images/shop/5.jpg')}
                  style={styles.shopImages}
                />
                <Material
                  name="shopping"
                  size={22}
                  color="rgb(216, 152, 88)"
                  style={{marginLeft: -30, marginTop: 7}}
                />
              </TouchableOpacity>
              <TouchableOpacity style={{flexDirection: 'row', marginRight: 10}}>
                <Image
                  source={require('../../assets/Images/shop/6.jpg')}
                  style={styles.shopImages}
                />
                <Material
                  name="shopping"
                  size={22}
                  color="rgb(216, 152, 88)"
                  style={{marginLeft: -30, marginTop: 7}}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.shopRow}>
              <TouchableOpacity style={{flexDirection: 'row', marginRight: 10}}>
                <Image
                  source={require('../../assets/Images/shop/7.jpg')}
                  style={styles.shopImages}
                />
                <Material
                  name="shopping"
                  size={22}
                  color="rgb(216, 152, 88)"
                  style={{marginLeft: -30, marginTop: 7}}
                />
              </TouchableOpacity>
              <TouchableOpacity style={{flexDirection: 'row', marginRight: 10}}>
                <Image
                  source={require('../../assets/Images/shop/8.jpg')}
                  style={styles.shopImages}
                />
                <Material
                  name="shopping"
                  size={22}
                  color="rgb(216, 152, 88)"
                  style={{marginLeft: -30, marginTop: 7}}
                />
              </TouchableOpacity>
              <TouchableOpacity style={{flexDirection: 'row', marginRight: 10}}>
                <Image
                  source={require('../../assets/Images/shop/9.jpg')}
                  style={styles.shopImages}
                />
                <Material
                  name="shopping"
                  size={22}
                  color="rgb(216, 152, 88)"
                  style={{marginLeft: -30, marginTop: 7}}
                />
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      );
    } else {
      return (
        <View style={styles.bookmarkContainer}>
          <Image
            style={{width: width / 3, height: width / 3}}
            source={require('../../assets/Icons/box2.png')}
          />
          <Text style={{fontSize: 18, marginTop: 10}}>
            You have not saved anything yet.
          </Text>
        </View>
      );
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.topheader}>
            <Image
              source={require('../../assets/Icons/avatar.jpg')}
              style={styles.profileImage}
            />
            <View
              style={{
                marginHorizontal: 25,
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
              }}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.name}>{this.renderNameOrEmail()}</Text>
              </View>

              <Text style={styles.location}>San Fransisco</Text>
              <Text style={styles.bio}>
                Software Engineer. Football player.
              </Text>
            </View>
          </View>
          <View style={styles.bottomHeader}>
            <View style={styles.followingInfo}>
              <View>
                <Text style={styles.numbers}>15</Text>
                <Text style={styles.followingText}>Posts</Text>
              </View>
              <View>
                <Text style={[styles.numbers, {paddingLeft: 5}]}>1.1M</Text>
                <Text style={styles.followingText}>Followers</Text>
              </View>
              <View>
                <Text style={[styles.numbers, {paddingLeft: 5}]}>120</Text>
                <Text style={styles.followingText}>Following</Text>
              </View>
            </View>
            <View style={styles.Tabs}>
              <TouchableOpacity
                onPress={() => {
                  this.tabBarIconChange(0);
                }}
                active={this.state.Index == 0}>
                <Ionicon
                  name="images"
                  size={26}
                  style={[
                    this.state.Index == 0
                      ? {color: 'yellow'}
                      : {color: 'silver'},
                  ]}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.tabBarIconChange(1);
                }}
                active={this.state.Index == 1}>
                <Material
                  name="shopping"
                  size={26}
                  style={[
                    this.state.Index == 1
                      ? {color: 'yellow'}
                      : {color: 'silver'},
                  ]}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.tabBarIconChange(2);
                }}
                active={this.state.Index == 2}>
                <Ionicon
                  name="bookmark"
                  size={26}
                  style={[
                    this.state.Index == 2
                      ? {color: 'yellow'}
                      : {color: 'silver'},
                  ]}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {this.renderBasedOnIcon()}
      </View>
    );
  }
}
