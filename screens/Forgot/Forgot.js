import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Dimensions,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styles from './styles';
import Icon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import auth from '@react-native-firebase/auth';

export default class Forgot extends Component {
  state = {
    email: '',
    errorMessage: '',
    SendPressed: false,
    some: false,
  };

  forgotPassword = (Email) => {
    auth()
      .sendPasswordResetEmail(Email)
      .then(() => {
        alert('Please check your email...');
        this.setState({some: !this.state.some});
      })
      .catch((e) => {
        if (e) {
          this.setState({
            errorMessage: e.message,
          });
        }
      });
  };

  renderSome = () => {
    if (this.state.some == true) {
      return (
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.goBack();
          }}>
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
            <Text style={styles.buttonText}>Done</Text>
          </LinearGradient>
        </TouchableOpacity>
      );
    }
  };
  renderError() {
    if (this.state.errorMessage) {
      return (
        <Text style={{color: 'red', fontSize: 18, marginBottom: 20}}>
          {this.state.errorMessage}
        </Text>
      );
    }
  }

  renderSendButton() {
    if (this.state.errorMessage || this.state.SendPressed == false) {
      return (
        <View>
          <TextInput
            placeholder="Email"
            required
            style={styles.input}
            color={this.state.errorMessage ? 'red' : 'white'}
            placeholderTextColor="rgb(174, 169, 184)"
            onChangeText={(email) => this.setState({email})}
            value={this.state.email}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.forgotPassword(this.state.email),
                this.setState({SendPressed: !this.state.SendPressed});
            }}>
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
              <Text style={styles.buttonText}>Send</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      );
    }
  }
  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <Icon
            name="arrow-left-circle"
            size={38}
            style={{color: 'rgb(238, 255, 0)', marginBottom: hp('5%')}}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Forgot your password</Text>

        <Text style={{color: 'silver', fontSize: 18, marginBottom: 20}}>
          Please enter your email to recieve a link to reset your password.
        </Text>
        {this.renderError()}

        {this.renderSendButton()}
        {this.renderSome()}
      </KeyboardAvoidingView>
    );
  }
}
