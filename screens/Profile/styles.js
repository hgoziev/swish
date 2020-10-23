import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 2.22,
    backgroundColor: 'rgb(39, 34, 52)',
  },
  body: {
    flex: 3,
    backgroundColor: 'rgb(236,236,236)',
  },
  topheader: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'rgb(208, 146, 86)',
    marginTop: 15,
  },

  name: {
    fontSize: 24,
    fontWeight: '700',
    color: 'rgb(216, 152, 88)',
  },
  location: {
    fontSize: 18,
    color: 'silver',
  },
  bio: {
    fontSize: 16,
    color: 'silver',
  },
  bottomHeader: {
    flex: 1,
    backgroundColor: 'rgb(39, 34, 52)',
  },
  followingInfo: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 10,
    backgroundColor: 'rgb(55, 52, 73)',
    borderRadius: 15,
    marginHorizontal: 45,
    paddingVertical: 5,
  },
  numbers: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'white',
  },
  followingText: {
    fontSize: 16,
    marginBottom: 5,
    color: 'silver',
  },
  Tabs: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 5,
    flex: 1,
  },
  tabIcon: {
    color: 'silver',
  },
  scroll: {
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  postedImage: {
    width: width / 3.5,
    height: width / 3.5,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  shopImages: {
    width: width / 3.3,
    height: width / 3.3,
    borderRadius: 13,
  },
  shopBody: {
    flex: 3,
    paddingHorizontal: 10,
    backgroundColor: 'rgb(216,216,216)',
  },
  highlightedImage: {
    height: width / 1.638,
    width: 1.75,
    borderRadius: 10,
    marginRight: 10,
    marginLeft: 15,
    flex: 2,
  },
  shopRowTop: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  shopRow: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 15,
  },
  bookmarkContainer: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(216,216,216)',
  },
});

export default styles;
