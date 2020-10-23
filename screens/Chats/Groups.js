import React, {Component} from 'react';
import {
  KeyboardAvoidingView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Fire from '../../api/Fire';
import {GiftedChat, InputToolbar, Bubble} from 'react-native-gifted-chat';
import PropTypes from 'prop-types';
import {withNavigation} from 'react-navigation';
import Icon from 'react-native-vector-icons/Feather';
class Groups extends Component {
  state = {
    messages: [],
  };

  componentDidMount() {
    Fire.loadMessages((message) => {
      this.setState((previousState) => {
        return {
          messages: GiftedChat.append(previousState.messages, message),
        };
      });
    });
  }

  componentWillUnmount() {
    Fire.closeChat();
  }

  renderInputToolBar = (props) => {
    return (
      <InputToolbar
        {...props}
        containerStyle={{
          paddingVertical: 5,
        }}
      />
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Icon
              name="arrow-left-circle"
              size={36}
              style={{color: 'rgb(209, 149, 91)'}}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Friends</Text>
          <TouchableOpacity>
            <Image
              source={require('../../assets/Images/21.jpg')}
              style={styles.topImage}
            />
          </TouchableOpacity>
        </View>
        <GiftedChat
          style={{flex: 6}}
          messages={this.state.messages}
          onSend={(message) => {
            Fire.sendMessage(message);
          }}
          user={{
            _id: Fire.getUid(),
            name: this.props.name,
          }}
          isTyping={true}
          alwaysShowSend={true}
          renderInputToolbar={(props) => this.renderInputToolBar(props)}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: 'yellow',
  },
  topImage: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    borderWidth: 1,
    borderColor: 'rgb(209, 149, 91)',
  },
  container: {flex: 1, backgroundColor: 'rgb(45, 42, 63)'},
  header: {
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'rgb(39, 34, 52)',
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgb(209, 149, 91)',
  },
});

export default withNavigation(Groups);

Groups.propTypes = {
  name: PropTypes.string,
};
