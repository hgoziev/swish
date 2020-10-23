import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
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
import {useNavigation} from 'react-navigation-hooks';

export default function (props) {
  const navigation = useNavigation();

  return <Login {...props} navigation={navigation} />;
}
const {width, height} = Dimensions.get('screen');
class Login extends Component {
  constructor() {
    super();
    this.state = {email: '', password: '', errorMessage: ''};
  }

  handleLogin = () => {
    const {email, password} = this.state;
    if ((email == '' || null) && (password == '' || null)) {
      this.setState({errorMessage: 'Please type your email and password.'});
    } else {
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(() =>
          this.props.navigation.navigate('TabApp', {email: this.state.email}),
        )
        .catch((error) => {
          if (error.code === 'auth/email-already-in-use') {
            this.setState({
              errorMessage: 'That email address is already in use!',
            });
          } else if (error.code === 'auth/invalid-email') {
            this.setState({errorMessage: 'That email address is invalid!'});
          } else if (error.code == 'auth/user-not-found') {
            this.setState({errorMessage: 'No user found for this email.'});
          }
        });
    }
  };

  render() {
    const {navigation} = this.props;
    return (
      <KeyboardAvoidingView style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            name="arrow-left-circle"
            size={38}
            style={{color: 'rgb(238, 255, 0)', marginBottom: hp('5%')}}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.errorMessage}>{this.state.errorMessage}</Text>
        <TextInput
          placeholder="Email"
          required
          style={styles.input}
          placeholderTextColor="rgb(174, 169, 184)"
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          required
          style={[styles.input, {paddingRight: width / 2.35}]}
          placeholderTextColor="rgb(174, 169, 184)"
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
        />
        <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
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
            <Text style={styles.buttonText}>Login</Text>
          </LinearGradient>
        </TouchableOpacity>
        <View style={styles.bottom}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Forgot')}>
            <Text style={styles.text}>Forgot Password ?</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
