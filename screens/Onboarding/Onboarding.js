import React, {Component} from 'react';
import {View, Text, ImageBackground} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import styles from './styles';

import LinearGradient from 'react-native-linear-gradient';
import AppNavigator from '../../navigation/AppNavigator';

const slides = [
  {
    key: 'one',
    title: 'Swish',
    text: 'Life is more fun with friends, regardless of distance',
    image: require('../../assets/Images/11.jpg'),
    backgroundColor: 'rgb(43, 38, 60)',
  },
  {
    key: 'two',
    title: 'Photo Sharing',
    text: 'The fastest way to capture and share a moment.',
    image: require('../../assets/Images/10.jpg'),
    backgroundColor: 'white',
  },
  {
    key: 'three',
    title: 'Swish Chat',
    text: 'Fast, Simple and Secure Messaging.',
    image: require('../../assets/Images/6.jpg'),
    backgroundColor: 'white',
  },
];

export default class Onboarding extends Component {
  state = {
    showRealApp: false,
  };

  _renderItem = ({item}) => {
    return (
      <ImageBackground style={styles.slide} source={item.image}>
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
          <Text style={styles.title}>{item.title}</Text>
        </LinearGradient>
        <View
          style={{
            marginBottom: 150,
          }}>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </ImageBackground>
    );
  };

  explore = () => {
    return (
      <Text
        style={{
          fontSize: 22,
          color: 'yellow',
          fontWeight: '700',
          paddingBottom: 30,
        }}>
        Explore
      </Text>
    );
  };
  _onDone = () => {
    this.setState({showRealApp: true});
  };
  render() {
    if (this.state.showRealApp) {
      return <AppNavigator />;
    } else {
      return (
        <AppIntroSlider
          renderItem={this._renderItem}
          data={slides}
          onDone={() => this._onDone()}
          onSkip={() => this._onDone()}
          skipLabel={'Skip'}
          showSkipButton={true}
          dotStyle={{backgroundColor: 'white'}}
          activeDotStyle={{backgroundColor: 'yellow'}}
          doneLabel={this.explore()}
        />
      );
    }
  }
}
