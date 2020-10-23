import React from 'react';
import {useNavigation} from 'react-navigation-hooks';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Ant from 'react-native-vector-icons/AntDesign';

export default function Chats() {
  const {navigate} = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={{color: 'rgb(211, 149, 87)', fontSize: 18}}>Edit</Text>
        </TouchableOpacity>

        <Text style={{fontSize: 28, fontWeight: '700', color: 'yellow'}}>
          Groups
        </Text>

        <TouchableOpacity>
          <Icon name="search" size={24} color="rgb(211, 149, 87)" />
        </TouchableOpacity>
      </View>

      <View style={styles.body}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          vertical
          contentContainerStyle={{flex: 5}}>
          <View style={styles.list}>
            <TouchableOpacity style={{alignItems: 'center'}}>
              <Image
                source={require('../../assets/Images/21.jpg')}
                style={styles.listImage}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{marginRight: 50}}
              onPress={() => navigate('Groups')}>
              <Text style={styles.listTitle}>Friends</Text>
              <Text style={styles.sampleText}>
                Random text for now till i make a function
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.list}>
            <TouchableOpacity style={{marginTop: 7}}>
              <Image
                source={require('../../assets/Images/coworkers.jpg')}
                style={styles.listImage}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{marginRight: 50}}
              onPress={() => alert('Under development')}>
              <Text style={styles.listTitle}>Coworkers</Text>
              <Text style={styles.sampleText}>
                After Lunch, we are gonna have a meeting with
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.list}>
            <TouchableOpacity style={{marginTop: 7}}>
              <Image
                source={require('../../assets/Images/24.jpg')}
                style={styles.listImage}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert('Under development')}>
              <Text style={styles.listTitle}>Family</Text>
              <Text style={styles.sampleText}>This is also a sample text</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.list}>
            <TouchableOpacity style={{marginTop: 7}}>
              <Image
                source={require('../../assets/Images/HomeSquad.jpg')}
                style={styles.listImage}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert('Under development')}>
              <Text style={styles.listTitle}>Group project</Text>
              <Text style={styles.sampleText}>This is also a sample text</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.list}>
            <TouchableOpacity style={{marginTop: 7}}>
              <Image
                source={require('../../assets/Images/HomeSquad.jpg')}
                style={styles.listImage}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert('Under development')}>
              <Text style={styles.listTitle}>Classmates</Text>
              <Text style={styles.sampleText}>This is also a sample text</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.list}>
            <TouchableOpacity style={{marginTop: 7}}>
              <Image
                source={require('../../assets/Images/HomeSquad.jpg')}
                style={styles.listImage}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Text onPress={() => navigate('Groups')} style={styles.listTitle}>
                Home Squad
              </Text>
              <Text style={styles.sampleText}>This is also a sample text</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <TouchableOpacity>
          <Ant
            name="pluscircle"
            size={44}
            style={{
              alignSelf: 'flex-end',
              justifyContent: 'center',
              marginRight: 30,
              marginBottom: 10,

              color: 'rgb(0, 180, 144)',
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 0.3,
    paddingVertical: 20,
    backgroundColor: 'rgb(39, 34, 52)',
  },
  body: {
    flex: 5,

    paddingVertical: 10,
    marginHorizontal: 5,
  },
  list: {
    flex: 0.7,
    flexDirection: 'row',
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  listImage: {
    width: 65,
    height: 65,
    borderRadius: 65 / 2,
    borderWidth: 2,
    borderColor: 'rgb(211, 149, 87)',
  },
  listTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
    marginHorizontal: 20,
  },
  sampleText: {
    paddingHorizontal: 20,
    fontSize: 16,
    color: 'rgb(40,40,40)',
    paddingVertical: 3,
  },
});
