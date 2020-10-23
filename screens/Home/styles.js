import {Dimensions, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(46, 41, 63)',
    flex: 1,
  },
  topheader: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgb(39, 34, 52)',
    paddingRight: wp('5%'),
    paddingLeft: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
  },
  linear: {
    borderRadius: 8,
    paddingHorizontal: wp('1.8%'),
    paddingVertical: wp('0.9 %'),
  },
  search: {
    backgroundColor: 'rgb(55, 52, 73)',
    paddingRight: wp('30%'),
    marginRight: wp('-3%'),
    color: 'white',
    paddingLeft: wp('5%'),
    paddingVertical: hp('0.367%'),
    borderRadius: 30,
  },
  storyHeader: {
    flexDirection: 'row',
    flex: 2,
  },
  storyImageContainer: {
    flex: 1,
    marginVertical: 10,
    justifyContent: 'center',
  },

  storyFacesFocused: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    marginHorizontal: wp('1%'),

    borderWidth: 2,
    borderColor: 'rgb(252, 252, 0)',
  },
  storyFaces: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    marginHorizontal: wp('1%'),

    borderWidth: 2.5,
    borderColor: 'rgb(112, 112, 119)',
  },
  scroll: {
    // flex: 1,
    marginBottom: 20,
  },
  posterImageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  posterImage: {
    width: 45,
    height: 45,
    borderRadius: 45 / 2,
  },
  postedImage: {
    width: width / 1.05,
    height: height / 2.7,
    marginTop: 5,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  linearFollow: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
  },
  borderLine: {borderColor: 'rgb(39, 34, 52)', borderWidth: 1},
  feedName: {
    flexDirection: 'column',
    marginRight: width / 2.7,
  },
  feedNameText: {color: 'white', fontSize: 16},
  feedIcons: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  addCommentContainer: {flexDirection: 'row', marginHorizontal: 15},
});
export default styles;
