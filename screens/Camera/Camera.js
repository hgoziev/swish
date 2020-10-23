import React, {Component} from 'react';
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  Image,
  ImageBackground,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import ImagePicker from 'react-native-image-picker';
import styles from './styles';

export default class Camera extends Component {
  constructor() {
    super();
    this.state = {
      takingPic: false,
      path: null,
      front: RNCamera.Constants.Type.front,
      mirror: true,
      photo: null,
    };
  }

  takePicture = async () => {
    if (this.camera && !this.state.takingPic) {
      let options = {
        quality: 0.85,
        fixOrientation: true,
        forceUpOrientation: true,
      };
      this.setState({takingPic: true});

      try {
        const data = await this.camera.takePictureAsync(options);
        this.setState({path: data.uri});
      } catch (error) {
        Alert.alert(
          'Error',
          'Failed to take picture:' + (error.message || error),
        );
        return;
      } finally {
        this.setState({takingPic: false});
      }
    }
  };

  showCamera() {
    return (
      <View style={{flex: 1, backgroundColor: 'rgb(10, 10, 10)'}}>
        <RNCamera
          ref={(ref) => {
            this.camera = ref;
          }}
          captureAudio={false}
          playSoundOnCapture={true}
          style={styles.preview}
          type={
            this.state.mirror ? RNCamera.Constants.Type.back : this.state.front
          }
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
        />
        <View style={styles.bottomCameraIconContainer}>
          <TouchableOpacity onPress={() => this.showGallery()}>
            <Image
              source={require('../../assets/Icons/1.png')}
              style={styles.GalleryIcon}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={this.takePicture}
            style={styles.pictureButton}>
            <Icon name="circle-slice-8" size={70} color="white" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.changeCamera()}
            style={styles.pictureButton}>
            <Ionicon name="camera-reverse-outline" size={50} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  changeCamera() {
    this.setState({mirror: !this.state.mirror});
  }

  showGallery = () => {
    const options = {
      noData: true,
    };
    ImagePicker.launchImageLibrary(options, (response) => {
      console.log('response', response);
      if (response.uri) {
        this.setState({photo: response});
      }
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        this.state.photo = response.uri;
      }
    });
  };

  renderImage() {
    return (
      <ImageBackground
        source={{uri: this.state.path}}
        style={styles.ImageBackgroundOfRenderImage}>
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: heightPercentageToDP('5%'),
          }}>
          <TouchableOpacity
            onPress={() => this.setState({path: null})}
            style={styles.tickCrossTouchable}>
            <Image
              source={require('../../assets/Icons/cross.png')}
              style={styles.tickAndCrossForTakenImage}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.setState({path: null})}
            style={styles.tickCrossTouchable}>
            <Image
              source={require('../../assets/Icons/tick.png')}
              style={styles.tickAndCrossForTakenImage}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }

  render() {
    const {photo} = this.state;
    if (photo) {
      return (
        <SafeAreaView style={styles.container}>
          <ImageBackground
            source={{uri: this.state.photo.uri}}
            style={styles.ImageBackgroundOfFinalReturn}>
            <TouchableOpacity
              onPress={() => this.setState({photo: null})}
              style={styles.tickCrossTouchable}>
              <Image
                source={require('../../assets/Icons/cross.png')}
                style={styles.tickAndCrossForTakenImage}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.setState({photo: null})}
              style={styles.tickCrossTouchable}>
              <Image
                source={require('../../assets/Icons/tick.png')}
                style={styles.tickAndCrossForTakenImage}
              />
            </TouchableOpacity>
          </ImageBackground>
        </SafeAreaView>
      );
    } else {
      return (
        <SafeAreaView style={styles.container}>
          {this.state.path && photo === null
            ? this.renderImage()
            : this.showCamera()}
        </SafeAreaView>
      );
    }
  }
}
