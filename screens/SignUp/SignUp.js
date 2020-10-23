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
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import auth from '@react-native-firebase/auth';
import {useNavigation} from 'react-navigation-hooks';

export default function (props) {
  const navigation = useNavigation();

  return <SignUp {...props} navigation={navigation} />;
}
const {width, height} = Dimensions.get('screen');
class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      errorMessage: '',
    };
  }

  handleSignUp = () => {
    const {navigation} = this.props;
    const {name, email, password} = this.state;
    if (
      (name == '' || null) &&
      (email == '' || null) &&
      (password == '' || null)
    ) {
      this.setState({errorMessage: 'Please type your email and password.'});
    } else {
      auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(() =>
          navigation.navigate('TabApp', {
            name: this.state.name,
            id: auth().currentUser.uid,
          }),
        )
        .catch((error) => {
          if (error.code === 'auth/email-already-in-use') {
            this.setState({
              errorMessage: 'That email address is already in use!',
            });
          } else if (error.code === 'auth/invalid-email') {
            this.setState({errorMessage: 'That email address is invalid!'});
          } else if (error.code == 'auth/weak-password') {
            this.setState({
              errorMessage:
                'Weak Password. Password should be at least 6 characters.',
            });
          } else {
            this.setState({errorMessage: error});
          }
        });
    }
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.errorMessage}>{this.state.errorMessage}</Text>
        <TextInput
          placeholder="Name"
          style={styles.input}
          placeholderTextColor="rgb(174, 169, 184)"
          onChangeText={(name) => {
            this.setState({name});
          }}
          value={this.state.name}
        />
        <TextInput
          placeholder="Email"
          required
          style={styles.input}
          placeholderTextColor="rgb(174, 169, 184)"
          onChangeText={(email) => {
            this.setState({email});
          }}
          value={this.state.email}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          style={[styles.input, {paddingRight: width / 2.35}]}
          placeholderTextColor="rgb(174, 169, 184)"
          required
          onChangeText={(password) => {
            this.setState({password});
          }}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => this.handleSignUp()}>
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
            <Text style={styles.buttonText}>Sign Up</Text>
          </LinearGradient>
        </TouchableOpacity>

        <View style={styles.bottom}>
          <Text style={styles.text}>Already have an account ?</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.attribution}>MADE BY KHAMDAMJON GOZIEV</Text>
      </KeyboardAvoidingView>
    );
  }
}
