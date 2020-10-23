import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createAppContainer} from 'react-navigation';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from '../screens/Home/Home';
import Shop from '../screens/Shop/Shop';
import Camera from '../screens/Camera/Camera';
import Chats from '../screens/Chats/Chats';
import Profile from '../screens/Profile/Profile';
import SignUp from '../screens/SignUp/SignUp';
import Login from '../screens/Login/Login';
import Onboarding from '../screens/Onboarding/Onboarding';
import Forgot from '../screens/Forgot/Forgot';
import Groups from '../screens/Chats/Groups';

const Tabs = createBottomTabNavigator();

const TabApp = () => (
  <NavigationContainer>
    <Tabs.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            (iconName = focused ? 'home' : 'home-outline'), (size = 28);
          } else if (route.name === 'Shop') {
            iconName = focused ? 'cart' : 'cart-outline';
            size = 32;
          } else if (route.name === 'Camera') {
            iconName = focused ? 'md-camera' : 'md-camera-outline';
            size = 36;
          } else if (route.name === 'Chats') {
            iconName = focused
              ? 'md-chatbox-ellipses'
              : 'md-chatbox-ellipses-outline';
            size = 30;
          } else if (route.name === 'Profile') {
            iconName = focused ? 'md-person' : 'md-person-outline';
            size = 30;
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'rgb(238, 251, 0)',
        inactiveTintColor: 'rgb(86, 86, 86)',
        showLabel: false,
        style: {
          backgroundColor: 'rgb(40, 33, 52)',
          height: 60,
        },
        keyboardHidesTabBar: true,
      }}>
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="Shop" component={Shop} />
      <Tabs.Screen name="Camera" component={Camera} />
      <Tabs.Screen name="Chats" component={Chats} />
      <Tabs.Screen name="Profile" component={Profile} />
    </Tabs.Navigator>
  </NavigationContainer>
);

const App = createStackNavigator(
  {
    Onboarding: {
      screen: Onboarding,
    },
    SignUp: {
      screen: SignUp,
    },
    Login: {
      screen: Login,
    },
    Forgot: {
      screen: Forgot,
    },
    Groups: {
      screen: Groups,
    },
    TabApp: {
      screen: TabApp,
    },
  },
  {
    initialRouteName: 'SignUp',
    headerMode: 'none',
  },
);

export default createAppContainer(App);
