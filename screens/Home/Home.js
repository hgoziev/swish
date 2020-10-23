import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Dimensions,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Ant from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import auth from '@react-native-firebase/auth';
import {useNavigation} from 'react-navigation-hooks';
import Share from 'react-native-share';

export default function (props) {
  const navigation = useNavigation();
  return <Home {...props} navigation={navigation} />;
}
const {width, height} = Dimensions.get('screen');
class Home extends Component {
  state = {
    iconChange: false,
    commentIcon: false,
    liked: false,
    key: '',
  };

  signOutUser = () => {
    const {navigation} = this.props;
    auth()
      .signOut()
      .then(function () {
        alert('Logged out');
      })
      .catch(function (error) {
        if (error) {
          return null;
        }
      });

    navigation.navigate('Login');
  };

  render() {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        keyboardVerticalOffset={400}>
        <View style={styles.topheader}>
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
          <TouchableOpacity onPress={() => this.signOutUser()}>
            <Ant name="poweroff" size={30} color="silver" />
          </TouchableOpacity>
        </View>
        <View style={{flex: 5}}>
          <ScrollView style={{flex: 5}} vertical pagingEnabled={false}>
            <ScrollView
              horizontal
              style={styles.storyHeader}
              showsHorizontalScrollIndicator={false}>
              <View style={styles.storyImageContainer}>
                <TouchableOpacity>
                  <Image
                    style={styles.storyFaces}
                    source={require('../../assets/Images/faces/2.jpg')}
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.storyImageContainer}>
                <TouchableOpacity>
                  <Image
                    style={styles.storyFacesFocused}
                    source={require('../../assets/Images/faces/6.jpeg')}
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.storyImageContainer}>
                <TouchableOpacity>
                  <Image
                    style={styles.storyFacesFocused}
                    source={require('../../assets/Images/faces/3.jpg')}
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.storyImageContainer}>
                <TouchableOpacity>
                  <Image
                    style={styles.storyFaces}
                    source={require('../../assets/Images/faces/4.jpg')}
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.storyImageContainer}>
                <TouchableOpacity>
                  <Image
                    style={styles.storyFaces}
                    source={require('../../assets/Images/faces/1.jpg')}
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.storyImageContainer}>
                <TouchableOpacity>
                  <Image
                    style={styles.storyFacesFocused}
                    source={require('../../assets/Images/faces/5.jpg')}
                  />
                </TouchableOpacity>
              </View>
            </ScrollView>

            <View style={styles.borderLine} />
            <View style={styles.scroll}>
              <View>
                <View style={styles.posterImageContainer}>
                  <Image
                    style={styles.posterImage}
                    source={require('../../assets/Images/faces/1.jpg')}
                  />
                  <View style={styles.feedName}>
                    <Text style={styles.feedNameText}>Alexa Ray</Text>
                    <Text style={{color: 'silver'}}>California</Text>
                  </View>
                  <View>
                    <TouchableOpacity
                      onPress={() => this.setState({key: 'one'})}>
                      <LinearGradient
                        start={{x: 0, y: 0}}
                        end={{x: 1, y: 0}}
                        style={styles.linearFollow}
                        colors={[
                          'rgb(250, 0, 0)',
                          'rgb(248, 46, 0)',
                          'rgb(245, 105, 0)',
                          'rgb(242, 166, 0)',
                          'rgb(240, 195, 0)',
                          'rgb(240, 219, 0)',
                          'rgb(235, 252, 0)',
                        ]}>
                        <Text style={{fontSize: 16}}>
                          {this.state.key == 'one' ? 'Following' : 'Follow'}
                        </Text>
                      </LinearGradient>
                    </TouchableOpacity>
                  </View>
                </View>
                <View>
                  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <TouchableOpacity style={{paddingHorizontal: 10}}>
                      <Image
                        style={styles.postedImage}
                        source={require('../../assets/Images/4.jpg')}
                      />
                    </TouchableOpacity>
                  </ScrollView>
                  <View style={styles.feedIcons}>
                    <TouchableOpacity
                      onPress={() =>
                        this.setState({commentIcon: !this.state.commentIcon})
                      }>
                      <Ionicon
                        name={
                          this.state.commentIcon
                            ? 'chatbubble-sharp'
                            : 'chatbubble-outline'
                        }
                        size={26}
                        color={
                          this.state.commentIcon
                            ? 'yellow'
                            : 'rgb(168, 167, 169)'
                        }
                      />
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={{marginLeft: 10}}
                      onPress={() => this.setState({liked: !this.state.liked})}>
                      <Ant
                        name={this.state.liked ? 'like1' : 'like2'}
                        size={26}
                        color={
                          this.state.liked ? 'yellow' : 'rgb(168, 167, 169)'
                        }
                      />
                    </TouchableOpacity>
                  </View>

                  <Text style={{marginHorizontal: 15, color: 'white'}}>
                    {this.state.liked == true ? '91 likes' : '90 likes'}
                  </Text>
                  <View style={styles.addCommentContainer}>
                    <Text style={{color: 'white'}}>Alexa Ray</Text>
                    <Text style={{color: 'silver', paddingLeft: 10}}>
                      Awesome trip with a friend.
                    </Text>
                    <Text style={{color: 'rgb(87, 213, 254)', paddingLeft: 10}}>
                      #Friendship
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.borderLine} />
            <View style={styles.scroll}>
              <View>
                <View style={styles.posterImageContainer}>
                  <Image
                    style={styles.posterImage}
                    source={require('../../assets/Images/faces/5.jpg')}
                  />
                  <View style={styles.feedName}>
                    <Text style={styles.feedNameText}>John Doe</Text>
                    <Text style={{color: 'silver'}}>Seoul</Text>
                  </View>
                  <View>
                    <TouchableOpacity
                      onPress={() => this.setState({key: 'two'})}>
                      <LinearGradient
                        start={{x: 0, y: 0}}
                        end={{x: 1, y: 0}}
                        style={styles.linearFollow}
                        colors={[
                          'rgb(250, 0, 0)',
                          'rgb(248, 46, 0)',
                          'rgb(245, 105, 0)',
                          'rgb(242, 166, 0)',
                          'rgb(240, 195, 0)',
                          'rgb(240, 219, 0)',
                          'rgb(235, 252, 0)',
                        ]}>
                        <Text style={{fontSize: 16}}>
                          {this.state.key == 'two' && this.state.key
                            ? 'Following'
                            : 'Follow'}
                        </Text>
                      </LinearGradient>
                    </TouchableOpacity>
                  </View>
                </View>
                <View>
                  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <TouchableOpacity style={{paddingHorizontal: 10}}>
                      <Image
                        style={styles.postedImage}
                        source={require('../../assets/Images/s4.jpg')}
                      />
                    </TouchableOpacity>
                  </ScrollView>
                  <View style={styles.feedIcons}>
                    <TouchableOpacity
                      onPress={() =>
                        this.setState({commentIcon: !this.state.commentIcon})
                      }>
                      <Ionicon
                        name={
                          this.state.commentIcon
                            ? 'chatbubble-sharp'
                            : 'chatbubble-outline'
                        }
                        size={26}
                        color={
                          this.state.commentIcon
                            ? 'yellow'
                            : 'rgb(168, 167, 169)'
                        }
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{marginLeft: 10}}
                      onPress={() => this.setState({liked: !this.state.liked})}>
                      <Ant
                        name={this.state.liked ? 'like1' : 'like2'}
                        size={26}
                        color={
                          this.state.liked ? 'yellow' : 'rgb(168, 167, 169)'
                        }
                      />
                    </TouchableOpacity>
                  </View>

                  <Text style={{marginHorizontal: 15, color: 'white'}}>
                    52 likes
                  </Text>
                  <View style={styles.addCommentContainer}>
                    <Text style={{color: 'white'}}>John Doe</Text>
                    <Text style={{color: 'silver', paddingLeft: 10}}>
                      Another new prject ..
                    </Text>
                    <Text style={{color: 'rgb(87, 213, 254)', paddingLeft: 10}}>
                      #FeelingExcited
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.borderLine} />
            <View style={styles.scroll}>
              <View>
                <View style={styles.posterImageContainer}>
                  <Image
                    style={styles.posterImage}
                    source={require('../../assets/Images/faces/4.jpg')}
                  />
                  <View style={styles.feedName}>
                    <Text style={styles.feedNameText}>Sophia Ava</Text>
                    <Text style={{color: 'silver'}}>Tashkent</Text>
                  </View>
                  <View>
                    <TouchableOpacity
                      onPress={() => this.setState({key: 'three'})}>
                      <LinearGradient
                        start={{x: 0, y: 0}}
                        end={{x: 1, y: 0}}
                        style={styles.linearFollow}
                        colors={[
                          'rgb(250, 0, 0)',
                          'rgb(248, 46, 0)',
                          'rgb(245, 105, 0)',
                          'rgb(242, 166, 0)',
                          'rgb(240, 195, 0)',
                          'rgb(240, 219, 0)',
                          'rgb(235, 252, 0)',
                        ]}>
                        <Text style={{fontSize: 16}}>
                          {this.state.key == 'three' && this.state.key
                            ? 'Following'
                            : 'Follow'}
                        </Text>
                      </LinearGradient>
                    </TouchableOpacity>
                  </View>
                </View>
                <View>
                  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <TouchableOpacity style={{paddingHorizontal: 10}}>
                      <Image
                        style={styles.postedImage}
                        source={require('../../assets/Images/s3.jpg')}
                      />
                    </TouchableOpacity>
                  </ScrollView>
                  <View style={styles.feedIcons}>
                    <TouchableOpacity
                      onPress={() =>
                        this.setState({commentIcon: !this.state.commentIcon})
                      }>
                      <Ionicon
                        name={
                          this.state.commentIcon
                            ? 'chatbubble-sharp'
                            : 'chatbubble-outline'
                        }
                        size={26}
                        color={
                          this.state.commentIcon
                            ? 'yellow'
                            : 'rgb(168, 167, 169)'
                        }
                      />
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={{marginLeft: 10}}
                      onPress={() => this.setState({liked: !this.state.liked})}>
                      <Ant
                        name={this.state.liked ? 'like1' : 'like2'}
                        size={26}
                        color={
                          this.state.liked ? 'yellow' : 'rgb(168, 167, 169)'
                        }
                      />
                    </TouchableOpacity>
                  </View>

                  <Text style={{marginHorizontal: 15, color: 'white'}}>
                    102 likes
                  </Text>
                  <View style={styles.addCommentContainer}>
                    <Text style={{color: 'white'}}>Sophia Ava</Text>
                    <Text style={{color: 'silver', paddingLeft: 10}}>
                      Sunglasses, Fashion, classic car
                    </Text>
                    <Text style={{color: 'rgb(87, 213, 254)'}}>#Travel</Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.borderLine} />
            <View style={styles.scroll}>
              <View>
                <View style={styles.posterImageContainer}>
                  <Image
                    style={styles.posterImage}
                    source={require('../../assets/Images/faces/3.jpg')}
                  />
                  <View style={styles.feedName}>
                    <Text style={styles.feedNameText}>Max Scout</Text>
                    <Text style={{color: 'silver'}}>New York</Text>
                  </View>
                  <View>
                    <TouchableOpacity
                      onPress={() => this.setState({key: 'four'})}>
                      <LinearGradient
                        start={{x: 0, y: 0}}
                        end={{x: 1, y: 0}}
                        style={styles.linearFollow}
                        colors={[
                          'rgb(250, 0, 0)',
                          'rgb(248, 46, 0)',
                          'rgb(245, 105, 0)',
                          'rgb(242, 166, 0)',
                          'rgb(240, 195, 0)',
                          'rgb(240, 219, 0)',
                          'rgb(235, 252, 0)',
                        ]}>
                        <Text style={{fontSize: 16}}>
                          {this.state.key == 'four' && this.state.key
                            ? 'Following'
                            : 'Follow'}
                        </Text>
                      </LinearGradient>
                    </TouchableOpacity>
                  </View>
                </View>
                <View>
                  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <TouchableOpacity style={{paddingHorizontal: 10}}>
                      <Image
                        style={styles.postedImage}
                        source={require('../../assets/Images/s2.jpg')}
                      />
                    </TouchableOpacity>
                  </ScrollView>
                  <View style={styles.feedIcons}>
                    <TouchableOpacity
                      onPress={() =>
                        this.setState({commentIcon: !this.state.commentIcon})
                      }>
                      <Ionicon
                        name={
                          this.state.commentIcon
                            ? 'chatbubble-sharp'
                            : 'chatbubble-outline'
                        }
                        size={26}
                        color={
                          this.state.commentIcon
                            ? 'yellow'
                            : 'rgb(168, 167, 169)'
                        }
                      />
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={{marginLeft: 10}}
                      onPress={() => this.setState({liked: !this.state.liked})}>
                      <Ant
                        name={this.state.liked ? 'like1' : 'like2'}
                        size={26}
                        color={
                          this.state.liked ? 'yellow' : 'rgb(168, 167, 169)'
                        }
                      />
                    </TouchableOpacity>
                  </View>

                  <Text style={{marginHorizontal: 15, color: 'white'}}>
                    12 likes
                  </Text>
                  <View style={styles.addCommentContainer}>
                    <Text style={{color: 'white'}}>Max Scout</Text>
                    <Text style={{color: 'silver', paddingLeft: 10}}>
                      Perfect Shot
                    </Text>
                    <Text style={{color: 'rgb(87, 213, 254)', paddingLeft: 10}}>
                      {' '}
                      #Champion
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
